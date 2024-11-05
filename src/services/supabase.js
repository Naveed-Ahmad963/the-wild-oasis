import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://uxypfhdwjejbutzkhnif.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV4eXBmaGR3amVqYnV0emtobmlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk1ODAyNzUsImV4cCI6MjA0NTE1NjI3NX0.JSA-A1cYZWlbl6FT3ShgdtosmRIgT1Zl5gtqURlwZE8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
