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
import { DIET_PREFERENCES_SCHEMA } from '@/lib/validation-schemas/form';
import { Button } from './ui/button';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from './ui/select';
import { Checkbox } from './ui/checkbox';
import { ALLERGIES } from '@/lib/const';

// LEVEL 3 step 2: koristeći resolver iz `react-hook-form` bindati validacijsku shemu na formu
// const DIET_PREFERENCES_RESOLVER = zodResolver(DIET_PREFERENCES_SCHEMA);

export function DietPreferences(props: {
	nextStep: () => void;
	previousStep: () => void;
	data: z.infer<typeof DIET_PREFERENCES_SCHEMA>;
	setData: (data: z.infer<typeof DIET_PREFERENCES_SCHEMA>) => void;
}) {
	const form = useForm<z.infer<typeof DIET_PREFERENCES_SCHEMA>>({
		// LEVEL 3 step 2: koristeći resolver iz `react-hook-form` bindati validacijsku shemu na formu
		// resolver: DIET_PREFERENCES_RESOLVER,
		defaultValues: props.data,
	});

	const handleSubmit = form.handleSubmit((formValues) => {
		// LEVEL 3 step 3: 3. nakon validacije podataka spremiti podatke u zadnjički state
		// props.setData(formValues);
		// LEVEL 2 step 3: bindati handlere na buttonima za navigaciju
		// props.nextStep();
	});

	return (
		<Form {...form}>
			<form
				onSubmit={handleSubmit}
				className='h-full w-full flex flex-col justify-between'
			>
				<div className='flex flex-col gap-4'>
					<FormField
						control={form.control}
						name='dietType'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Diet type</FormLabel>
								<Select
									onValueChange={field.onChange}
									defaultValue={field.value}
								>
									<FormControl>
										<SelectTrigger>
											<SelectValue placeholder='Select your diet type' />
										</SelectTrigger>
									</FormControl>
									<SelectContent>
										<SelectItem value='omnivore'>Omnivore</SelectItem>
										<SelectItem value='vegan'>Vegan</SelectItem>
										<SelectItem value='vegetarian'>Vegetarian</SelectItem>
										<SelectItem value='pescetarian'>Pescetarian</SelectItem>
										<SelectItem value='keto'>Keto</SelectItem>
									</SelectContent>
								</Select>
								<FormDescription>Please provide your diet type</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='allergies'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Allergies</FormLabel>
								{ALLERGIES.map((allergy) => (
									<FormField
										key={allergy}
										control={form.control}
										name='allergies'
										render={({ field }) => {
											return (
												<FormItem
													key={allergy}
													className='flex flex-row items-start space-x-3 space-y-0'
												>
													<FormControl>
														<Checkbox
															checked={field.value?.includes(allergy as any)}
															onCheckedChange={(checked) => {
																return checked
																	? field.onChange([...field.value, allergy])
																	: field.onChange(
																			field.value?.filter(
																				(value: string) => value !== allergy
																			)
																	  );
															}}
														/>
													</FormControl>
													<FormLabel className='font-normal capitalize'>
														{allergy}
													</FormLabel>
												</FormItem>
											);
										}}
									/>
								))}
								<FormDescription>
									Make sure to let us know if you have any allergies
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>

				<div className='flex justify-between space-x-4'>
					<Button
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
