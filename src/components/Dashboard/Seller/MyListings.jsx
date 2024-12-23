import { useMutation, useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async'
import useAuth from '../../../hooks/useAuth';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import ProductDataRow from '../TableRows/ProductDataRow';
import toast from 'react-hot-toast';

const MyListings = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();

    // Fetch rooms data
    const { data: products = [], isLoading, refetch } = useQuery({
        queryKey: ['my-listings', user?.email],
        queryFn: async () => {
            const {data} = await axiosSecure.get(`/my-listings/${user?.email}`)
            // console.log(res.data)
            return data;

        }
    })


    // delete 
    const {mutateAsync} = useMutation({
      mutationFn: async (id) =>{
          const {data} = await axiosSecure.delete(`/room/${id}`)
          return data;
      },
      onSuccess: data =>{
          console.log(data);
          refetch();
          toast.success("Deleted Successfully!")
      }
  })

  const handleDelete = async id =>{
      console.log(id)
      try{
          await mutateAsync(id)
      }catch(err){
          console.log(err);
      }
  }


  return (
    <>
      <Helmet>
        <title>My Listings</title>
      </Helmet>

      <div className='container mx-auto px-4 sm:px-8'>
        <div className='py-8'>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead>
                  <tr>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Name
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      category
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Price
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Brand
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Description
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Delete
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Update
                    </th>
                  </tr>
                </thead>
                <tbody>
                {/* Room row data */}
                    {
                        products.map(product => <ProductDataRow key={product._id} product={product} refetch={refetch} handleDelete={handleDelete}></ProductDataRow>)
                    }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyListings