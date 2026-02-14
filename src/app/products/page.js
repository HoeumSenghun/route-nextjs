
import { productService } from '@/services/productService';

export default async function page() {

    // Fetch products from the API
    const products = await productService.getProducts();

  return (
    <div>
      products page
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Render each product in a card layout */}
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded shadow">
            <h2 className="font-semibold truncate">{product.title}</h2>
            <p className="text-green-600">${product.price}</p>
            <p className="text-gray-500 truncate">{product.description}</p>
            <p className="text-sm text-gray-400">{product.category}</p>
            <img src={product.image} alt={product.title} className="w-full h-48 object-cover mt-2" />
          </div>
        ))}
      </div>
    </div>
  )
}
