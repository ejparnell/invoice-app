import Image from 'next/image';

import ThemeToggle from './ThemeToggle';
import UserLink from './UserLink';
import logo from '../../../public/logo.svg';
import styles from './Nav.module.css';

export default function Nav() {
    const LOGO_SIZE = 28;
    return (
        <nav className={styles.nav}>
            {/* Icon */}
            <div className={styles.logo}>
                <Image
                    src={logo}
                    alt='Logo'
                    width={LOGO_SIZE}
                    height={LOGO_SIZE}
                    priority
                    className={styles.logoImage}
                />
                <div className={styles.logoBottom} />
            </div>

            <div className={styles.navItems}>
                {/* Theme Toggle */}
                <ThemeToggle />

                <div className={styles.divider} />

                {/* Avatar */}
                <UserLink />
            </div>
        </nav>
    )
}