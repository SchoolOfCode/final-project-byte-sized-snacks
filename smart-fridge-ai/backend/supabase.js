import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yjgbkibidmshqjqibnjr.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqZ2JraWJpZG1zaHFqcWlibmpyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcxMTAxODcsImV4cCI6MjA0MjY4NjE4N30.eeYIZ31ln4R6rMSw7gkj80BCaKIj57qxy0v4Ag1y_Y4'

const supabase = createClient(supabaseUrl, supabaseAnonKey)
