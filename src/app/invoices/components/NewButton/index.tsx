import Image from 'next/image';
import plus from '../../../../../public/icon-plus.svg';
import styles from './NewButton.module.css';
import presets from '@/styles/presets.module.css';

interface NewButtonProps {
    handleOpen: () => void;
}

export default function NewButton({ handleOpen }: NewButtonProps) {
    const PLUS_SIZE = 10;

    return (
        <button className={`${styles.newButton} ${presets.headingSm}`} onClick={handleOpen}>
            <span className={styles.iconBg}>
                <Image
                    src={plus}
                    alt='New Invoice'
                    width={PLUS_SIZE}
                    height={PLUS_SIZE}
                />
            </span>
            New
        </button>
    );
}
