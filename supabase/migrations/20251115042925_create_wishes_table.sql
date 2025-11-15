/*
  # Create Wishes Table

  1. New Tables
    - `wishes`
      - `id` (uuid, primary key)
      - `name` (text, guest name)
      - `message` (text, congratulatory message)
      - `created_at` (timestamp)
  2. Security
    - Enable RLS on `wishes` table
    - Add policy for anyone to insert wishes
    - Add policy for anyone to view all wishes
*/

CREATE TABLE IF NOT EXISTS wishes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE wishes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert wishes"
  ON wishes
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Anyone can view wishes"
  ON wishes
  FOR SELECT
  TO anon, authenticated
  USING (true);
