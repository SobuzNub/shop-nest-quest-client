import FeaturedProducts from "./HomeComponents/FeaturedProducts";
import Hero from "./HomeComponents/Hero";


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <div className="container mx-auto">
                <p className="text-3xl font-bold font-mono mt-12 my-12 text-center">Featured Products</p>
                <FeaturedProducts></FeaturedProducts>
            </div>
        </div>
    );
};

export default Home;