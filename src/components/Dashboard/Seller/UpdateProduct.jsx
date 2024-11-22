
import { useForm } from "react-hook-form";
import { MdProductionQuantityLimits } from "react-icons/md";



const UpdateProduct = () => {
    
    const { register, handleSubmit } = useForm();

    

    
    return (
        <div className="max-w-6xl mx-auto">
            <div>
                <h2 className="text-3xl text-center font-semibold font-mono mt-8 text-green-500">Update a Product</h2>
            </div>
            <form onSubmit={handleSubmit(onsubmit)}>
                <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text">Product Name</span>

                    </label>
                    <input type="text"
                        // defaultValue={products?.name}
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
                        // defaultValue={products.image}
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

export default UpdateProduct;