import banner from '../assets/banner-stack.png'
const Hero = () => {
    return (
        <section className="flex">
            <div className="mx-auto flex w-full justify-between items-center px-6 py-16 ">
                <div className="flex flex-col gap-6">
                    <h1 className="text-5xl font-bold">Build Your Ideal <br/>
                    <span className="bg-linear-to-r  from-orange-500 via-pink-600 to-violet-600 bg-clip-text text-transparent">Development Stack</span>
                    </h1>
                    <p className="text-gray-600">Explore frontend, backend, database, and tooling options,<br/>
                        compare them side by side, and put together the stack that fits your<br/>
                        next project.
                    </p>
                    <div className="flex gap-4 mt-6">
                        <button className="btn btn-wide bg-linear-to-r  from-orange-500 via-pink-600 to-violet-600 text-white hover:opacity-90 ">Explore Technologies</button>
                         <button className="btn btn-wide border border-gray-300 text-gray-700">Learn More</button>
                    </div>
                </div>
                <div className="w-1/2">
                    <img src={banner} alt="Development Stack" className='w-full' />
                </div>

            </div>
        </section>
        
      
    );
};

export default Hero;