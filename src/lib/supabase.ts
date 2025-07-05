import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://zhmkzelpcmdoqpptnupx.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpobWt6ZWxwY21kb3FwcHRudXB4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM5NDU3NjIsImV4cCI6MjA0OTUyMTc2Mn0.71cddbb852ea6ca5e0297aedab4cadc72ef511c70d82b6eff688abd1991726cb'

export const supabase = createClient(supabaseUrl, supabaseKey)