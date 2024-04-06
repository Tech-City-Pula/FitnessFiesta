import { createClient } from "@/lib/supabase/server";
import { PROFILE_SCHEMA } from "@/lib/validation-schemas/form";

export async function POST(req: Request) {
    try {
        // LEVEL 4 step 1: parsirati dolazni JSON
        // const json = await req.json();
        
        // LEVEL 4 step 2: validirati dolazni JSON
        // const data = PROFILE_SCHEMA.parse(json);
    
        const supabase = createClient();
    
        // LEVEL 4 step 3: spremiti podatke u bazu
        // await supabase.from('profile').insert({
        //     name: data.name,
        //     age: data.age,
        //     gender: data.gender,
        //     primary_goal: data.primaryGoal,
        //     experience_level: data.experienceLevel,
        //     weekly_exercise_days: data.weeklyExerciseDays,
        //     diet_type: data.dietType,
        //     allergies: data.allergies,
        // })
    
        // LEVEL 4 step 4: vratiti odgovor
        // return Response.json({
        //     type: 'success',
        //     message: 'Profile successfully saved.'
        // })
    } catch (error) {
        console.log(error)
        // return Response.json({
        //     type: 'error',
        //     message: 'Something went wrong. Try again.'
        // })
    }
}