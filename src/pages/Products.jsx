import SearchBar from "../SearchBar";
import SortByPrice from "../SortByPrice";




const Products = () => {

    return (
        <div className="container mx-auto">
            <h2 className="my-12 text-2xl font-semibold text-center font-mono">All Products</h2>
            {/* searching and sorting */}
            <div className="lg:flex justify-between items-center w-full mb-6">
                <SearchBar></SearchBar>
                <SortByPrice></SortByPrice>
            </div>
            {/* content */}
            <div className="grid grid-cols-12">
                <h2 className="col-span-2">filter bar</h2>
                <h2 className="col-span-10">products</h2>
            </div>
        </div>
    );
};

export default Products;