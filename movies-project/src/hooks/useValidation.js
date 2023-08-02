import { useEffect, useState } from 'react';

export function useValidation(value, validations) {
    const [isEmpty, setEmpty] = useState(true);
    const [minLengthError, setMinLengthError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [inputValid, setInputValid] = useState(false);
    useEffect(() => {
        for (const i in validations) {
            switch (i) {
                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true)
                    break;
                case 'minLength':
                    value.length < validations[i] ? setMinLengthError(true) : setMinLengthError(false)
                    break;
                case 'isEmail':
                    const email = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/
                    email.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true)
                    break;
                // no default
            }
        }
    }, [value, validations])

    useEffect(() => {
        if (isEmpty || minLengthError || emailError) {
            setInputValid(false);
        } else {
            setInputValid(true);
        }
    }, [isEmpty, minLengthError, emailError]);

    return {
        isEmpty,
        minLengthError,
        emailError,
        inputValid,
        setInputValid
    }
}