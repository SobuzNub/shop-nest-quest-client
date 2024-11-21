// import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import '@smastrom/react-rating/style.css'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Rating } from "@smastrom/react-rating";
import { useQuery } from '@tanstack/react-query';
import { axiosPublic } from '../../hooks/useAxiosPublic';
import LoadingSpinner from '../../components/shared/LoadingSpinner';

const Testimonials = () => {
    
    const {data: reviews, isLoading} = useQuery({
        queryKey: ['reviews'],
        queryFn: async () =>{
            const {data} = await axiosPublic.get('/testimonial')
            return data
        }
    })

    if(isLoading) return <LoadingSpinner></LoadingSpinner>

    // console.log(reviews);

    return (
        <section className="my-10">
            {/* <SectionTitle>
                subHeading=
                heading=
            </SectionTitle> */}
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className="my-8 mx-24 flex flex-col items-center">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p className="py-8 text-center">{review.details}</p>
                            <h3 className="text-2xl text-orange-400">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;