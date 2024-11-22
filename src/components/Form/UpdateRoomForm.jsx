


const UpdateRoomForm = ({product, handleSubmit, productData, setProductData}) => {
    



    

    return (
        <div className='w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 gap-10'>
                    <div className='space-y-1 text-sm'>
                        <label htmlFor='location' className='block text-gray-600'>
                            Name
                        </label>
                        <input
                            className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                            name='name'
                            value={productData?.name}
                            onChange={(e) => setProductData({ ...productData, name: e.target.value })}
                            id='name'
                            type='text'
                            placeholder='Name'
                            required
                        />
                    </div>
                    

                    <div className='space-y-1 text-sm'>
                        <label htmlFor='location' className='block text-gray-600'>
                            Image
                        </label>
                        <input
                            className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                            name='image'
                            id='image'
                            value={productData?.image}
                            onChange={(e) => setProductData({ ...productData, image: e.target.value })}
                            type='text'
                            placeholder='Image'
                            required
                        />
                    </div>

                    <div className='space-y-1 text-sm'>
                        <label htmlFor='category' className='block text-gray-600'>
                            Category
                        </label>
                        <select
                            required
                            className='w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md'
                            name='category'
                            value={productData?.category}
                            onChange={(e) => setProductData({ ...productData, category: e.target.value })}
                        >
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

                    {/* brand */}
                    <div className='space-y-1 text-sm'>
                        <label htmlFor='category' className='block text-gray-600'>
                            Brand
                        </label>
                        <select
                            required
                            className='w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md'
                            name='category'
                            value={productData?.brand}
                            onChange={(e) => setProductData({ ...productData, brand: e.target.value })}
                        >
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

                    <div className='flex justify-between gap-2'>
                        <div className='space-y-1 text-sm'>
                            <label htmlFor='price' className='block text-gray-600'>
                                Price
                            </label>
                            <input
                                className='w-full px-4 py-3 text-gray-800 border border-rose-300 focus:outline-rose-500 rounded-md '
                                name='price'
                                id='price'
                                type='number'
                                placeholder='Price'
                                required
                                value={productData?.price}
                                onChange={(e) => setProductData({ ...productData, price: e.target.value })}
                            />
                        </div>

                    
                    </div>

                    

                    <div className='space-y-1 text-sm'>
                        <label htmlFor='description' className='block text-gray-600'>
                            Description
                        </label>

                        <textarea
                            id='description'
                            className='block rounded-md focus:rose-300 w-full h-32 px-4 py-3 text-gray-800  border border-rose-300 focus:outline-rose-500 '
                            name='description'
                            value={productData?.description}
                            onChange={(e) => setProductData({ ...productData, description: e.target.value })}
                        ></textarea>
                    </div>
                </div>

                <button
                    type='submit'
                    className='w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500'
                >
                    Update
                </button>
            </form>
        </div>
    )
}

export default UpdateRoomForm