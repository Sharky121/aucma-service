'use client'

import { useId } from 'react';
import styles from './form-input.module.scss';

type FormInputType = {
    value?: string;
    isRequired?: boolean;
    mask?: string;
    theme?: string;
    name: string;
    label: string;
    type?: string;
    onChange: (evt: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const FormInput = ({theme, name, label, type="text", onChange, isRequired = true, value }: FormInputType) => {
    const id= useId();

    const themeStyle = `${theme ? styles[`theme${theme.charAt(0).toUpperCase() + theme.slice(1)}`] : ''}`;

    return (
        <>
            <label className="visually-hidden" htmlFor={name}>{label}</label>
            <input className={`${styles.input} ${themeStyle}`} 
                   id={id} 
                   name={name} 
                   type={type} 
                   placeholder={label} 
                   value={value} 
                   onChange={onChange}
                   required={isRequired} />
        </>
    )
}

export default FormInput;