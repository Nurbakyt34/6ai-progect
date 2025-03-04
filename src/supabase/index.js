

import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://ufgybuqhsadxwksrfeuh.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVmZ3lidXFoc2FkeHdrc3JmZXVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEwNjc0MjUsImV4cCI6MjA1NjY0MzQyNX0.YBjXnaO4TCe96R3lHFzggSI5eoWNrnfrnSUxJD3Vb38"

export const supabase = createClient(supabaseUrl, supabaseKey)


