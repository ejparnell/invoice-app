export async function getInvoices() {
    const res = await fetch('/api/invoices')

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    
    return res.json()
}
