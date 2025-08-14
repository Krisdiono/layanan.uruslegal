const body = await req.json();
const { service, amounts } = body || {};
const subtotal = Math.round(Number(amounts?.subtotal) || 0);

if (!subtotal) {
  return NextResponse.json({ error: 'Invalid total amount' }, { status: 400 });
}

// TANPA fee tambahan
const gross_amount = subtotal;

// ... panggilan ke Midtrans pakai gross_amount di atas
