import { z } from "zod";
import { PROFILE_SCHEMA } from "./validation-schemas/form";

export const STEPS = [
	{
		title: 'User information',
		description:
			'Help us personalize your fitness program by providing your information.',
	},
	{
		title: 'Fitness goals',
		description:
			'Let us understand your fitness goals so we can create a tailored workout plan just for you.',
	},
	{
		title: 'Diet preferences',
		description:
			'Share your dietary preferences with us, so we can design a meal plan that suits your tastes and needs.',
	},
	{
		title: 'Review and confirm',
		description:
			'Take a moment to review and confirm your choices before submitting the form. Your satisfaction is our priority.',
	},
];

export const ALLERGIES = [
	'dairy',
	'gluten',
	'soy',
	'nuts',
	'shellfish',
	'eggs',
];

export const MIN_STEP = 0;
export const MAX_STEP = STEPS.length - 1;

export const INITIAL_DATA = {
    age: 13,
    allergies: [],
    dietType: 'omnivore',
    experienceLevel: 'beginner',
    gender: 'male',
    name: '',
    primaryGoal: 'get fit',
    weeklyExerciseDays: 3,
} satisfies z.infer<typeof PROFILE_SCHEMA>;

