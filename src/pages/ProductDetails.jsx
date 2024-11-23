import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useParams } from "react-router-dom";


const ProductDetails = () => {

    const axiosSecure = useAxiosSecure();
    const { id } = useParams();

    const { data: product } = useQuery({
        queryKey: ['product', id],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/product/${id}`)
            return data
        }
    })

    console.log(product);

    return (
        <div>
            <p className="text-3xl font-semibold font-mono text-center mt-8 text-green-500">Product Details</p>
            <div className="rounded-t-md shadow-md w-[600px] mx-auto mt-36">
            <div>
                <figure>
                    <img className="rounded-t-md object-cover w-[300px] h-60 mx-auto"
                        src={product?.image}
                        alt="Shoes" />
                </figure>
                <div className="p-2 text-center">
                    <h2 className="text-xl font-semibold">Name: {product?.name}</h2>
                    <h2 className="text-lg font-semibold">{product?.category}</h2>
                    <h2 className="">{product?.brand}</h2>
                    <h2 className="text-sm">Price: ${product?.price}</h2>
                    <p className="text-xs">{product?.description}</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default ProductDetails;