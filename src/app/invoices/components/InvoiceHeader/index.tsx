'use client';

import { useInvoices } from '../../context/InvoiceProvider';
import Filter from '../Filter';
import presets from '@/styles/presets.module.css';
import styles from './InvoiceHeader.module.css';

export default function InvoiceHeader() {
    const { invoices } = useInvoices();
    const hasInvoices = invoices.length > 0;

    return (
        <header className={styles.header}>

            {/* Heading */}
            <div>
                <h1 className={presets.headingMd}>Invoices</h1>
                <p className={`${presets.body} ${styles.headerSubtext}`}>{hasInvoices ? `${invoices.length} invoices` : 'No invoices'}</p>
            </div>

            {/* Actions */}
            <div className={styles.actions}>
                {/* Dropdown filter */}
                <Filter />

                {/* New Button */}
            </div>
        </header>
    );
}
