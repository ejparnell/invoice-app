'use client';

import { useState } from 'react';
import Modal from '@/components/Modal';
import Input from '@/components/Input';
import { Item } from '@/types/invoice';
import presets from '@/styles/presets.module.css';
import styles from './CreateInvoice.module.css';
import Dropdown from '@/components/Dropdown';
import DateDropdown from '@/components/DateDropdown';
import ItemForm from '@/components/ItemForm';

interface CreateInvoiceProps {
    handleClose: () => void;
}

const paymentTermsOptions = [
    'Net 1 Day',
    'Net 7 Days',
    'Net 14 Days',
    'Net 30 Days',
];

export default function CreateInvoice({ handleClose }: CreateInvoiceProps) {
    const [formData, setFormData] = useState({
        billFrom: {
            streetAddress: '',
            city: '',
            postCode: '',
            country: '',
        },
        billTo: {
            clientName: '',
            clientEmail: '',
            streetAddress: '',
            city: '',
            postCode: '',
            country: '',
        },
        invoiceDate: new Date(),
        paymentTerms: paymentTermsOptions[0],
        projectDescription: '',
        items: [] as Item[],
        total: 0,
    });
    const { billFrom, billTo } = formData;

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;

        if (name in billFrom) {
            setFormData((prevState) => ({
                ...prevState,
                billFrom: {
                    ...prevState.billFrom,
                    [name]: value,
                },
            }));
        } else if (name in billTo) {
            setFormData((prevState) => ({
                ...prevState,
                billTo: {
                    ...prevState.billTo,
                    [name]: value,
                },
            }));
        } else {
            setFormData((prevState) => ({
                ...prevState,
                [name]: value,
            }));
        }
    }

    function handleSelect(option: string) {
        setFormData((prevState) => ({
            ...prevState,
            paymentTerms: option,
        }));
    }

    function handleDateSelect(date: Date) {
        setFormData((prevState) => ({
            ...prevState,
            invoiceDate: date,
        }));
    }

    function handleAddItem() {
        setFormData((prevState) => ({
            ...prevState,
            items: [
                ...prevState.items,
                {
                    name: '',
                    quantity: 0,
                    price: 0,
                    total: 0,
                },
            ],
        }));
    }

    function handleItemChange(
        idx: number,
        field: keyof Item,
        value: string | number
    ) {
        setFormData((prev) => {
            const items = [...prev.items];
            const updated = { ...items[idx], [field]: value };

            if (field === 'quantity' || field === 'price') {
                updated.total = updated.quantity * updated.price;
            }

            items[idx] = updated;
            return { ...prev, items };
        });
    }

    function handleDeleteItem(idx: number) {
        setFormData((prev) => {
            const items = [...prev.items];
            items.splice(idx, 1);
            return { ...prev, items };
        });
    }

    function handleDiscard() {
        setFormData({
            billFrom: {
                streetAddress: '',
                city: '',
                postCode: '',
                country: '',
            },
            billTo: {
                clientName: '',
                clientEmail: '',
                streetAddress: '',
                city: '',
                postCode: '',
                country: '',
            },
            invoiceDate: new Date(),
            paymentTerms: paymentTermsOptions[0],
            projectDescription: '',
            items: [] as Item[],
            total: 0,
        });
    }

    function handleAddDraft() {
        //TODO tomorrow
        // Add logic to save as draft
        // add logic for save and send
    }

    return (
        <Modal onClose={handleClose}>
            <form className={styles.form}>
                {/* Bill From */}
                <h3 className={`${presets.headingSm} ${styles.heading}`}>
                    Bill From
                </h3>
                <Input
                    label='Street Address'
                    type='text'
                    value={billFrom.streetAddress}
                    name='streetAddress'
                    onChange={handleChange}
                />

                <div className={styles.inputGroup}>
                    <Input
                        label='City'
                        type='text'
                        value={billFrom.city}
                        name='city'
                        onChange={handleChange}
                    />

                    <Input
                        label='Post Code'
                        type='text'
                        value={billFrom.postCode}
                        name='postCode'
                        onChange={handleChange}
                    />
                </div>

                <Input
                    label='Country'
                    type='text'
                    value={billFrom.country}
                    name='country'
                    onChange={handleChange}
                />

                {/* Bill to */}
                <h3 className={`${presets.headingSm} ${styles.heading}`}>
                    Bill To
                </h3>
                <Input
                    label='Client Name'
                    type='text'
                    value={billTo.clientName}
                    name='clientName'
                    onChange={handleChange}
                />

                <Input
                    label='Client Email'
                    placeholder='e.g. email@mai.com'
                    type='email'
                    value={billTo.clientEmail}
                    name='clientEmail'
                    onChange={handleChange}
                />

                <Input
                    label='Street Address'
                    type='text'
                    value={billTo.streetAddress}
                    name='streetAddress'
                    onChange={handleChange}
                />

                <div className={styles.inputGroup}>
                    <Input
                        label='City'
                        type='text'
                        value={billTo.city}
                        name='city'
                        onChange={handleChange}
                    />

                    <Input
                        label='Post Code'
                        type='text'
                        value={billTo.postCode}
                        name='postCode'
                        onChange={handleChange}
                    />
                </div>

                <Input
                    label='Country'
                    type='text'
                    value={billTo.country}
                    name='country'
                    onChange={handleChange}
                />

                {/* Invoice Details */}
                <DateDropdown
                    selectedDate={formData.invoiceDate}
                    onSelect={handleDateSelect}
                />

                <Dropdown
                    options={paymentTermsOptions}
                    selectedOption={formData.paymentTerms}
                    onSelect={handleSelect}
                />

                {/* Item List */}
                <h3 className={`${presets.headingSm} ${styles.itemsHeader}`}>
                    Item List
                </h3>

                {formData.items.map((item, index) => (
                    <ItemForm
                        key={index}
                        item={item}
                        index={index}
                        onItemChange={handleItemChange}
                        onDeleteItem={handleDeleteItem}
                    />
                ))}

                {/* Add Item Button */}
                <button
                    type='button'
                    className={`${presets.headingSm} ${styles.addItem}`}
                    onClick={handleAddItem}
                >
                    + Add New Item
                </button>

                {/* Controls - discard, save as draft, save and send */}
                <div className={styles.controls}>
                    <button
                        type='button'
                        className={`${presets.headingSm} ${styles.discard}`}
                        onClick={handleDiscard}
                    >
                        Discard
                    </button>
                    <button
                        type='button'
                        className={`${presets.headingSm} ${styles.saveDraft}`}
                    >
                        Save as Draft
                    </button>
                    <button
                        type='submit'
                        className={`${presets.headingSm} ${styles.saveSend}`}
                    >
                        Save & Send
                    </button>
                </div>
            </form>
        </Modal>
    );
}
