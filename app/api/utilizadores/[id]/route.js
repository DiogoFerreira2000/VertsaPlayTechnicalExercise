import connectMongoDB from "@/app/mongodb/mongodb";
import Utilizador from "@/app/model/utilizadores";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const utilizador = await Utilizador.findOne({ _id: id });
    return NextResponse.json({ utilizador }, { status: 200 });
}
