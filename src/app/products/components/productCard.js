import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div className="group relative flex flex-col bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
      {/* Image */}
      <div className="aspect-square w-full relative bg-white p-6">
        <Image
        //   src={product.image}
          alt={product.title}
          fill // This fills the aspect-square container
          className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex-1">
          <p className="text-xs font-medium text-blue-600 uppercase tracking-wider mb-1">
            {product.category}
          </p>
          <h3 className="text-sm font-bold text-gray-900 line-clamp-1">
            {product.title}
          </h3>
          <p className="mt-2 text-sm text-gray-500 line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <p className="text-xl font-semibold text-gray-900">
            ${product.price}
          </p>
          <button className="rounded-lg bg-gray-900 px-4 py-2 text-xs font-bold text-white hover:bg-gray-700 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
