import { productService } from "@/services/productService";
import ProductCard from "./components/productCard";

export default async function page() {
  // Fetch products from the API
  const products = await productService.getProducts();

  return (
    <div className="px-4 pb-6">
      <h1 className="text-purple-600 text-xl font-medium underline pb-4">
        Products Page
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {/* maping products card */}
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="max-w-sm mx-auto"
          />
        ))}
      </div>
    </div>
  );
}
