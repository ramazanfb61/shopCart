import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req:Request){
  try {
    return  NextResponse.json({message:'Hello World'})
  } catch (error) {
    console.log(error);
    
  }
}