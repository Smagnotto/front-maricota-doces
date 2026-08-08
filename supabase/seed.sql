-- ============================================================
-- Seed data for development
-- ============================================================

INSERT INTO configuracoes (margem_percentual)
SELECT 30
WHERE NOT EXISTS (SELECT 1 FROM configuracoes);

INSERT INTO insumos (nome, ativo, preco, tipo) VALUES
  ('Farinha de Trigo', true, 5.50, 'KG'),
  ('Acucar', true, 4.00, 'KG'),
  ('Ovos', true, 15.00, 'KG'),
  ('Manteiga', true, 35.00, 'KG'),
  ('Leite', true, 6.00, 'L'),
  ('Chocolate em Po', true, 25.00, 'KG'),
  ('Fermento', true, 8.00, 'KG'),
  ('Leite Condensado', true, 7.50, 'L'),
  ('Creme de Leite', true, 8.00, 'L'),
  ('Baunilha', true, 45.00, 'L')
ON CONFLICT DO NOTHING;
