import { TODO_SCHEMA } from "@/lib/validation-schemas/todo";
import { ZodError } from "zod";

export async function POST(req:Request) {
    try {
        // parsiraj json iz requesta
        const json = await req.json();
    
        // validiraj json prema TODO_SCHEMA
        TODO_SCHEMA.parse(json);
    
        // ako je sve proslo ok, vrati success response
        return Response.json({
            type: 'success'
        })
    } catch (error) {
        // ako je error tipa ZodError, znaci da je doslo do greske u validaciji
        if (error instanceof ZodError) {
            const errorMessage = error.errors.map(issue => {
                // znamo da nam TODO_SCHEMA ima samo ove validacije, tako da samo njih handlamo tu
                switch (issue.code) {
                    case 'invalid_type':
                        return `Invalid type for property "${issue.path}", expected ${issue.expected} received ${issue.received}.`
                    case 'too_small':
                        return `Property "${issue.path}" is too small, expected at least ${issue.minimum} characters.`
                    default:
                        return 'Unknown error'
                }
            }).join(' '); // spoji sve poruke u jedan string

            return Response.json({
                type: 'error',
                error: errorMessage
            })
        }

        // logaj sve ostale error-e
        console.error(error);
        throw new Error('Unknown error');
    }
}