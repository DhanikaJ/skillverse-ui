import React, { ChangeEventHandler } from 'react'

interface InputFieldProps {
    label: string;
    type: string;
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
}

function InputField({ label, type, value, onChange }: InputFieldProps) {
    const id = label.toLowerCase().replace(/\s+/g, "-");
    return (
        <div className='mb-4'>
            <label htmlFor={id} className='block mb-2 text-sm font-medium text-gray-700'>
                {label}
            </label>
            <input
                id={id}
                type={type}
                value={value}
                onChange={onChange}
                className='w-full rounded border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50'
            />

        </div>
    )
}

export default InputField