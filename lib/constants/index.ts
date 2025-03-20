export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "Prostore";
export const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  "A modern ecommerce platform build with Nextjs";
export const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || "https://localhost:3000";
export const LATEST_PRODUCTS_LIMITS =
  Number(process.env.LATEST_PRODUCTS_LIMIT) || 4;

  export const signInDefaultValues = {
    email:"",
    password:"",
  }
