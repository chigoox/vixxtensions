import { NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

export async function GET(request) {
    const path = request.nextUrl.searchParams.get('/')

    if (path) {
        revalidatePath(path)
        return NextResponse.json({ revalidated: true, now: Date.now() })
    }

    return NextResponse.json({
        revalidated: false,
        now: Date.now(),
        message: 'Missing path to revalidate',
    })
}