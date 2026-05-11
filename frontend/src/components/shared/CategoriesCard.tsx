import defaultCategoryImg from "../../assets/images/default_category_img.png"

type Category = {
  id: string;
  name: string;
  image?: string | null;
};

interface Props {
  category: Category;
}


const CategoryCard = ({ category }: Props) => {
  return (
    <div className="group relative overflow-hidden rounded-4xl cursor-pointer">
      <img
        src={category.image ?? defaultCategoryImg}
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