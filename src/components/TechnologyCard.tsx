import type { Technology } from "../Technology";
import { FaCheck } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
interface TechnologyCardProps{
    technology:Technology;
    onAdd: (technology: Technology)=> void;
    isAdded: boolean;
}

const TechnologyCard =({ technology, onAdd, isAdded,}: TechnologyCardProps)=>{

    return (
        <div className={`rounded-xl border bg-white p-6 shadow-sm transition-all duration-200 ${
            isAdded
            ?"border-pink-500 ring-1 ring-pink-500":
            "border-gray-200"}`}>

            <div className="flex items-center justify-between">
                <img src={technology.icon} alt={technology.name} className="h-12 w-12" />
                <span className="rounded-full border border-white shadow-sm  bg-white px-3 py-1 text-sm text-sky-500">{technology.badge}</span>
            </div>
            <h3 className="mt-4 text-xl font-bold">{technology.name}</h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">{technology.description}</p>

            <div className="mt-4 flex items-center justify-between ">
                <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">{technology.category}</span>
                <span className="text-sm text-gray-500">
                    {technology.difficulty}
                </span>
                <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span className="text-sm font-medium">{technology.rating}</span>
                </div>
            </div>
            <button onClick={()=> onAdd(technology)}
                disabled ={isAdded}className="mt-5 w-full rounded-lg bg-gray-900 py-2.5 text-sm font-medium text-white hover:bg-gray-800 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed">
                {isAdded ?(
                    <>
                        <FaCheck className="inline mr-1" /> 
                        Added to stack
                    </>
                    ) :(
                            "Add to Stack"
                        )
                }
            </button>
        </div>
    );
};

export default TechnologyCard;