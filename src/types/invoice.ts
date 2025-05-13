import { User } from './user';

export enum InvoiceStatus {
    Draft = 'draft',
    Pending = 'pending',
    Paid = 'paid'
}

export interface Address {
    street: string;
    city: string;
    postCode: string;
    country: string;
}

export interface Item {
    name: string;
    quantity: number;
    price: number;
    total: number;
}

export interface Invoice {
    user: User;
    _id: string;
    invoiceNumber: string;
    paymentDue: Date;
    description: string;
    paymentTerms: number;
    clientName: string;
    clientEmail: string;
    status: InvoiceStatus;
    senderAddress: Address;
    clientAddress: Address;
    items: Item[];
    total: number;
    createdAt: Date;
    updatedAt: Date;
}