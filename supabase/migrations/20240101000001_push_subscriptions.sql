-- ============================================================
-- Push Notification Subscriptions
-- ============================================================

CREATE TABLE IF NOT EXISTS push_subscriptions (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  endpoint TEXT NOT NULL UNIQUE,
  p256dh TEXT NOT NULL,
  auth TEXT NOT NULL,
  user_agent TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_push_subscriptions_endpoint ON push_subscriptions(endpoint);

CREATE TRIGGER trg_push_subscriptions_updated_at
  BEFORE UPDATE ON push_subscriptions
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();

ALTER TABLE push_subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Authenticated users can manage push subscriptions"
  ON push_subscriptions FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- ============================================================
-- Function: send push notification (called from Edge Functions)
-- ============================================================

CREATE OR REPLACE FUNCTION get_push_subscriptions()
RETURNS SETOF push_subscriptions AS $$
BEGIN
  RETURN QUERY SELECT * FROM push_subscriptions;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
