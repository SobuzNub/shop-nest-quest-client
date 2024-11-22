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

    // console.log(category, search, sort, brand);


    useEffect(() => {
        setLoading(true);
        const fetch = async () => {
            await axios.get(`${import.meta.env.VITE_API_URL}/all-products?name=${search}&sort=${sort}&brand=${brand}&category=${category}`)
                .then(res => {
                    setProducts(res.data)
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
        <div className="container mx-auto">
            <h2 className="my-12 text-2xl font-semibold text-center font-mono">All Products</h2>
            {/* searching and sorting */}
            <div className="lg:flex justify-between items-center w-full mb-6">
                <SearchBar handleSearch={handleSearch}></SearchBar>
                <SortByPrice setSort={setSort}></SortByPrice>
            </div>
            {/* content */}
            <div className="grid grid-cols-12 gap-4">
                <h2 className="col-span-2">
                    <FilterBar setBrand={setBrand} setCategory={setCategory} handleReset={handleReset}></FilterBar>
                </h2>
                {/* products */}
                <div className="col-span-10">
                    {
                        loading ? (
                            <LoadingSpinner></LoadingSpinner>
                        ) : (
                            <>
                                {
                                    products.length === 0 ? (
                                        <div className="w-full h-full flex items-center justify-center gap-3">
                                            <div>
                                            <LoadingSpinner></LoadingSpinner>
                                            </div>
                                            <h1 className="text-3xl font-bold font-mono text-red-600">No Product Available here</h1>
                                            
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