import { getServerSession } from 'next-auth/next'
import { buildAuthOptions } from '@/lib/auth/options'

export default async function InvoicePage() {
    const session = await getServerSession(buildAuthOptions())

    return (
        <main>
            <p>This is the invoice page.</p>
        </main>
    );
}
