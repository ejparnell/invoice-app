'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

import { getInvoices } from '../services';
import { Invoice } from '@/types/invoice';

interface InvoiceContextType {
    invoices: Invoice[];
}

const InvoiceContext = createContext<InvoiceContextType | undefined>(undefined);

export function InvoiceProvider({ children }: { children: React.ReactNode }) {
    const [invoices, setInvoices] = useState<Invoice[]>([]);

    // On load
    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getInvoices();
                setInvoices(data);
            } catch (error) {
                console.error('Error fetching invoices:', error);
            }
        }
        fetchData();
    }, []);

    // On invoices change
    useEffect(() => {
        
    }, [invoices]);

    function handleFilter(filter: string) {
        
    }

    function fetchInvoices() {}

    function fetchInvoice(id: string) {}

    function createInvoice() {}

    function updateInvoice(id: string) {}

    function deleteInvoice(id: string) {}

    return (
        <InvoiceContext.Provider value={{ invoices }}>
            {children}
        </InvoiceContext.Provider>
    );
}

export function useInvoices() {
    const context = useContext(InvoiceContext);
    if (!context) {
        throw new Error('useInvoices must be used within an InvoiceProvider');
    }
    return context;
}
