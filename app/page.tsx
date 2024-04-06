'use client';

import { DietPreferences } from '@/components/DietPreferences';
import { FitnessGoals } from '@/components/FitnessGoals';
import { ReviewAndConfirm } from '@/components/ReviewAndConfirm';
import { UserInformation } from '@/components/UserInformation';
import { INITIAL_DATA, MAX_STEP, MIN_STEP, STEPS } from '@/lib/const';
import { useFormSteps } from '@/lib/hooks/useFormSteps';
import { PROFILE_SCHEMA } from '@/lib/validation-schemas/form';
import { useState } from 'react';
import { z } from 'zod';

export default function HomePage() {
	const [data, setData] =
		useState<z.infer<typeof PROFILE_SCHEMA>>(INITIAL_DATA);

	// LEVEL 2 step 2: instancirati hook na top levelu i proslijediti handlere u formu
	// const { step, nextStep, previousStep } = useFormSteps();

	return (
		<div className='w-screen h-screen grid grid-cols-2'>
			<div className='col-span-1 bg-blue-600 py-12 px-6 h-full'>
				{/* {step === 0 && (
					<UserInformation
						data={data}
						nextStep={nextStep}
						setData={(data) =>
							setData((prev) => ({
								...prev,
								...data,
							}))
						}
					/>
				)}
				{step === 1 && (
					<FitnessGoals
						data={data}
						nextStep={nextStep}
						previousStep={previousStep}
						setData={(data) =>
							setData((prev) => ({
								...prev,
								...data,
							}))
						}
					/>
				)}
				{step === 2 && (
					<DietPreferences
						data={data}
						nextStep={nextStep}
						previousStep={previousStep}
						setData={(data) =>
							setData((prev) => ({
								...prev,
								...data,
							}))
						}
					/>
				)}
				{step === 3 && (
					<ReviewAndConfirm data={data} previousStep={previousStep} />
				)} */}
			</div>
			<div className='col-span-1 flex flex-col justify-center h-full'>
				<div className='mx-auto max-w-sm'>
					{/* LEVEL 2 step 4: ovisno o koraku prikazati korak i opis koraka */}
					{/* <h1 className='text-3xl font-bold mb-4'>{STEPS[step].title}</h1>
					<p className='text-lg text-gray-500 h-24'>
						{STEPS[step].description}
					</p> */}
				</div>
			</div>
		</div>
	);
}
