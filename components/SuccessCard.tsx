import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { SVGProps } from 'react';

export function SuccessCard() {
	return (
		<Card className='w-full max-w-sm'>
			<CardHeader>
				<CardTitle className='text-2xl font-bold text-center'>
					Success!
				</CardTitle>
			</CardHeader>
			<CardContent>
				<div className='space-y-4'>
					<div className='space-y-2'>
						<h3 className='font-semibold text-lg text-center'>
							Your information has been successfully submitted!
						</h3>
						<div className='flex justify-center'>
							<CheckIcon className='w-16 h-16 text-green-500' />
						</div>
					</div>
					<div className='space-y-2'>
						<h3 className='font-semibold text-lg text-center'>
							What&apos;s next?
						</h3>
						<p className='text-gray-700 text-center'>
							We will review your information and create a personalized plan for
							you. You will receive an email with the details within 24 hours.
						</p>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}

function CheckIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<polyline points='20 6 9 17 4 12' />
		</svg>
	);
}
