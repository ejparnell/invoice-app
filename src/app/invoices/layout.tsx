import { InvoiceProvider } from './context/InvoiceProvider';
import InvoiceHeader from './components/InvoiceHeader';

export default function InvoiceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <InvoiceProvider>
            <InvoiceHeader />
            {children}
        </InvoiceProvider>
    );
}
