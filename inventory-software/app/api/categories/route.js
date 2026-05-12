import { NextResponse } from "next/server";
async function GET() {
    return NextResponse.json({ message: "Hello World" });
}

export async function POST(req) {
    const body = await req.json();
    try {
        console.log("Body:", body);
        return NextResponse.json({ message: "Hello World", data: body });
    } catch (error) {
        console.error("Error POST /api/categories:", error);
        return NextResponse.json({ message: "Error al guardar la categoría", error: error.message }, { status: 500 });
    }
}

export async function PUT() {
    return NextResponse.json({ message: "Hello World" });
}

export async function DELETE() {
    return NextResponse.json({ message: "Hello World" });
}