

export default function ProductCard({ product, className }) {
  return (
    <div className={`group relative flex flex-col bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 ${className} p-3`}>
      {/* Image */}
      <div className="aspect-square w-full relative bg-white p-2 flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="object-contain w-50 h-50 mx-auto transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-2">
        <div className="flex-1">
          <p className="text-md font-medium text-blue-600 uppercase tracking-wider mb-1">
            {product.category}
          </p>
          <h3 className="text-lg font-bold text-gray-900 line-clamp-1">
            {product.title}
          </h3>
          <p className="mt-1 text-md text-gray-500 line-clamp-3">
            {product.description}
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-lg font-semibold text-gray-900">
            ${product.price}
          </p>
          <button className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-bold text-white hover:bg-gray-700 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}