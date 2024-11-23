

// import team from '../../assets/about-banner-three.png'

import useRole from "../hooks/useRole";

const Extra2 = () => {
const [role] = useRole();
console.log(role);
    return (
        <section className=" mt-20  dark:bg-gray-100 dark:text-gray-800 my-12 min-h-screen">
            <div className="container border rounded-xl border-red-600 flex gap-3 flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                <div className="flex flex-col justify-center  text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                    <h1 className="text-5xl font-bold leading-none sm:text-6xl">Get The Best E-Commerce Website With <span className='text-red-600'><span className='text-6xl text-black'></span ><span className='text-3xl'>OUR</span></span> <span className='text-6xl text-black'>A</span><span className='text-3xl'>SIA</span>
                    </h1>
                    <p className="mt-6  text-lg sm:mb-12">Welcome to E-commerce Website. your one-stop online shopping destination for high-quality products at unbeatable prices! From trendy fashion and cutting-edge electronics to home essentials and beauty products, we have everything you need to elevate your lifestyle. Enjoy seamless browsing, secure checkout, and fast shipping—because you deserve the best. Shop smarter, live better!
                    </p>
                    <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">

                        <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800">Get Started</a>
                    </div>
                </div>
                <div className="items-center justify-center p-6   h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
                    <img src='https://img.freepik.com/free-psd/black-friday-super-sale-facebook-cover-template_120329-2087.jpg?t=st=1732354197~exp=1732357797~hmac=9419102e82beecca9d4d84806859680db83931e3017dbfead4c4de3205be9402&w=1060' alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128" />
                    <div className='flex justify-evenly mt-5 bg-slate-400 py-8 rounded-xl'>
                        <div >
                            <h1 className='text-4xl font-bold text-black'>150k</h1>
                            <p className='font-semibold text-red-600'>Happy Customer</p>
                        </div>

                        <div >
                            <h1 className='text-4xl font-bold text-black'>95.7%</h1>
                            <p className='font-semibold text-red-600'>Satisfaction Rate</p>
                        </div>
                        <div >
                            <h1 className='text-4xl font-bold text-black'>5000+</h1>
                            <p className='font-semibold text-red-600'>Order Completed</p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Extra2;