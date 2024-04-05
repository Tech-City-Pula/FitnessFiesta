'use client';

import { TODO_SCHEMA } from '@/lib/validation-schemas/todo';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from './ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from './ui/card';
import { Checkbox } from './ui/checkbox';
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from './ui/form';
import { Input } from './ui/input';
import { useToast } from './ui/use-toast';

// definiraj resolver za zod shemu van komponente da se ne redefinira stalno
const TODO_RESOLVER = zodResolver(TODO_SCHEMA);

export function TodoForm() {
	// hook za spawnat toasteve
	const { toast } = useToast();

	// hook za logiku forme
	const form = useForm<z.infer<typeof TODO_SCHEMA>>({
		resolver: TODO_RESOLVER,
		defaultValues: {
			title: '',
			completed: false,
		},
		reValidateMode: 'onSubmit',
	});

	// submit handler
	const postTodo = form.handleSubmit(async (formValues) => {
		try {
			// pozovi api rutu i posalji vrijednosti iz forme
			await fetch('/api/todos', {
				method: 'POST',
				body: JSON.stringify(formValues),
			});

			// ako je sve uspjesno prikazi toast
			toast({
				title: 'Todo submitted successfully',
				description: 'Your data is safely stored in our database',
			});

			// resetiraj formu
			form.reset();
		} catch (error) {
			console.error(error);
			// ako se dogodi greska prikazi error toast
			toast({
				title: 'An error occurred',
				description: 'Please try again later',
				variant: 'destructive',
			});
		}
	});

	return (
		<Form {...form}>
			<Card className='max-w-sm w-full'>
				{/* spoji submit handler na formu */}
				<form onSubmit={postTodo}>
					<CardHeader>
						<CardTitle>Add a new todo</CardTitle>
						<CardDescription>never forget a task again</CardDescription>
					</CardHeader>

					{/* todo title input */}
					<CardContent className='space-y-4'>
						<FormField
							disabled={form.formState.isSubmitting}
							control={form.control}
							name='title'
							render={({ field }) => (
								<FormItem>
									<FormLabel>Todo title</FormLabel>
									<FormControl>
										<Input {...field} placeholder='Buy milk' />
									</FormControl>
									<FormDescription />
									<FormMessage />
								</FormItem>
							)}
						/>

						{/* completed checkbox */}
						<FormField
							disabled={form.formState.isSubmitting}
							control={form.control}
							name='completed'
							render={({ field }) => (
								<FormItem>
									<div className='flex items-center gap-2'>
										<FormControl>
											<Checkbox
												checked={field.value}
												onCheckedChange={field.onChange}
											/>
										</FormControl>

										<FormLabel className='leading-0'>
											Have you completed it already?
										</FormLabel>
									</div>

									{/* <FormDescription /> */}
									<FormMessage />
								</FormItem>
							)}
						/>
					</CardContent>
					<CardFooter>
						{/* submit button */}
						<Button
							className='flex items-center gap-2'
							type='submit'
							disabled={!form.formState.isValid || form.formState.isSubmitting}
						>
							{form.formState.isSubmitting && (
								<Loader2 className='size-3 animate-spin' />
							)}
							Submit
						</Button>
					</CardFooter>
				</form>
			</Card>
		</Form>
	);
}
