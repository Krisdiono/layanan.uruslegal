declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_MIDTRANS_CLIENT_KEY?: string;
    MIDTRANS_SERVER_KEY?: string;
    NEXT_PUBLIC_WA_NUMBER?: string;
    NEXT_PUBLIC_GATEWAY_FEE_PCT?: string;
    GATEWAY_FEE_PCT?: string;
    UPLOAD_DIR?: string;
  }
}
