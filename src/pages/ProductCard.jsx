
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useRole from "../hooks/useRole";
import toast from "react-hot-toast";


const ProductCard = ({ product }) => {
    
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const { _id, image, category, name, brand, description, price } = product;

    const handleAddToWishList = async food => {
        console.log(food);
        const wishItem = {
            productId: _id,
            email: user.email,
            photoURL: user.photoURL,
            displayName: user.displayName,
            name,
            image,
            category,
            brand,
            price,
            description
        }

        try {
            const result = await axiosSecure.post('/wishlist', wishItem)
            console.log(result);
            navigate('/dashboard/my-wishlist')
            toast.success('Product Add To WishList')
        } catch (err) {
            console.log(err);
            toast.error(err.message)
        }
    }


    const [role] = useRole();
    // console.log(role);
    return (
        <div className="rounded-t-md shadow-md">
            <Link to={`/productDetails/${_id}`}>
                <figure>
                    <img className="rounded-t-md object-cover w-full h-60"
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="p-2">
                    <h2 className="text-xl font-semibold">Name: {name}</h2>
                    <h2 className="text-lg font-semibold">{category}</h2>
                    <h2 className="">{brand}</h2>
                    <h2 className="text-sm">Price: ${price}</h2>
                    <p className="text-xs">{description}</p>

                </div>
            </Link>
            <div className="mt-2">
                <button onClick={() => handleAddToWishList(product)} disabled={role === 'admin'} className="btn btn-sm w-full rounded-none p-2">Add to wishlist</button>
            </div>
        </div>
    );
};

export default ProductCard;