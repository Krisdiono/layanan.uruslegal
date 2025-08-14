import { NextResponse } from 'next/server';
import { PERFEX_BASE } from '@/lib/perfex';

export async function GET() {
  return NextResponse.json({
    node_env: process.env.NODE_ENV || null,
    raw_env: process.env.SOLUSI_API_BASE || null,
    computed_base: PERFEX_BASE,
  });
}
