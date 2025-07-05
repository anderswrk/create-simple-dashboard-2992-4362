import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zhmkzelpcmdoqpptnupx.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpobWt6ZWxwY21kb3FwcHRudXB4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ0MDA5NjIsImV4cCI6MjA1OTk3Njk2Mn0.qqJ2SwieZ1JdbiA9od1xsJwGvp0flOCCiIizNgeue3E'

export const supabase = createClient(supabaseUrl, supabaseKey)