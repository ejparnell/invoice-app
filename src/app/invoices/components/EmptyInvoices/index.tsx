import Image from 'next/image';
import empty from '../../../../../public/illustration-empty.svg';
import styles from './EmptyInvoices.module.css';
import presets from '@/styles/presets.module.css';

export default function EmptyInvoices() {
    const EMPTY_WIDTH_SIZE = 200;
    const EMPTY_HEIGHT_SIZE = 160;

    return (
        <div className={styles.empty}>
            <Image
                src={empty}
                alt='Empty Invoice'
                width={EMPTY_WIDTH_SIZE}
                height={EMPTY_HEIGHT_SIZE}
            />
            <h2 className={`${presets.headingMd} ${styles.emptyTitle}`}>
                There is nothing here
            </h2>
            <p className={`${presets.body} ${styles.emptySubtitle}`}>
                Create an invoice by clicking the <strong>New</strong> button
                and get started
            </p>
        </div>
    );
}
