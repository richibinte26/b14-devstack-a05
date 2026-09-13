import technologies from "../data/technologies.json";
import type { Technology } from "../Technology";
import TechnologyCard from "./TechnologyCard"
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
const TechnologySection = () => {
    const [selectedTechnologies, setSelectedTechnologies] = useState<Technology[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 500);
        return () => clearTimeout(timer);
    },[]);

    const handleAddToStack = (technology:Technology) =>{
        const alreadyAdded = selectedTechnologies.some((item) => item.id === technology.id);
        if(alreadyAdded){
            toast.warning("This technology is already in your stack!");
            return;
        }
        setSelectedTechnologies([...selectedTechnologies,technology,]);
        toast.success(`${technology.name} added to your stack!`);
    };
    const  handleRemoveFromStack = (id: string) => {
        const technology = selectedTechnologies.find((item) => item.id === id);
    
        setSelectedTechnologies(
            selectedTechnologies.filter(
                (technology) => technology.id !== id
            )
        );
        if (technology) {
            toast.success(`${technology.name} removed from your stack!`);
        }
    };
     if(loading) {
            return (
                <p className="py-16 text-center text-gray-500">Loading technologies</p>
            )
        }

    return (
    <>
        <ToastContainer/>
        <section>
            <div className="mx-auto w-full px-6 py-16 ">
                <div>
                    <h2 className=" text-3xl font-bold">Explore the <span className="text-pink-500">Technologies</span></h2>
                    <p className="mt-2 mb-8 text-gray-600">Pick one technology per category to build your ideal stack</p>
                </div>
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_280px]">
                    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {technologies.map((technology) =>(
                            <TechnologyCard key={technology.id}
                                technology={technology}
                                onAdd={handleAddToStack}
                                isAdded={selectedTechnologies.some((item)=> item.id === technology.id
                                )}
                            />
                        ))}
                    </div> 

                    <div className="self-start rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                        <h3 className="text-xl font-bold">Your Stack</h3>
                        <p className="mt-2 text-sm text-gray-500">
                            {selectedTechnologies.length} Technologies selected yet
                        </p>
                            {selectedTechnologies.length === 0 && (
                            <div className="mt-6 rounded-lg border border-gray-200 p-6 text-center">
                                <p className="mt-2 text-sm text-gray-500">
                                    Your Stack is Empty
                                </p>
                            </div>)}
                               {selectedTechnologies.map((technology)=>(
                                <div key={technology.id} className="mt-4 flex items-center gap-3 rounded-lg border border-gray-50 bg-gray-50 p-3">
                               <img src={technology.icon} 
                                    alt={technology.name}
                                    className="h-10 w-10"
                                />
                                <div className="flex-1">
                                    <p className="font-medium">{technology.name}</p>
                                    <p className="text-sm text-gray-500">{technology.category}</p>
                                </div>
                                <button onClick={() => handleRemoveFromStack(technology.id)} className="text-gray-400 hover:text-red-500"> X </button>

                            </div>
                        ))}
                    {selectedTechnologies.length > 0 &&(
                        <button onClick={() => {setSelectedTechnologies([]);
                            toast.success("All technologies removed from your stack!");
                        }}
                        className="mt-5 w-full rounded-lg border border-red-200 py-2 text-sm text-pink-500 hover:bg-pink-50"
                            >Remove All </button>
                        )}
                    </div>                   


                </div>
            </div>
        </section>
    </>
    );
};

export default TechnologySection;