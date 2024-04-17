import Hero from "../components/home/hero/Hero";
import About from "../components/home/about/About";
import Products from "../components/home/products/Products";
import CTA from "../components/home/cta/CTA";
import Contact from "../components/home/contact/Contact";

const Home = () => {
  return (
    <>
      <main className="w-full">
        <Hero />
        <About />
        <Products />
        <CTA />
        <Contact />
      </main>
    </>
  );
};
export default Home;
