'use client';

import Image from 'next/image';
import leftArrrow from '../../../public/icon-arrow-left.svg';
import presets from '@/styles/presets.module.css';
import styles from './Modal.module.css';

export default function Modal({
    children,
    onClose,
}: {
    children: React.ReactNode;
    onClose: () => void;
}) {
    const LEFT_ARROW_SIZE = 10;

    return (
        <div className={styles.modal}>
                <button className={styles.closeBtn} onClick={onClose}>
                    <Image
                        src={leftArrrow}
                        alt='Close'
                        width={LEFT_ARROW_SIZE}
                        height={LEFT_ARROW_SIZE}
                    />
                    <span className={`${presets.headingSm} ${styles.close}`}>Go back</span>
                </button>
                
                <h2 className={`${styles.header} ${presets.headingMd}`}>New Invoice</h2>
            {children}
        </div>
    );
}
