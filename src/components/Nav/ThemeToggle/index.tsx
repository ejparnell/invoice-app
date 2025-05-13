'use client';

import Image from 'next/image';
import { useTheme } from '@/context/ThemeProvider';
import moon from '../../../../public/icon-moon.svg';
import sun from '../../../../public/icon-sun.svg';

export default function ThemeToggle() {
    const TOGGLE_SIZE = 20;
    const { theme, toggleTheme } = useTheme();

    return (
        <Image
            src={theme === 'light' ? moon : sun}
            alt='Theme Toggle'
            width={TOGGLE_SIZE}
            height={TOGGLE_SIZE}
            onClick={toggleTheme}
        />
    );
}
