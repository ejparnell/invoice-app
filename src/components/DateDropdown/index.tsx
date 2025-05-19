'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import calendar from '../../../public/icon-calendar.svg';
import rightArrow from '../../../public/icon-arrow-right.svg';
import leftArrow from '../../../public/icon-arrow-left.svg';
import presets from '@/styles/presets.module.css';
import styles from './DateDropdown.module.css';

interface Props {
    selectedDate: Date;
    onSelect: (d: Date) => void;
}

export default function DateDropdown({ selectedDate, onSelect }: Props) {
    const CALENDAR_SIZE = 16;
    const ARROW_SIZE = 8;
    const [isOpen, setIsOpen] = useState(false);
    const [viewDate, setViewDate] = useState(selectedDate);

    const monthLabel = viewDate.toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric',
    });

    const weeks = useMemo(() => {
        const first = new Date(viewDate.getFullYear(), viewDate.getMonth(), 1);
        const start = new Date(first);
        start.setDate(first.getDate() - first.getDay());

        return Array.from({ length: 6 }, (_, w) =>
            Array.from({ length: 7 }, (_, d) => {
                const date = new Date(start);
                date.setDate(start.getDate() + w * 7 + d);
                return date;
            })
        );
    }, [viewDate]);

    const toggle = () => setIsOpen((p) => !p);
    const pick = (d: Date) => {
        onSelect(d);
        setViewDate(d);
        setIsOpen(false);
    };

    return (
        <div className={styles.wrapper}>
            {/* selector */}
            <button
                type='button'
                className={`${presets.headingSm} ${styles.selector} ${isOpen && styles.selectorFocus}`}
                onClick={toggle}
            >
                {selectedDate.toLocaleDateString('en-US', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric',
                })}
                <Image
                    src={calendar}
                    alt=''
                    width={CALENDAR_SIZE}
                    height={CALENDAR_SIZE}
                />
            </button>

            {/* pop‑over calendar */}
            {isOpen && (
                <div className={`${presets.boxShadow} ${styles.popover}`}>
                    <div className={styles.header}>
                        <button
                            type='button'
                            className={styles.arrow}
                            onClick={() =>
                                setViewDate(
                                    (d) =>
                                        new Date(
                                            d.getFullYear(),
                                            d.getMonth() - 1,
                                            1
                                        )
                                )
                            }
                        >
                            <Image
                                src={leftArrow}
                                alt='Previous month'
                                width={ARROW_SIZE}
                                height={ARROW_SIZE}
                            />
                        </button>
                        <span
                            className={`${presets.headingSm} ${styles.monthLabel}`}
                        >
                            {monthLabel}
                        </span>
                        <button
                            type='button'
                            className={styles.arrow}
                            onClick={() =>
                                setViewDate(
                                    (d) =>
                                        new Date(
                                            d.getFullYear(),
                                            d.getMonth() + 1,
                                            1
                                        )
                                )
                            }
                        >
                            <Image
                                src={rightArrow}
                                alt='Next month'
                                width={ARROW_SIZE}
                                height={ARROW_SIZE}
                            />
                        </button>
                    </div>

                    {/* days of week */}
                    <div className={styles.grid}>
                        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((d) => (
                            <span key={d} className={styles.dow}>
                                {d}
                            </span>
                        ))}

                        {/* dates */}
                        {weeks.flat().map((date) => {
                            const sameMonth =
                                date.getMonth() === viewDate.getMonth() &&
                                date.getFullYear() === viewDate.getFullYear();
                            const isSelected =
                                date.toDateString() ===
                                selectedDate.toDateString();

                            return (
                                <button
                                    type='button'
                                    key={date.toISOString()}
                                    onClick={() => pick(date)}
                                    className={`${styles.day} ${
                                        sameMonth ? '' : styles.muted
                                    } ${isSelected ? styles.selected : ''}`}
                                >
                                    {date.getDate()}
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}
