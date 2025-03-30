import connectMongoDB from "@/app/mongodb/mongodb";
import Ferias from "@/app/model/ferias";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    const { id } = params;
    const { 
        nome: newNome,
        data_inicio: newDataInicio, 
        data_fim: newDataFim, 
        id_utilizador: newIdUtilizador 
    } = await request.json();

    await connectMongoDB();

    const update = {
        nome: newNome,
        data_inicio: newDataInicio, 
        data_fim: newDataFim, 
        id_utilizador: newIdUtilizador
    };

    await Ferias.findByIdAndUpdate(id, update);
    return NextResponse.json({ message: "Marcação de férias alterada." }, { status: 200 });
}

export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const ferias = await Ferias.findOne({ _id: id });
    return NextResponse.json({ ferias }, { status: 200 });
}
