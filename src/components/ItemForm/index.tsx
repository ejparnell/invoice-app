'use client';

import Image from 'next/image';
import { Item } from '@/types/invoice';
import Input from '@/components/Input';
import deleteIcon from '../../../public/icon-delete.svg';
import presets from '@/styles/presets.module.css';
import styles from './ItemForm.module.css';

interface ItemFormProps {
    item: Item;
    index: number;
    onItemChange: (
        index: number,
        field: keyof Item,
        value: string | number
    ) => void;
    onDeleteItem: (index: number) => void;
}

export default function ItemForm({ item, index, onItemChange, onDeleteItem }: ItemFormProps) {
    const DELETE_ICON_WIDTH = 12;
    const DELETE_ICON_HEIGHT = 16;

    return (
        <div className={styles.container}>
            {/* Item Name */}
            <Input
                label='Item Name'
                type='text'
                value={item.name}
                name='name'
                onChange={(e) => onItemChange(index, 'name', e.target.value)}
            />

            {/* Item Quantity */}
            <div className={styles.inputGroup}>
                <Input
                    label='Qty.'
                    type='number'
                    value={item.quantity}
                    name='quantity'
                    onChange={(e) =>
                        onItemChange(index, 'quantity', e.target.value)
                    }
                />

                {/* Item Price */}
                <Input
                    label='Price'
                    type='number'
                    value={item.price}
                    name='price'
                    onChange={(e) =>
                        onItemChange(index, 'price', e.target.value)
                    }
                />

                {/* Item Total */}
                <div className={styles.totalContainer}>
                    <label
                        htmlFor='total'
                        className={`${presets.body} ${styles.label}`}
                    >
                        Total
                    </label>
                    <p
                        className={`${presets.headingSm} ${styles.total}`}
                        id='total'
                    >
                        {item.quantity * item.price}
                    </p>
                </div>

                {/* Delete Item */}
                <Image
                    src={deleteIcon}
                    alt='Delete Item'
                    width={DELETE_ICON_WIDTH}
                    height={DELETE_ICON_HEIGHT}
                    onClick={() => onDeleteItem(index)}
                    className={styles.deleteIcon}
                />
            </div>
        </div>
    );
}
