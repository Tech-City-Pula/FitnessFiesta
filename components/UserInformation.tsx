'use client';
import {
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormDescription,
	FormMessage,
	Form,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { USER_INFORMATION_SCHEMA } from '@/lib/validation-schemas/form';
import { Button } from './ui/button';

// LEVEL 3 step 2: koristeći resolver iz `react-hook-form` bindati validacijsku shemu na formu
// const USER_INFORMATION_RESOLVER = zodResolver(USER_INFORMATION_SCHEMA);

export function UserInformation(props: {
	nextStep: () => void;
	data: z.infer<typeof USER_INFORMATION_SCHEMA>;
	setData: (data: z.infer<typeof USER_INFORMATION_SCHEMA>) => void;
}) {
	const form = useForm<z.infer<typeof USER_INFORMATION_SCHEMA>>({
		// LEVEL 3 step 2: koristeći resolver iz `react-hook-form` bindati validacijsku shemu na formu
		// resolver: USER_INFORMATION_RESOLVER,
		defaultValues: props.data,
	});

	const submitUserInformation = form.handleSubmit((formValues) => {
		// LEVEL 3 step 3: 3. nakon validacije podataka spremiti podatke u zadnjički state
		// props.setData(formValues);
		// LEVEL 2 step 3: bindati handlere na buttonima za navigaciju
		// props.nextStep();
	});

	return (
		<Form {...form}>
			<form
				onSubmit={submitUserInformation}
				className='h-full w-full flex flex-col justify-between'
			>
				<div className='flex flex-col gap-4'>
					<FormField
						control={form.control}
						name='name'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Name</FormLabel>
								<FormControl>
									<Input {...field} placeholder='John Doe' />
								</FormControl>
								<FormDescription>Please provide your full name</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='age'
						render={({ field }) => (
							<FormItem>
								<FormLabel>Age</FormLabel>
								<FormControl>
									<Input
										{...field}
										type='number'
										min={13}
										max={120}
										placeholder='18'
									/>
								</FormControl>
								<FormDescription>Please provide your age</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name='gender'
						render={({ field }) => (
							<FormItem className='space-y-3'>
								<FormLabel>Gender</FormLabel>
								<FormControl>
									<RadioGroup
										onValueChange={field.onChange}
										defaultValue={field.value}
										className='flex flex-col space-y-1'
									>
										<FormItem className='flex items-center space-x-3 space-y-0'>
											<FormControl>
												<RadioGroupItem value='male' />
											</FormControl>
											<FormLabel className='font-normal'>Male</FormLabel>
										</FormItem>
										<FormItem className='flex items-center space-x-3 space-y-0'>
											<FormControl>
												<RadioGroupItem value='female' />
											</FormControl>
											<FormLabel className='font-normal'>Female</FormLabel>
										</FormItem>
									</RadioGroup>
								</FormControl>
								<FormDescription>Please select your gender</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
				</div>
				<div className='flex justify-between space-x-4'>
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
