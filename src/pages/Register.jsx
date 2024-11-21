import { Link, useNavigate } from "react-router-dom";
import img from '../assets/login.svg'
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import { FaGithub, FaGoogle } from "react-icons/fa";


const Register = () => {

    const { createUser, setLoading, updateUserProfile, signInWithGoogle, signInWithGithub } = useAuth();
    const navigate = useNavigate();
    

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onsubmit = async (data) => {
        // const name = data.name
        // const photoURL = data.photo
        // const email = data.email
        // const role = data.role
        // const status = role === 'buyer' ? 'approved' : 'pending'

        // const userData = {name, photoURL, email, role, status}

        try {
            setLoading(true)
            // create user
            const result = await createUser(data.email, data.password)
            console.log(result);

            // update user profile
            await updateUserProfile(data.name, data.photo)
            navigate('/')
            toast.success('User Created Successfully')

            // save user data in db
            // const {currentUser} = await axios.put(`${import.meta.env.VITE_API_URL}/users`, userData)
            // return currentUser;

        } catch (err) {
            console.log(err);
            toast.error(err.message)
        }
    }

    const handleGoogleSignIn = async () => {
        try {
            setLoading(true)
            await signInWithGoogle();
            navigate('/')
            toast.success('User Login Successfully')
        } catch (err) {
            console.log(err);
            toast.error(err.message)
        }
    }

    const handleGithubSignIn = async () => {
        try {
            setLoading(true)
            // github login
            await signInWithGithub();
            navigate('/')
            toast.success('User Login Successfully')
        } catch (err) {
            console.log(err);
            toast.error(err.message)
        }
    }

    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
            <div className='flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-5xl '>
                <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>

                    <p className='mt-3 text-3xl font-bold text-center text-green-400 '>
                        Register Now!
                    </p>

                    <div className='flex items-center justify-between mt-4'>
                        <span className='w-1/5 border-b  lg:w-1/4'></span>

                        <div className='text-xs text-center text-gray-500 uppercase  hover:underline'>
                            or Registration with email
                        </div>

                        <span className='w-1/5 border-b dark:border-gray-400 lg:w-1/4'></span>
                    </div>
                    <form onSubmit={handleSubmit(onsubmit)}>
                        <div className='mt-4'>
                            <label
                                className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='name'
                            >
                                Username
                            </label>
                            <input
                                id='name'
                                autoComplete='name'
                                name='name'
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='text'
                                {...register('name', { required: true })}
                            />
                            {errors.name && <p className="text-sm text-red-500 font-light">Name is Required</p>}
                        </div>
                        <div className='mt-4'>
                            <label
                                className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='photo'
                            >
                                Photo URL
                            </label>
                            <input
                                id='photo'
                                autoComplete='photo'
                                name='photo'
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='text'
                                {...register('photo', { required: true })}
                            />
                            {errors.name && <p className="text-sm text-red-500 font-light">PhotoURL is Required</p>}
                        </div>
                        {/* <div className="form-control w-full">
                            <label className="block mb-2 text-sm font-medium text-gray-600">
                                <span className="label-text">Role</span>
                            </label>
                            <select className="select select-bordered w-full"
                                {...register('role', { required: true })}
                            >
                                <option value='buyer'>Buyer</option>
                                <option value='seller'>Seller</option>
                                <option value='admin'>Admin</option>
                            </select>
                            {errors.role && <p className="text-red-500 text-sm font-light">Role is Required</p>}
                        </div> */}
                        <div className='mt-4'>
                            <label
                                className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='LoggingEmailAddress'
                            >
                                Email Address
                            </label>
                            <input
                                id='LoggingEmailAddress'
                                autoComplete='email'
                                name='email'
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='email'
                                {...register('email', { required: true })}
                            />
                            {errors.name && <p className="text-sm text-red-500 font-light">Email is Required</p>}
                        </div>

                        <div className='mt-4'>
                            <div className='flex justify-between'>
                                <label
                                    className='block mb-2 text-sm font-medium text-gray-600 '
                                    htmlFor='loggingPassword'
                                >
                                    Password
                                </label>
                            </div>

                            <input
                                id='loggingPassword'
                                autoComplete='current-password'
                                name='password'
                                className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                                type='password'
                                {...register('password', { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })}
                            />
                            {errors.password?.type === "required" && (
                                <p className="text-red-600">Password is required</p>
                            )}
                            {errors.password?.type === "minLength" && (
                                <p className="text-red-600">Password must be 6 characters</p>
                            )}
                            {errors.password?.type === "maxLength" && (
                                <p className="text-red-600">Password must be less then 20 characters</p>
                            )}
                            {errors.password?.type === "pattern" && (
                                <p className="text-red-600">Password must have one upper case, one lower case, one number and one special character </p>
                            )}
                        </div>
                        <div className='mt-6'>
                            <button
                                type='submit'
                                className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-500 rounded-lg hover:bg-green-400 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>

                    <div className='flex items-center justify-between mt-4'>
                        <span className='w-1/5 border-b  md:w-1/4'></span>

                        <Link
                            to='/login'
                            className='text-xs text-gray-500 uppercase  hover:underline'
                        >
                            or sign in
                        </Link>

                        <span className='w-1/5 border-b  md:w-1/4'></span>
                    </div>

                    <div className="md:flex gap-5 mt-5 items-center mx-auto w-3/4 text-center">
                        <h2 className="font-bold">Sign in with</h2>
                        <button onClick={handleGoogleSignIn} className="btn"><span><FaGoogle /></span> Google</button>
                        <button onClick={handleGithubSignIn} className="btn"><span><FaGithub /></span> Github</button>
                    </div>

                </div>
                <div
                    className='hidden bg-cover bg-center lg:block lg:w-1/2'
                    style={{
                        backgroundImage: `url(${img})`,
                    }}
                ></div>
            </div>
        </div>
    );
};

export default Register;