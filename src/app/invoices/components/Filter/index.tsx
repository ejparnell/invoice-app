'use client';

import { useState } from 'react';
import Image from 'next/image';
import { InvoiceStatus } from '@/types/invoice';
import arrowDowm from '../../../../../public/icon-arrow-down.svg';
import check from '../../../../../public/icon-check.svg';
import presets from '@/styles/presets.module.css';
import styles from './Filter.module.css';

export default function Filter() {
    const ARROW_HEIGHT = 10;
    const ARROW_WIDTH = 17;
    const CHECK_SIZE = 10;
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [selectedOption, setSelectedOption] = useState<InvoiceStatus>(InvoiceStatus.Draft);

    function toggleOptions() {
        setIsOpen((prev) => !prev);
    }

    function handleOptionSelect(option: InvoiceStatus) {
        setSelectedOption(option);
        setIsOpen(false);
    }

    return (
        <div className={styles.filter}>
            {/* Selector */}
            <div className={styles.selector} onClick={toggleOptions}>
                <p className={presets.headingSm}>Filter</p>
                <Image
                    src={arrowDowm}
                    alt='Selector Arrow'
                    width={ARROW_WIDTH}
                    height={ARROW_HEIGHT}
                    className={`${isOpen && styles.rotate}`}
                />
            </div>

            {/* Options */}
            {isOpen && (
                <div className={`${styles.options} ${presets.boxShadow}`}>
                    {Object.values(InvoiceStatus).map((status) => (
                        <div key={status} className={styles.option} onClick={() => handleOptionSelect(status as InvoiceStatus)}>
                            <div className={`${styles.checkBox} ${selectedOption === status && styles.selected}`}>{selectedOption === status && (
                                <Image
                                    src={check}
                                    alt='Selected Option'
                                    width={CHECK_SIZE}
                                    height={CHECK_SIZE}
                                />
                            )}</div>
                            <p className={presets.headingSm}>{status.charAt(0).toUpperCase() + status.slice(1)}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
