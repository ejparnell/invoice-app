'use client';

import { useState } from 'react';
import { useInvoices } from '../../context/InvoiceProvider';
import Filter from '../Filter';
import NewButton from '../NewButton';
import CreateInvoice from '../CreateInvoice';
// import presets from '@/styles/presets.module.css';
import styles from './InvoiceActions.module.css';
import InvoiceHeading from '../InvoiceHeading';

export default function InvoiceActions() {
    const { invoices } = useInvoices();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    function handleOpen() {
        setIsOpen(true);
    }

    function handleClose() {
        setIsOpen(false);
    }

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                {/* Heading */}
                <InvoiceHeading invoiceNumber={invoices.length} />

                {/* Actions */}
                <div className={styles.actions}>
                    {/* Dropdown filter */}
                    <Filter />

                    
                    {/* New Button */}
                    <NewButton handleOpen={handleOpen} />
                </div>
            </header>
            {/* Modal Create */}
            {isOpen && <CreateInvoice handleClose={handleClose} />}
        </div>
    );
}
