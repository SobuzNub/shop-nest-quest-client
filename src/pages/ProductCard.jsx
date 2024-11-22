import useRole from "../hooks/useRole";


const ProductCard = ({ product }) => {
    const [role] = useRole();
    return (
        <div className="rounded-t-md shadow-md">
            <figure>
                <img className="rounded-t-md object-cover w-full h-60"
                    src={product?.image}
                    alt="Shoes" />
            </figure>
            <div className="p-2">
                <h2 className="text-xl font-semibold">Name: {product?.name}</h2>
                <h2 className="text-lg font-semibold">{product?.category}</h2>
                <h2 className="">{product?.brand}</h2>
                <h2 className="text-sm">Price: ${product?.price}</h2>
                <p className="text-xs">{product?.description}</p>
                <div className="mt-2">
                    <button disabled={role === 'seller' && 'admin'} className="btn btn-sm w-full">Add to wishlist</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;