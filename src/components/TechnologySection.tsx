import { RxCross2 } from "react-icons/rx";
import type { Technology } from "../Technology";
import TechnologyCard from "./TechnologyCard";
import { use, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

interface TechnologySectionProps {
    technologiesPromise: Promise<Technology[]>;
}

const TechnologySection = ({ technologiesPromise }: TechnologySectionProps) => {
    const technologies = use(technologiesPromise);
    const [selectedTechnologies, setSelectedTechnologies] = useState<Technology[]>([]);

    const handleAddToStack = (technology: Technology) => {
        const alreadyAdded = selectedTechnologies.some(
            (item) => item.id === technology.id
        );

        if (alreadyAdded) {
            toast.warning("This technology is already in your stack!");
            return;
        }

        setSelectedTechnologies([
            ...selectedTechnologies,
            technology,
        ]);

        toast.success(`${technology.name} added to your stack!`);
    };

    const handleRemoveFromStack = (id: string) => {
        const technology = selectedTechnologies.find(
            (item) => item.id === id
        );

        setSelectedTechnologies(
            selectedTechnologies.filter(
                (technology) => technology.id !== id
            )
        );

        if (technology) {
            toast.success(`${technology.name} removed from your stack!`);
        }
    };

    const handleRemoveAll = () => {
        setSelectedTechnologies([]);
        toast.success("All technologies removed from your stack!");
    };

    return (
        <>
            <ToastContainer />

            <section>
                <div className="mx-4 sm:mx-8 md:mx-10 lg:mx-14 px-2 sm:px-4 lg:px-6">

                    {/* Section Heading */}
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold">
                            Explore the{" "}
                            <span className="text-pink-500">
                                Technologies
                            </span>
                        </h2>

                        <p className="mt-2 mb-6 sm:mb-8 text-sm sm:text-base text-gray-600">
                            Pick one technology per category to build your ideal stack
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-[minmax(0,1fr)_280px]">

                        {/* Technology Cards */}
                        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {technologies.map((technology) => (
                                <TechnologyCard
                                    key={technology.id}
                                    technology={technology}
                                    onAdd={handleAddToStack}
                                    isAdded={selectedTechnologies.some(
                                        (item) => item.id === technology.id
                                    )}
                                />
                            ))}
                        </div>

                        {/* Your Stack */}
                        <div className="self-start rounded-xl border border-gray-200 bg-white p-4 sm:p-6 shadow-sm">

                            <h3 className="text-lg sm:text-xl font-bold">
                                Your Stack
                            </h3>

                            <p className="mt-2 text-xs sm:text-sm text-gray-500">
                                {selectedTechnologies.length === 0
                                    ? "No technologies selected"
                                    : `${selectedTechnologies.length} ${
                                          selectedTechnologies.length === 1
                                              ? "technology"
                                              : "technologies"
                                      } selected`}
                            </p>

                            {/* Empty Stack */}
                            {selectedTechnologies.length === 0 && (
                                <div className="mt-6 rounded-lg border border-dashed border-gray-200 p-4 sm:p-6 text-center">
                                    <p className="text-xs sm:text-sm text-gray-500">
                                        Your Stack is Empty
                                    </p>
                                </div>
                            )}

                            {/* Selected Technologies */}
                            {selectedTechnologies.map((technology) => (
                                <div
                                    key={technology.id}
                                    className="mt-4 flex items-center gap-2 sm:gap-3 rounded-lg border border-gray-50 bg-gray-50 p-2 sm:p-3"
                                >
                                    <img
                                        src={technology.icon}
                                        alt={technology.name}
                                        className="h-8 w-8 sm:h-10 sm:w-10"
                                    />

                                    <div className="flex-1">
                                        <p className="text-sm sm:text-base font-medium">
                                            {technology.name}
                                        </p>

                                        <p className="text-xs sm:text-sm text-gray-500">
                                            {technology.category}
                                        </p>
                                    </div>

                                    <button
                                        onClick={() =>
                                            handleRemoveFromStack(
                                                technology.id
                                            )
                                        }
                                        className="text-gray-400 hover:text-pink-500 cursor-pointer"
                                    >
                                        <RxCross2 />
                                    </button>
                                </div>
                            ))}

                            {/* Remove All Button */}
                            {selectedTechnologies.length > 0 && (
                                <button
                                    onClick={handleRemoveAll}
                                    className="mt-5 w-full rounded-lg border border-red-200 py-2  text-xs sm:text-sm text-pink-500 hover:bg-pink-50"
                                >
                                    Remove All
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TechnologySection;