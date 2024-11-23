import Accordion from "./HomeComponents/According";
import Category from "./HomeComponents/Category";
import FeaturedProducts from "./HomeComponents/FeaturedProducts";
import Hero from "./HomeComponents/Hero";
import Testimonials from "./HomeComponents/Testimonials";


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <div className="container mx-auto">
                <p className="text-3xl font-bold font-mono mt-12 my-12 text-center">Featured Products</p>
                <FeaturedProducts></FeaturedProducts>
            </div>
            <div className="container mx-auto">
                <p className="text-3xl font-bold font-mono mt-12 my-12 text-center">Testimonials</p>
                <Testimonials></Testimonials>
            </div>
            <div className="container mx-auto">
                <p className="text-3xl font-bold font-mono mt-12 my-12 text-center">Category Section</p>
                <Category></Category>
            </div>
            <div className="container mx-auto">
                <Accordion></Accordion>
            </div>
        </div>
    );
};

export default Home;