import Hero from "../../components/Home/Hero"
import Features from "../../components/Home/Features";
import Categories from "../../components/Home/HomeCategories";
import Products from "../../components/Home/HomeProducts";
import CTA from "../../components/Home/CTA";
import Newsletter from "../../components/Home/Newsletter";

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Categories />
      <Products />
      <CTA />
      <Newsletter />
    </>
  );
};

export default Home;
