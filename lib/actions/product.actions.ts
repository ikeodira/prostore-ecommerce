"user server";
import { prisma } from "@/db/prisma";
import { convertToPlainObject } from "../utils";
import { LATEST_PRODUCTS_LIMITS } from "../constants";

//Get latest products
export async function getLatestProducts() {
  try {
    const data = await prisma.product.findMany({
      take: LATEST_PRODUCTS_LIMITS,
      orderBy: { createdAt: "desc" },
    });

    return convertToPlainObject(data);
  } catch (error) {
    return [];
    console.log("There is an error from getLatestProducts ", error);
  }
}

//Get single product by it's slug
export async function getProductBySlug(slug: string) {
  return await prisma.product.findFirst({
    where: { slug: slug },
  });
}
