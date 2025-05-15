'use client'

import { useId } from 'react';
import { PatternFormat } from 'react-number-format';
import styles from './form-input.module.scss';

type FormInputType = {
    value?: string;
    isRequired?: boolean;
    mask?: string;
    theme?: string;
    name: string;
    label: string;
    type?: string;
    onChange: (evt: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onBlur?: (evt: React.FocusEvent<HTMLInputElement>) => void;
}

const FormInput = ({
    theme,
    name,
    label,
    type = "text",
    onChange,
    isRequired = true,
    value,
    onBlur,
    mask
}: FormInputType) => {
    const id = useId();

    const themeStyle = `${theme ? styles[`theme${theme.charAt(0).toUpperCase() + theme.slice(1)}`] : ''}`;
    const inputClassName = `${styles.input} ${themeStyle}`;

    if (mask) {
        return (
            <>
                <label className="visually-hidden" htmlFor={name}>{label}</label>
                <PatternFormat
                    className={inputClassName}
                    id={id}
                    name={name}
                    format="+7 ### ### ## ##"
                    mask="_"
                    placeholder={label}
                    value={value}
                    onValueChange={(values) => {
                        const event = {
                            target: {
                                name,
                                value: values.value
                            }
                        } as React.ChangeEvent<HTMLInputElement>;
                        onChange(event);
                    }}
                    onBlur={onBlur}
                    required={isRequired}
                />
            </>
        );
    }

    return (
        <>
            <label className="visually-hidden" htmlFor={name}>{label}</label>
            <input
                className={inputClassName}
                id={id}
                name={name}
                type={type}
                placeholder={label}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                required={isRequired}
            />
        </>
    );
}

export default FormInput;