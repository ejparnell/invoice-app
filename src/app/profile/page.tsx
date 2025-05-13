import { getServerSession } from 'next-auth/next'
import { buildAuthOptions } from '@/lib/auth/options'
import SignOutButton from '@/components/auth/SignOutButton'

export default async function Profile() {
    const session = await getServerSession(buildAuthOptions())

    return (
        <div>
            <h1>Profile</h1>
            <p>This is the profile page.</p>
            {session && <SignOutButton />}
        </div>
    );
}
