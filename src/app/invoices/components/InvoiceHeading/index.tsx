import presets from '@/styles/presets.module.css';
import styles from './InvoiceHeading.module.css';

interface InvoiceHeadingProps {
    invoiceNumber: number;
}

export default function InvoiceHeading({ invoiceNumber }: InvoiceHeadingProps) {
    const hasInvoices = invoiceNumber > 0;

    return (
        <div>
            <h1 className={`${presets.headingMd} ${styles.headerTitle}`}>
                Invoices
            </h1>
            <p className={`${presets.body} ${styles.headerSubtext}`}>
                {hasInvoices ? `${invoiceNumber} invoices` : 'No invoices'}
            </p>
        </div>
    );
}
