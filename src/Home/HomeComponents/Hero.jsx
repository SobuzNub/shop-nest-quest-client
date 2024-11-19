

const Hero = () => {
    return (
        <div
            className="hero min-h-screen"
            style={{
                backgroundImage: "url(https://img.freepik.com/free-psd/3d-rendering-ecommerce-background_23-2151386708.jpg?t=st=1732042718~exp=1732046318~hmac=8f3cff68de2be87b55f07597499a4901c03e6d5d4bbf47f81c337391b1920b7d&w=1380)",
            }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Shop Nest Quest</h1>
                    <p className="mb-5">
                    Discover a world of cozy, curated essentials at Shop Nest Quest! lifestyle accessories, and unique gifts. Embark on your quest for comfort and beauty with Shop Nest Quest today!
                    </p>
                    {/* <button className="btn btn-primary">Get Started</button> */}
                </div>
            </div>
        </div>
    );
};

export default Hero;