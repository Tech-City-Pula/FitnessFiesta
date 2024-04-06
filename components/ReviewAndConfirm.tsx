'use client';
import { Form } from '@/components/ui/form';
import { PROFILE_SCHEMA } from '@/lib/validation-schemas/form';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from './ui/button';
import { ReviewInformationSection } from './ReviewInformationSection';
import { useToast } from './ui/use-toast';
import { Loader2 } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';

export function ReviewAndConfirm(props: {
	previousStep: () => void;
	data: z.infer<typeof PROFILE_SCHEMA>;
}) {
	const form = useForm();
	const router = useRouter();
	const { toast } = useToast();

	const handleSubmit = form.handleSubmit(async () => {
		// LEVEL 3 step 4: u zadnjem koraku iskoristiti sve 3 sheme za validirati podatke prije nego se šalju igdje
		// LEVEL 3 step 5: napraviti HTTP POST request prema `/api/profile` sa podacima forme i obrisati session storage u slučaju uspješnog odgovora
		// LEVEL 4 step 6: prikazati success screen u slučaju da sve prođe uredu
		// LEVEL 4 step 5: u slučaju greške prikazati toast poruku
	});

	return (
		<Form {...form}>
			<form
				onSubmit={handleSubmit}
				className='flex flex-col items-center justify-between gap-4 h-full'
			>
				<ReviewInformationSection data={props.data} />

				<div className='flex gap-4 w-full items-center'>
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
						disabled={form.formState.isSubmitting}
						className='w-full flex items-center gap-3 px-4 py-2 bg-blue-400 hover:bg-blue-300 text-white rounded-md'
					>
						{form.formState.isSubmitting && (
							<Loader2 className='size-3 animate-spin' />
						)}
						Submit
					</Button>
				</div>
			</form>
		</Form>
	);
}
