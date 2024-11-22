import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";


const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onsubmit = () =>{
        console.log(onsubmit);
    }

    return (
        <div className="max-w-6xl mx-auto">
            <div>
                <h2 className="text-3xl text-center font-semibold font-mono mt-8 text-green-500">Add Product</h2>
            </div>
            <form onSubmit={handleSubmit(onsubmit)}>
                <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text">Recipe Name*</span>

                    </label>
                    <input type="text"
                        placeholder="Recipe Name"
                        {...register('name', { required: true })}
                        required
                        className="input input-bordered w-full" />
                </div>
                <div className="flex gap-6">
                    {/* category */}
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Category*</span>

                        </label>
                        <select defaultValue="default" {...register('category', { required: true })}
                            className="select select-bordered w-full">
                            <option disabled value="default">Select a Category</option>
                            <option value="salad">Salad</option>
                            <option value="pizza">Pizza</option>
                            <option value="soup">Soup</option>
                            <option value="dessert">Dessert</option>
                            <option value="drinks">Drinks</option>
                        </select>
                    </div>

                    {/* price */}
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Price*</span>

                        </label>
                        <input type="number"
                            placeholder="Price"
                            {...register('price', { required: true })}
                            className="input input-bordered w-full" />
                    </div>

                </div>

                {/* recipe details */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Recipe Details</span>

                    </label>
                    <textarea {...register('recipe')} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>

                </div>

                <div className="form-control w-full my-6">
                    <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                </div>

                <button className="btn">Add Items <FaUtensils className=""></FaUtensils></button>
            </form>
        </div>
    );
};

export default AddProduct;