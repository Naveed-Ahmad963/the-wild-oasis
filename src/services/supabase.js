import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://gttjbnvmvafppcbavisa.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd0dGpibnZtdmFmcHBjYmF2aXNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzE4Mjk4OTksImV4cCI6MjA4NzQwNTg5OX0.WFe7jrzlOy3xgJndnXK1MxSnKTumakGKvreDOY8SGO0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
