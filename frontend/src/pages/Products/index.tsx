import { useProducts } from "../../api";
import ProductCard from "../../components/shared/ProductCard";

const ProductsPage = () => {
  const { data, isLoading } = useProducts("");

  if (isLoading) {
    return <div className="p-10">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-10">

      <h1 className="text-3xl font-bold mb-8">
        All Products
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {data.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </div>
  );
};

export default ProductsPage;