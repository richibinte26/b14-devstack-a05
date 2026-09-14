import banner from '../assets/banner-stack.png'
const Hero = () => {
    return (
        <section className="mx-4 sm:mx-8 md:mx-12 lg:mx-20">
            <div className=" flex  flex-col lg:flex-row gap-10 lg:gap-65 items-center  ">
                <div className="flex flex-col gap-6">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center lg:text-left">Build Your Ideal <br/>
                    <span className="bg-linear-to-r  from-orange-500 via-pink-600 to-violet-600 bg-clip-text text-transparent">Development Stack</span>
                    </h1>
                    <p className="text-gray-600 text-sm sm:text-base text-center lg:text-left">Explore frontend, backend, database, and tooling options,<br/>
                        compare them side by side, and put together the stack that fits your<br/>
                        next project.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center lg:justify-start">
                        <button className="btn rounded-xl w-full sm:w-50 bg-linear-to-r  from-orange-500 via-pink-600 to-violet-600 text-white hover:opacity-90 ">Explore Technologies</button>
                         <button className="btn rounded-xl w-full sm:w-50 border border-gray-300 text-gray-700">Learn More</button>
                    </div>
                </div>
                <div className="">
                    <img src={banner} alt="Development Stack" className='w-full max-w-xs sm:max-w-sm lg:max-w-none' />
                </div>

            </div>
        </section>
        
      
    );
};

export default Hero;