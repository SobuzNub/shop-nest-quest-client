import { useEffect, useState } from "react";
import FilterBar from "../components/Products/FilterBar";
import SearchBar from "../SearchBar";
import SortByPrice from "../SortByPrice";
import axios from "axios";
import LoadingSpinner from "../components/shared/LoadingSpinner";
import ProductCard from "./ProductCard";




const Products = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('asc')
    const [brand, setBrand] = useState('')
    const [category, setCategory] = useState('')
    const [uniqueBrand, setUniqueBrand] = useState([]);
    const [uniqueCategory, setUniqueCategory] = useState([]);

    // console.log(category, search, sort, brand);


    useEffect(() => {
        setLoading(true);
        const fetch = async () => {
            await axios.get(`${import.meta.env.VITE_API_URL}/all-products?name=${search}&sort=${sort}&brand=${brand}&category=${category}`)
                .then(res => {
                    console.log(res.data);
                    setProducts(res.data.products)
                    setUniqueBrand(res.data.brands)
                    setUniqueCategory(res.data.categories)
                    setLoading(false)
                })
        }
        fetch();
    }, [search, sort, brand, category])

    if(loading) return <LoadingSpinner></LoadingSpinner>

    const handleSearch = e =>{
        e.preventDefault();
        setSearch(e.target.search.value)
        e.target.search.value = ''
    }

    const handleReset = () =>{
        setSearch('')
        setSort('asc')
        setBrand('')
        setCategory('')
        window.location.reload();
    }


    return (
        <div className="container mx-auto my-8">
            <h2 className="my-12 text-2xl font-semibold text-center font-mono">All Products</h2>
            {/* searching and sorting */}
            <div className="md:flex justify-between items-center md:w-full mb-6">
                <SearchBar handleSearch={handleSearch}></SearchBar>
                <SortByPrice setSort={setSort}></SortByPrice>
            </div>
            {/* content */}
            <div className="md:grid lg:grid-cols-12 gap-4">
                <h2 className="md:col-span-2">
                    <FilterBar setBrand={setBrand} setCategory={setCategory} handleReset={handleReset} uniqueBrand={uniqueBrand} uniqueCategory={uniqueCategory}></FilterBar>
                </h2>
                {/* products */}
                <div className="md:col-span-10">
                    {
                        loading ? (
                            <LoadingSpinner></LoadingSpinner>
                        ) : (
                            <>
                                {
                                    products.length === 0 ? (
                                        <div className="md:w-full md:h-full md:flex items-center justify-center gap-3">
                                            <div>
                                            <LoadingSpinner></LoadingSpinner>
                                            </div>
                                            <h1 className="text-3xl font-bold font-mono text-green-600">No Product Available here</h1>
                                            
                                        </div>
                                    ) : (
                                        <div className="min-h-screen md:grid md:grid-cols-3 gap-2">
                                            {
                                                products.map(product => <ProductCard key={product._id} product={product}></ProductCard>)
                                            }
                                        </div>
                                    )}
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;