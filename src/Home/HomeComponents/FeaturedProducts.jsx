import ProductCard from "./ProductCard";


const FeaturedProducts = () => {
    return (
        <div className="flex gap-6 my-12">
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            
        </div>
    );
};

export default FeaturedProducts;