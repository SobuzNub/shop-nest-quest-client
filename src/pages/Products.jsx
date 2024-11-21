import useRole from "../hooks/useRole";



const Products = () => {
    const [role] = useRole();
    console.log(role);
    return (
        <div>
            <h2>Products</h2>
        </div>
    );
};

export default Products;