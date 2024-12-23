



const Contact = () => {
    return (
        <div className='min-h-screen mt-28'>
            <div className=" grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-gray-100 text-black font-semibold">
                <div className="flex flex-col justify-between">
                    <div className="space-y-2">
                        <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's talk!</h2>
                        <div className="text-black">Whats on Your mind ?</div>
                    </div>
                    <img src="https://i.ibb.co/mJjFZKS/young-executive-working-with-headset-laptop.jpg" alt="" className="p-6 h-52 md:h-64" />
                </div>
                <form className="space-y-6">
                    <div>
                        <label className="text-sm">Full name</label>
                        <input id="name" type="text" placeholder="" className="w-full p-3 rounded " />
                    </div>
                    <div>
                        <label className="text-sm">Email</label>
                        <input id="email" type="email" className="w-full p-3 rounded " />
                    </div>
                    <div>
                        <label className="text-sm">Message</label>
                        <textarea id="message" rows="3" className="w-full p-3 rounded "></textarea>
                    </div>
                    <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-green-500 hover:bg-green-400 text-white transition-">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;