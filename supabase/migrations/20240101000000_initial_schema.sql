-- ============================================================
-- Maricota Doces - Supabase Database Schema
-- ============================================================

-- ============================================================
-- TABLES
-- ============================================================

CREATE TABLE IF NOT EXISTS insumos (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  nome TEXT NOT NULL,
  ativo BOOLEAN NOT NULL DEFAULT TRUE,
  preco NUMERIC(12, 2) NOT NULL DEFAULT 0,
  tipo TEXT NOT NULL DEFAULT 'KG',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS produtos (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  nome TEXT NOT NULL,
  ativo BOOLEAN NOT NULL DEFAULT TRUE,
  preco NUMERIC(12, 2) DEFAULT 0,
  custo NUMERIC(12, 2) DEFAULT 0,
  margem_percentual NUMERIC(5, 2) DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS insumos_produtos (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  produto_id BIGINT NOT NULL REFERENCES produtos(id) ON DELETE CASCADE,
  insumo_id BIGINT NOT NULL REFERENCES insumos(id) ON DELETE RESTRICT,
  nome TEXT NOT NULL,
  quantidade NUMERIC(12, 4) NOT NULL DEFAULT 0,
  tipo TEXT NOT NULL DEFAULT 'KG',
  valor NUMERIC(12, 2) NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS componentes_produtos (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  produto_id BIGINT NOT NULL REFERENCES produtos(id) ON DELETE CASCADE,
  componente_produto_id BIGINT NOT NULL REFERENCES produtos(id) ON DELETE RESTRICT,
  nome TEXT NOT NULL,
  quantidade NUMERIC(12, 4) NOT NULL DEFAULT 0,
  valor NUMERIC(12, 2) NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS clientes (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  nome TEXT NOT NULL,
  ativo BOOLEAN NOT NULL DEFAULT TRUE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS enderecos (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  cliente_id BIGINT NOT NULL REFERENCES clientes(id) ON DELETE CASCADE,
  logradouro TEXT NOT NULL,
  cep BIGINT NOT NULL,
  complemento TEXT,
  numero INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS configuracoes (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  margem_percentual NUMERIC(5, 2) NOT NULL DEFAULT 0,
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- ============================================================
-- INDEXES
-- ============================================================

CREATE INDEX IF NOT EXISTS idx_insumos_ativo ON insumos(ativo);
CREATE INDEX IF NOT EXISTS idx_insumos_nome ON insumos(nome);
CREATE INDEX IF NOT EXISTS idx_produtos_ativo ON produtos(ativo);
CREATE INDEX IF NOT EXISTS idx_produtos_nome ON produtos(nome);
CREATE INDEX IF NOT EXISTS idx_clientes_ativo ON clientes(ativo);
CREATE INDEX IF NOT EXISTS idx_clientes_nome ON clientes(nome);
CREATE INDEX IF NOT EXISTS idx_insumos_produtos_produto ON insumos_produtos(produto_id);
CREATE INDEX IF NOT EXISTS idx_componentes_produtos_produto ON componentes_produtos(produto_id);
CREATE INDEX IF NOT EXISTS idx_enderecos_cliente ON enderecos(cliente_id);

-- ============================================================
-- TRIGGERS: updated_at
-- ============================================================

CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_insumos_updated_at
  BEFORE UPDATE ON insumos
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER trg_produtos_updated_at
  BEFORE UPDATE ON produtos
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER trg_clientes_updated_at
  BEFORE UPDATE ON clientes
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

CREATE TRIGGER trg_configuracoes_updated_at
  BEFORE UPDATE ON configuracoes
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ============================================================
-- ROW LEVEL SECURITY
-- ============================================================

ALTER TABLE insumos ENABLE ROW LEVEL SECURITY;
ALTER TABLE produtos ENABLE ROW LEVEL SECURITY;
ALTER TABLE insumos_produtos ENABLE ROW LEVEL SECURITY;
ALTER TABLE componentes_produtos ENABLE ROW LEVEL SECURITY;
ALTER TABLE clientes ENABLE ROW LEVEL SECURITY;
ALTER TABLE enderecos ENABLE ROW LEVEL SECURITY;
ALTER TABLE configuracoes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users full access on insumos"
  ON insumos FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users full access on produtos"
  ON produtos FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users full access on insumos_produtos"
  ON insumos_produtos FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users full access on componentes_produtos"
  ON componentes_produtos FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users full access on clientes"
  ON clientes FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users full access on enderecos"
  ON enderecos FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users full access on configuracoes"
  ON configuracoes FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- ============================================================
-- SEED: default configuracoes row
-- ============================================================

INSERT INTO configuracoes (margem_percentual)
SELECT 0
WHERE NOT EXISTS (SELECT 1 FROM configuracoes);

-- ============================================================
-- FUNCTION: simular_produto (calculates cost from insumos + componentes)
-- ============================================================

CREATE OR REPLACE FUNCTION simular_produto(
  p_insumos JSONB DEFAULT '[]'::JSONB,
  p_componentes JSONB DEFAULT '[]'::JSONB
)
RETURNS JSONB AS $$
DECLARE
  v_custo NUMERIC(12, 2) := 0;
  v_preco NUMERIC(12, 2) := 0;
  v_margem NUMERIC(5, 2) := 0;
  v_item JSONB;
BEGIN
  FOR v_item IN SELECT * FROM jsonb_array_elements(p_insumos)
  LOOP
    v_custo := v_custo + COALESCE((v_item->>'valor')::NUMERIC, 0) * COALESCE((v_item->>'quantidade')::NUMERIC, 0);
  END LOOP;

  FOR v_item IN SELECT * FROM jsonb_array_elements(p_componentes)
  LOOP
    v_custo := v_custo + COALESCE((v_item->>'valor')::NUMERIC, 0) * COALESCE((v_item->>'quantidade')::NUMERIC, 0);
  END LOOP;

  SELECT margem_percentual INTO v_margem FROM configuracoes LIMIT 1;

  IF v_margem > 0 THEN
    v_preco := v_custo * (1 + v_margem / 100);
  ELSE
    v_preco := v_custo;
  END IF;

  RETURN jsonb_build_object('custo', v_custo, 'preco', v_preco);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
