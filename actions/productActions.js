"user server";

import { productService } from "@/services/productService";
import { revalidatePath } from 'next/cache';

export async function createProductAction(formData) {
  //   ation use for post method
  //   for get method we can directly call the service
}