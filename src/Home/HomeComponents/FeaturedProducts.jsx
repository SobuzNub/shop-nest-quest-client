import { useQuery } from "@tanstack/react-query";
import ProductCard from "./ProductCard";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import LoadingSpinner from "../../components/shared/LoadingSpinner";


const FeaturedProducts = () => {

    const axiosPublic = useAxiosPublic();

    const {data: featured, isLoading} = useQuery({
        queryKey: ['featured'],
        queryFn: async () =>{
            const {data} = await axiosPublic.get('/featured')
            return data;
        }
    })

    if(isLoading) return <LoadingSpinner></LoadingSpinner>

    // console.log(featured);


    return (
        <div className="md:flex gap-6 my-12">
            {
                featured.map(feature => <ProductCard key={feature._id} feature={feature}></ProductCard>)
            }
            
        </div>
    );
};

export default FeaturedProducts;