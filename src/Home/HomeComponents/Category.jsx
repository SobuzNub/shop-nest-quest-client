import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import CategoryCard from "./CategoryCard";
import LoadingSpinner from "../../components/shared/LoadingSpinner";


const Category = () => {

    const axiosPublic = useAxiosPublic();

    const {data: categories, isLoading} = useQuery({
        queryKey: ['categories'],
        queryFn: async ()=>{
            const {data} = await axiosPublic.get('/category')
            return data
        }
    })

    if(isLoading) return <LoadingSpinner></LoadingSpinner>

    // console.log(categories);

    return (
        <div className="md:grid md:grid-cols-4 gap-6 my-12">
            {
                categories.map(category => <CategoryCard key={category._id} category={category}></CategoryCard>)
            }
        </div>
    );
};

export default Category;