import { createClient } from "@/lib/supabase/server";
import { PROFILE_SCHEMA } from "@/lib/validation-schemas/form";

export async function POST(req: Request) {
    try {
        // LEVEL 4 step 1: parsirati dolazni JSON
        
        // LEVEL 4 step 2: validirati dolazni JSON
    
        const supabase = createClient();
    
        // LEVEL 4 step 3: spremiti podatke u bazu
       
    
        // LEVEL 4 step 4: vratiti odgovor
       
    } catch (error) {
        console.log(error)
      
    }
}