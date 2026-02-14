import { apiClient } from "@/src/lib/api"

export const productService = {

    // Fetch all products from the API
    getProducts: async () => { 
        return await apiClient('/products');
    },
    
    // Fetch a single product by ID
    getProductById: async (id) => {
        return await apiClient(`/products/${id}`);
    }
}

