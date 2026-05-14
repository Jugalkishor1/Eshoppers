import { Link } from "react-router-dom";
import defaultCategoryImg from "../../assets/images/default_category_img.png";

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
    <Link
      to={`/categories/${category.id}/products`}
      className="group relative overflow-hidden rounded-4xl cursor-pointer block"
    >
      <img
        src={category.image ?? defaultCategoryImg}
        alt={category.name}
        className="h-90 w-full object-cover transition duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />

      <div className="absolute bottom-6 left-6">
        <h3 className="text-2xl font-semibold text-white">
          {category.name}
        </h3>

        <span className="mt-4 inline-block rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition hover:bg-gray-200">
          Explore
        </span>
      </div>
    </Link>
  );
};

export default CategoryCard;
