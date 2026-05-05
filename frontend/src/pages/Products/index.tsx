import { useProducts } from "../../api";

const Products = () => {
  const { data = [], isLoading } = useProducts();

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      {data.map((p) => (
        <div key={p.id}>{p.name}</div>
      ))}
    </div>
  );
};

export default Products;
