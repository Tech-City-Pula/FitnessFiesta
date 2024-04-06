'use client';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FITNESS_GOALS_SCHEMA } from '@/lib/validation-schemas/form';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';

// LEVEL 3 step 2: koristeći resolver iz `react-hook-form` bindati validacijsku shemu na formu

export function FitnessGoals(props: {
	nextStep: () => void;
	previousStep: () => void;
	data: z.infer<typeof FITNESS_GOALS_SCHEMA>;
	setData: (data: z.infer<typeof FITNESS_GOALS_SCHEMA>) => void;
}) {
	const form = useForm<z.infer<typeof FITNESS_GOALS_SCHEMA>>({
		// LEVEL 3 step 2: koristeći resolver iz `react-hook-form` bindati validacijsku shemu na formu
		defaultValues: props.data,
	});

	const submitFitnessGoals = form.handleSubmit((formValues) => {
		// LEVEL 3 step 3: nakon validacije podataka spremiti podatke u zadnjički state
		// LEVEL 2 step 3: bindati handlere na buttonima za navigaciju
	});

	return (
		<Form {...form}>
			<form
				onSubmit={submitFitnessGoals}
				className='h-full w-full flex flex-col justify-between'
			>
				<div className='flex flex-col gap-4'>
					<FormField
						control={form.control}
						name='primaryGoal'
						render={({ field }) => (
							<FormItem className='space-y-3'>
								<FormLabel>Primary goal</FormLabel>
								<FormControl>
									<RadioGroup
										onValueChange={field.onChange}
										defaultValue={field.value}
										className='flex flex-col space-y-1'
									>
										<FormItem className='flex items-center space-x-3 space-y-0'>
											<FormControl>
												<RadioGroupItem value='get fit' defaultChecked />
											</FormControl>
											<FormLabel className='font-normal'>Get fit</FormLabel>
										</FormItem>
										<FormItem className='flex items-center space-x-3 space-y-0'>
											<FormControl>
												<RadioGroupItem value='lose weight' />
											</FormControl>
											<FormLabel className='font-normal'>Lose weight</FormLabel>
										</FormItem>
										<FormItem className='flex items-center space-x-3 space-y-0'>
											<FormControl>
												<RadioGroupItem value='gain muscle' />
											</FormControl>
											<FormLabel className='font-normal'>Gain muscle</FormLabel>
										</FormItem>
									</RadioGroup>
								</FormControl>
								<FormDescription>
									What you&apos;d like to achieve
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='experienceLevel'
						render={({ field }) => (
							<FormItem className='space-y-3'>
								<FormLabel>Experience level</FormLabel>
								<FormControl>
									<RadioGroup
										onValueChange={field.onChange}
										defaultValue={field.value}
										className='flex flex-col space-y-1'
									>
										<FormItem className='flex items-center space-x-3 space-y-0'>
											<FormControl>
												<RadioGroupItem value='beginner' />
											</FormControl>
											<FormLabel className='font-normal'>Beginner</FormLabel>
										</FormItem>
										<FormItem className='flex items-center space-x-3 space-y-0'>
											<FormControl>
												<RadioGroupItem value='intermediate' />
											</FormControl>
											<FormLabel className='font-normal'>
												Intermediate
											</FormLabel>
										</FormItem>
										<FormItem className='flex items-center space-x-3 space-y-0'>
											<FormControl>
												<RadioGroupItem value='advanced' />
											</FormControl>
											<FormLabel className='font-normal'>Advanced</FormLabel>
										</FormItem>
									</RadioGroup>
								</FormControl>
								<FormDescription>
									Tell us about your experience level
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='weeklyExerciseDays'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Weekly exercise goal</FormLabel>
								<FormControl>
									<Input {...field} type='number' />
								</FormControl>
								<FormDescription>
									How many times do you think you&apos;ll be able to work out
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<div className='flex justify-between space-x-4'>
					<Button
						type='button'
						onClick={props.previousStep}
						variant='outline'
						className='w-full px-4 py-2 rounded-md'
					>
						Previous
					</Button>
					<Button
						type='submit'
						className='w-full px-4 py-2 bg-blue-400 hover:bg-blue-300 text-white rounded-md'
					>
						Next
					</Button>
				</div>
			</form>
		</Form>
	);
}
