import Image from 'next/image';
import Link from 'next/link';
import userIcon from '../../../../public/icon-user.png';

export default function UserLink() {
    const AVATAR_SIZE = 32;

    return (
        <Link href='/profile'>
            <Image
                src={userIcon}
                alt='User Avatar'
                width={AVATAR_SIZE}
                height={AVATAR_SIZE}
            />
        </Link>
    );
}
