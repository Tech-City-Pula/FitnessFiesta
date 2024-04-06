import { z } from "zod";

// LEVEL 3 step 1: koristeći `zod` složiti shemu za 3 koraka forme
export const USER_INFORMATION_SCHEMA = z.object({
	name: z.any(),
	age: z.any(),
	gender: z.any(),
});
// export const USER_INFORMATION_SCHEMA = z.object({
// 	name: z.string().min(2, `Name must be at least 2 characters long.`),
// 	age: z.coerce.number().int('Age cannot be a decimal number.').min(13, 'Must be 13 or older.').max(120, `You're too old, please enjoy your life instead.`),
// 	gender: z.union([z.literal('male'), z.literal('female')], {invalid_type_error: 'Gender must be either "male" or "female".', required_error: 'Gender is required.'}),
// });

// LEVEL 3 step 1: koristeći `zod` složiti shemu za 3 koraka forme
export const FITNESS_GOALS_SCHEMA = z.object({
	primaryGoal: z.any(),
	weeklyExerciseDays: z.any(),
	experienceLevel: z.any(),
});
// export const FITNESS_GOALS_SCHEMA = z.object({
// 	primaryGoal: z.union([
// 		z.literal('lose weight'),
// 		z.literal('gain muscle'),
// 		z.literal('get fit'),
// 	], {
// 		required_error: "You need to specify your primary goal.",
// 		invalid_type_error: 'Primary goal has to be "lose weight", "gain muscle" or "get fit".'
// 	}),
// 	weeklyExerciseDays: z.coerce.number().int('Weekly exercise days cannot be a decimal number.').min(1, "Must be at least one day.").max(7, "A week only has 7 days."),
// 	experienceLevel: z.union([
// 		z.literal('beginner'),
// 		z.literal('intermediate'),
// 		z.literal('advanced'),
// 	], {
// 		required_error: "You need to specify your experience level.",
// 		invalid_type_error: 'Experience level has to be "beginner", "intermediate" or "advanced".'
// 	}),
// });

// LEVEL 3 step 1: koristeći `zod` složiti shemu za 3 koraka forme
export const DIET_PREFERENCES_SCHEMA = z.object({
	dietType: z.any(),
	allergies: z.any(),
});
// export const DIET_PREFERENCES_SCHEMA = z.object({
// 	dietType: z.union([
// 		z.literal('omnivore'),
// 		z.literal('vegan'),
// 		z.literal('vegetarian'),
// 		z.literal('pescatarian'),
// 		z.literal('keto'),
// 	], {
// 		required_error: "You need to specify your diet type.",
// 		invalid_type_error: 'Diet type has to be "omnivore", "vegan", "vegetarian", "pescatarian" or "keto".'
// 	}),
// 	allergies: z.array(
// 		z.union([
// 			z.literal('dairy'),
// 			z.literal('gluten'),
// 			z.literal('soy'),
// 			z.literal('nuts'),
// 			z.literal('shellfish'),
// 			z.literal('eggs'),
// 		], {
// 			required_error: "You need to specify allergies (if you have any).",
// 			invalid_type_error: 'Allergies has to be an array of "dairy", "gluten", "soy", "nuts", "shellfish" or "eggs".'
// 		})
// 	),
// });


// LEVEL 3 step 4: u zadnjem koraku iskoristiti sve 3 sheme za validirati podatke prije nego se šalju igdje
export const PROFILE_SCHEMA = z.any()
// export const PROFILE_SCHEMA = USER_INFORMATION_SCHEMA.merge(
// 	FITNESS_GOALS_SCHEMA
// ).merge(DIET_PREFERENCES_SCHEMA);