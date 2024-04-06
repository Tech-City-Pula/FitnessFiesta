import { z } from "zod";

// LEVEL 3 step 1: koristeći `zod` složiti shemu za 3 koraka forme
export const USER_INFORMATION_SCHEMA = z.object({
	name: z.any(),
	age: z.any(),
	gender: z.any(),
});

// LEVEL 3 step 1: koristeći `zod` složiti shemu za 3 koraka forme
export const FITNESS_GOALS_SCHEMA = z.object({
	primaryGoal: z.any(),
	weeklyExerciseDays: z.any(),
	experienceLevel: z.any(),
});

// LEVEL 3 step 1: koristeći `zod` složiti shemu za 3 koraka forme
export const DIET_PREFERENCES_SCHEMA = z.object({
	dietType: z.any(),
	allergies: z.any(),
});

// LEVEL 3 step 4: u zadnjem koraku iskoristiti sve 3 sheme za validirati podatke prije nego se šalju igdje
export const PROFILE_SCHEMA = z.any()
