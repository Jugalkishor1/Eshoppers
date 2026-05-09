type Category = {
  id: string;
  name: string;
  image?: string;
};

interface Props {
  category: Category;
}

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop";

const CategoryCard = ({ category }: Props) => {
  return (
    <div className="group relative overflow-hidden rounded-4xl cursor-pointer">
      <img
        src={category.image || DEFAULT_IMAGE}
        alt={category.name}
        className="h-90 w-full object-cover group-hover:scale-105 transition duration-500"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />

      <div className="absolute bottom-6 left-6">
        <h3 className="text-2xl font-semibold text-white">
          {category.name}
        </h3>

        <button className="mt-4 bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition">
          Explore
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;