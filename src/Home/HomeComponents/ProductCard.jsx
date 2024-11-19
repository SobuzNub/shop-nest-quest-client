

const ProductCard = () => {
    return (
        <div className="card w-[350px] shadow-md rounded-none">
            <figure>
                <img className="w-[300px] h-[300px]"
                    src="https://img.freepik.com/free-vector/smart-watch-cartoon-vector-icon-illustration-technology-object-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3667.jpg?t=st=1732043252~exp=1732046852~hmac=a41e2673cef74d08ebc472ef368683bb90bd214ef879b84a81d74f525b52b3fb&w=826"
                    alt="Shoes" />
            </figure>
            <div className="card-body w-[300px]">
                <h2 className="card-title">Shoes!</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    {/* <button className="btn btn-primary">Buy Now</button> */}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;