

const CategoryCard = ({category}) => {

    return (
        <div className="card w-[350px] shadow-md rounded-none">
            <figure>
                <img className="w-[300px] h-[300px] bg-white"
                    src={category?.product_image
                    }
                    alt="Feature Product" />
            </figure>
            <div className="card-body w-[300px]">
                <h2 className="card-title">Product Name: {category?.product_name}</h2>
                <p className="font-semibold">Category: ${category?.product_category}</p>
                {/* <p>Description: {feature?.product_description}</p> */}
                <div className="card-actions justify-end">
                    {/* <button className="btn btn-primary">Buy Now</button> */}
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;