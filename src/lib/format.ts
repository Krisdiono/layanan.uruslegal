export const toIDR = (n: number | string | null | undefined) => {
  if (n === null || n === undefined || n === "" || Number.isNaN(Number(n))) return null;
  return new Intl.NumberFormat("id-ID").format(Number(n));
};
