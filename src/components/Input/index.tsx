'use client';

import presets from '@/styles/presets.module.css';
import styles from './Input.module.css';

interface InputProps {
    label: string;
    placeholder?: string;
    type: string;
    value: string | number;
    name: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
    label,
    placeholder,
    type,
    value,
    name,
    onChange,
}: InputProps) {
    return (
        <div className={styles.container}>
            <label htmlFor={name} className={`${presets.body} ${styles.label}`}>
                {label}
            </label>
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className={`${presets.headingSm} ${styles.input}`}
            />
        </div>
    )
}