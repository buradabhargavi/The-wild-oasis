import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://qhchoxtvijyajsqjteqc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFoY2hveHR2aWp5YWpzcWp0ZXFjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjExMzcwMjAsImV4cCI6MjAzNjcxMzAyMH0.HBZnQ1lPfgcASg_5VAfEZjmnNAqg-m78HuPO5iD1Qzs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
