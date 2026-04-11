const base = import.meta.env.BASE_URL;
export const img = (path: string) => `${base}${path.startsWith('/') ? path.slice(1) : path}`;
