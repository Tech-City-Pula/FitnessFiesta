import { z } from "zod";

// validacijska shema za todo-se
export const TODO_SCHEMA = z.object({
    title: z.string().min(3),
    completed: z.boolean()
});