import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import img from '../assets/login.svg'
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";

const Login = () => {

    const {signIn, setLoading, signInWithGoogle} = useAuth();
    const navigate = useNavigate();

    const {register, handleSubmit, formState: {errors}} = useForm();

    const onsubmit = async (data) =>{
        try{
            setLoading(true)
            // login user
            const result = await signIn(data.email, data.password)
            console.log(result);
            navigate('/')
            toast.success('User Login Successfully')

        }catch(err){
            console.log(err);
            toast.error(err.message)
        }
    }

    // google sign in
    const googleSignIn = async () =>{
        try{
            setLoading(true)
            // google sign in
            await signInWithGoogle();
            navigate('/')
            toast.success('User Login Successfully')
        }catch(err){
            console.log(err);
            toast.error(err.message)
        }
    }

    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
            <div className='flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl '>
                <div
                    className='hidden bg-cover bg-center lg:block lg:w-1/2'
                    style={{
                        backgroundImage: `url(${img})`,
                    }}
                ></div>

                <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>



                    <p className='mt-3 text-2xl text-center text-green-500 font-bold'>
                        Login Now!
                    </p>



                    <div className='flex items-center justify-between mt-4'>
                        <span className='w-1/5 border-b  lg:w-1/4'></span>

                        <div className='text-xs text-center text-gray-500 uppercase  hover:underline'>
                            Login with email
                        </div>

                        <span className='w-1/5 border-b dark:border-gray-400 lg:w-1/4'></span>
                    </div>
                    <form onSubmit={handleSubmit(onsubmit)}> 
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
                                {...register('email', {required: true})}
                            />
                            {errors.email && <p className="text-sm text-red-500 font-light">Email is Required</p>}
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
                                {...register('password', {required: true})}
                            />
                             {errors.email && <p className="text-sm text-red-500 font-light">Password is Required</p>}
                        </div>
                        <div className='mt-6'>
                            <button
                                type='submit'
                                className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-500 rounded-lg hover:bg-green-400 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
                            >
                                Sign In
                            </button>
                        </div>
                    </form>

                    <div className="md:flex gap-5 mt-5 items-center mx-auto w-3/4 text-center">
                        <h2 className="font-bold">Sign in with</h2>
                        <button onClick={googleSignIn} className="btn"><span><FaGoogle /></span> Google</button>
                        <button className="btn"><span><FaGithub /></span> Github</button>
                    </div>

                    <div className='flex items-center justify-between mt-4'>
                        <span className='w-1/5 border-b  md:w-1/4'></span>

                        <Link
                            to='/register'
                            className='text-xs text-gray-500 uppercase  hover:underline'
                        >
                            or sign up
                        </Link>

                        <span className='w-1/5 border-b  md:w-1/4'></span>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Login;