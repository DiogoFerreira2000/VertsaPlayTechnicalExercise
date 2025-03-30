import connectMongoDB from "@/app/mongodb/mongodb";
import Ferias from "@/app/model/ferias";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { nome, data_inicio, data_fim, id_utilizador } = await request.json();
    await connectMongoDB();
    await Ferias.create({ nome, data_inicio, data_fim, id_utilizador });
    return NextResponse.json({ message: "Marcação de férias criada." }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    const ferias = await Ferias.find();
    return NextResponse.json(ferias);
};

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("_id");
    await connectMongoDB();
    await Ferias.findByIdAndDelete(id);
    return NextResponse.json({ message: "Marcação de férias apagada." }, { status: 200 });
}
