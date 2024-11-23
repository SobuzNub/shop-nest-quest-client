import axios from "axios";

export const axiosSecure = axios.create({
    baseURL: 'https://shop-nest-quest-server.vercel.app'
})

const useAxiosSecure = () => {
    return axiosSecure 
};

export default useAxiosSecure;