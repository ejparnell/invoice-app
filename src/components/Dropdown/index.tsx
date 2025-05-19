'use client';

import { useState } from 'react';
import Image from 'next/image';
import downArrow from '../../../public/icon-arrow-down.svg';
import presets from '@/styles/presets.module.css';
import styles from './Dropdown.module.css';

interface DropdownProps {
    options: string[];
    selectedOption: string;
    onSelect: (option: string) => void;
}

export default function Dropdown({
    options,
    selectedOption,
    onSelect,
}: DropdownProps) {
    const SELECTOR_WIDTH = 9;
    const SELECTOR_HEIGHT = 5;
    const [isOpen, setIsOpen] = useState(false);

    function handleToggle() {
        setIsOpen((prev) => !prev);
    }

    function handleSelect(option: string) {
        onSelect(option);
        setIsOpen(false);
    }

    return (
        <div className={styles.container}>
            {/* Selector */}
            <div className={`${presets.headingSm} ${styles.selector} ${isOpen && styles.selectorFocus}`} onClick={handleToggle}>
                {selectedOption}
                <Image
                    src={downArrow}
                    alt='Dropdown'
                    width={SELECTOR_WIDTH}
                    height={SELECTOR_HEIGHT}
                />
            </div>

            {/* Options */}
            {isOpen && (
                <div className={`${presets.boxShadow} ${styles.options}`}>
                    {options.map((option) => (
                        <div className={styles.option} key={option} onClick={() => handleSelect(option)}>
                            <p className={`${presets.headingSm} ${selectedOption === option ? styles.selected : styles.unselected} ${styles.optionText}`}>{option}</p>

                            {/* Separator */}
                            {option !== options[options.length - 1] && <hr className={styles.separator} />}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
