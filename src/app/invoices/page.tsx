import { getServerSession } from 'next-auth/next'
import { buildAuthOptions } from '@/lib/auth/options'
import EmptyInvoices from './components/EmptyInvoices';
import styles from './page.module.css'

export default async function InvoicePage() {
    const session = await getServerSession(buildAuthOptions())

    return (
        <main className={styles.invoices}>
            <EmptyInvoices />
        </main>
    );
}
