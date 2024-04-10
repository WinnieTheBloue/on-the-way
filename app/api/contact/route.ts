import prisma from "@/lib/prisma";
import { Category } from "@prisma/client";
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    const formData = await request.formData();
    const email = formData.get('email');
    const category = formData.get('category');
    const object = formData.get('object');
    const text = formData.get('message');

    if (!email || !category || !object || !text) {
        return NextResponse.json({ error: 'Missing fields' }, { status: 400 })
    }
    try {
        await prisma.message.create({
            data: {
                sender: email as string,
                category: category as Category,
                object: object as string,
                text: text as string
            }
        });
        return NextResponse.json({ message: 'Message sent' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: 'An error occured' }, { status: 500 });
    }
}

export async function GET(request: NextRequest) {

    const messages = await prisma.message.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    });

    return NextResponse.json(messages);
}

export async function PUT(request: NextRequest) {
    const formData = await request.formData();
    const id = formData.get('id');
    const favorite = formData.get('favorite');

    if (!id) {
        return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    let fav = false;

    if (favorite == "true") {
        fav = true;
    } else if (favorite == "false") {
        fav = false;
    }

    try {
        const message = await prisma.message.update({
            where: {
                id: id as string
            },
            data: {
                isFavorite: fav
            }
        });
        return NextResponse.json(message);
    } catch (error) {
        return NextResponse.json({ error: 'An error occured' }, { status: 500 });
    }
}