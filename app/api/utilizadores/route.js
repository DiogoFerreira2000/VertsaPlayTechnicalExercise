import connectMongoDB from "@/app/mongodb/mongodb";
import Utilizador from "@/app/model/utilizadores";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { nome, email, telemovel, cargo, senha, tipo } = await request.json();
    await connectMongoDB();
    await Utilizador.create({ nome, email, telemovel, cargo, senha, tipo });
    return NextResponse.json({ message: "Utilizador criado." }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    const utilizadores = await Utilizador.find();
    return NextResponse.json(utilizadores);
};

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("_id");
    await connectMongoDB();
    await Utilizador.findByIdAndDelete(id);
    return NextResponse.json({ message: "Utilizador apagado." }, { status: 200 });
}
