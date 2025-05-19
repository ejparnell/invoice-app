import { InvoiceProvider } from './context/InvoiceProvider';
import InvoiceHeader from './components/InvoiceActions';
import styles from './layout.module.css';

export default function InvoiceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <InvoiceProvider>
            <div className={styles.container}>
                <InvoiceHeader />
                {children}
            </div>
        </InvoiceProvider>
    );
}
