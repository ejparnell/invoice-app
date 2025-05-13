import { NextResponse, type NextRequest } from 'next/server';
import { getServerSession } from "next-auth/next"
import { buildAuthOptions } from "@/lib/auth/options"
import { dbConnect } from '@/lib/dbConnect';
import { Invoice } from '@/models/Invoice';
import { User } from '@/models/User';

export async function GET(req: NextRequest) {
    const session = await getServerSession(buildAuthOptions());

    if (!session) {
        return NextResponse.redirect(new URL('/signin', req.url));
    }

    await dbConnect();

    if (!session.user) {
        return NextResponse.redirect(new URL('/signin', req.url));
    }

    const user = await User.findOne({ email: session.user.email });

    if (!user) {
        return NextResponse.redirect(new URL('/signin', req.url));
    }

    const invoices = await Invoice.find({ user: user._id });

    return NextResponse.json(invoices);
}
