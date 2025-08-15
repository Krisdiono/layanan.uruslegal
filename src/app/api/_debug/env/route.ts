import { NextResponse } from "next/server";
export async function GET(){
  return NextResponse.json({
    MIDTRANS_IS_PRODUCTION: process.env.MIDTRANS_IS_PRODUCTION,
    HAS_SERVER_KEY: !!process.env.MIDTRANS_SERVER_KEY,
    APP_URL: process.env.APP_URL,
  });
}
