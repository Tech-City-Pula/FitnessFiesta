import { useState } from "react";
import { MAX_STEP, MIN_STEP } from "../const";


// LEVEL 2 step 1: stvoriti hook koji će pratiti trenutni korak forme i izložiti funkcije za navigaciju naprijed i nazad
export function useFormSteps() {
    const [step, setStep] = useState(MIN_STEP);

	const nextStep = () => {
		
	};

	const previousStep = () => {
		
	};

    return {
        step, nextStep, previousStep
    }
}