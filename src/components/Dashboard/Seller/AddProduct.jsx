import { useForm } from "react-hook-form";
import { MdProductionQuantityLimits } from "react-icons/md";
import useAuth from "../../../hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const AddProduct = () => {
    const { register, handleSubmit } = useForm();
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const { mutateAsync } = useMutation({
        mutationFn: async productData => {
            const { data } = await axiosSecure.post(`/product`, productData)
            return data;
        },
        onSuccess: () => {
            console.log('Data Saved Successfully')
            toast.success("Product Added Successfully!")
            navigate('/dashboard/my-listings')
            setLoading(false);
        }
    })

    const onsubmit = async data => {
        // console.log(data);
        const seller = {
            name: user?.displayName,
            image: user?.photoURL,
            email: user?.email
        }

        try {
            const productData = {
                name: data.name,
                image: data.image,
                category: data.category,
                brand: data.brand,
                price: data.price,
                description: data.description,
                seller
            }

            await mutateAsync(productData);

        } catch (err) {
            console.log(err);
            toast.error(err.message)
            setLoading(false);
        }

    }

    return (
        <div className="max-w-6xl mx-auto">
            <div>
                <h2 className="text-3xl text-center font-semibold font-mono mt-8 text-green-500">Add Product</h2>
            </div>
            <form onSubmit={handleSubmit(onsubmit)}>
                <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text">Product Name</span>

                    </label>
                    <input type="text"
                        placeholder="Product Name"
                        {...register('name', { required: true })}
                        required
                        className="input input-bordered w-full" />
                </div>
                {/* image url */}
                <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text">Image URL</span>

                    </label>
                    <input type="text"
                        placeholder="Image URL"
                        {...register('image', { required: true })}
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
                            <option value="electronics">Electronics</option>
                            <option value="homeDecor">Home Decor</option>
                            <option value="fitness">Fitness</option>
                            <option value="accessories">Accessories</option>
                            <option value="outdoor">Outdoor</option>
                            <option value="wearables">Wearables</option>
                            <option value="musicalInstruments">Musical Instruments</option>
                            <option value="toys">Toys</option>
                        </select>
                    </div>

                    {/* brans */}
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Brands*</span>

                        </label>
                        <select defaultValue="default" {...register('brand', { required: true })}
                            className="select select-bordered w-full">
                            <option disabled value="default">Select a Brand</option>
                            <option value="techSound">TechSound</option>
                            <option value="holdIt">HoldIt</option>
                            <option value="dcoStyle">DecoStyle</option>
                            <option value="ceramiCo">CeramiCo</option>
                            <option value="fitFlex">FitFlex</option>
                            <option value="powerBands">PowerBands</option>
                            <option value="walletPro">WalletPro</option>
                            <option value="sunShield">SunShield</option>
                            <option value="campPro">CampPro</option>
                            <option value="grillEase">GrillEase</option>
                            <option value="healthTrack">HealthTrack</option>
                        </select>
                    </div>



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

                {/* recipe details */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Description</span>

                    </label>
                    <textarea {...register('description')} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>

                </div>


                <button className="btn mt-2 bg-green-500 text-white">Add Product <MdProductionQuantityLimits size={20} /></button>
            </form>
        </div>
    );
};

export default AddProduct;