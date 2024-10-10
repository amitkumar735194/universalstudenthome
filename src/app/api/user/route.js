import { connectDb } from "@/helper/db";
import { NextRequest, NextResponse } from "next/server";

connectDb();
export function  GET(){
    return NextResponse.json({connect:'connection'});
}