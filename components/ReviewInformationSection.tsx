import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { PROFILE_SCHEMA } from '@/lib/validation-schemas/form';
import { z } from 'zod';

export function ReviewInformationSection(props: {
	data: z.infer<typeof PROFILE_SCHEMA>;
}) {
	return (
		<Card className='w-full'>
			<CardHeader>
				<CardTitle className='text-2xl font-bold text-center'>
					Review your information
				</CardTitle>
			</CardHeader>
			<CardContent>
				<div className='space-y-4'>
					<div className='space-y-2'>
						<h3 className='font-semibold text-lg'>User information</h3>
						<div className='grid grid-cols-2 gap-2'>
							<div>
								<Label htmlFor='name'>Name</Label>
								<div className='text-gray-700' id='name'>
									{props.data.name}
								</div>
							</div>
							<div>
								<Label htmlFor='age'>Age</Label>
								<div className='text-gray-700' id='age'>
									{props.data.age}
								</div>
							</div>
							<div>
								<Label htmlFor='gender'>Gender</Label>
								<div className='text-gray-700 capitalize' id='gender'>
									{props.data.gender}
								</div>
							</div>
						</div>
					</div>
					<div className='space-y-2'>
						<h3 className='font-semibold text-lg'>Fitness goals</h3>
						<div className='grid grid-cols-2 gap-2'>
							<div>
								<Label htmlFor='goal'>Primary goal</Label>
								<div className='text-gray-700' id='goal'>
									{props.data.primaryGoal
										.split('')
										.map((letter, i) =>
											i === 0 ? letter.toUpperCase() : letter
										)
										.join('')}
								</div>
							</div>
							<div>
								<Label htmlFor='days'>Weekly exercise days</Label>
								<div className='text-gray-700' id='days'>
									{props.data.weeklyExerciseDays}
								</div>
							</div>
							<div>
								<Label htmlFor='experience'>Experience level</Label>
								<div className='text-gray-700 capitalize' id='experience'>
									{props.data.experienceLevel}
								</div>
							</div>
						</div>
					</div>
					<div className='space-y-2'>
						<h3 className='font-semibold text-lg'>Diet preferences</h3>
						<div className='grid grid-cols-2 gap-2'>
							<div>
								<Label htmlFor='diet'>Diet type</Label>
								<div className='text-gray-700 capitalize' id='diet'>
									{props.data.dietType}
								</div>
							</div>
							<div>
								<Label htmlFor='allergies'>Allergies</Label>
								<div className='text-gray-700' id='allergies'>
									{props.data.allergies.length > 0
										? props.data.allergies
												.map((word, i) =>
													i === 0
														? word
																.split('')
																.map((letter, i) =>
																	i === 0 ? letter.toUpperCase() : letter
																)
																.join('')
														: word
												)
												.join(', ')
										: 'none'}
								</div>
							</div>
						</div>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
