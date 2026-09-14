import type { Technology } from "../Technology";
import { FaCheck } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
interface TechnologyCardProps {
  technology: Technology;
  onAdd: (technology: Technology) => void;
  isAdded: boolean;
}

const TechnologyCard = ({
  technology,
  onAdd,
  isAdded,
}: TechnologyCardProps) => {
  return (
    <div
      className={`rounded-xl border bg-white p-4 sm:p-6 shadow-sm transition-all duration-200 ${
        isAdded ? "border-pink-500 ring-1 ring-pink-500" : "border-gray-200"
      }`}
    >
      <div className="flex items-center justify-between">
        <img
          src={technology.icon}
          alt="{technology.name}"
          className="h-10 w-10 sm:h-12 sm:w-12"
        />
        <span className={`rounded-full border border-white shadow-sm px-2 sm:px-3 py-1 text-xs sm:text-sm ${technology.badgeColor}`}>
          {technology.badge}
        </span>
      </div>
      <h3 className="mt-4 text-lg sm:text-xl font-bold">{technology.name}</h3>

      <p className="mt-2 text-xs sm:text-sm leading-6 text-gray-800">
        {technology.description}
      </p>

      <div className="mt-4 flex flex-wrap items-center gap-2 justify-between ">
        <span className="rounded-full bg-gray-100 px-2 sm:px-3 py-1 text-xs sm:text-sm text-gray-600">
          {technology.category}
        </span>
        <span className="text-xs sm:text-sm text-gray-500">{technology.difficulty}</span>
        <div className="flex items-center gap-1">
          <FaStar className="text-yellow-400" />
          <span className="text-xs sm:text-sm font-medium">{technology.rating}</span>
        </div>
      </div>
      <button
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`mt-5 w-full rounded-lg py-2 sm:py-2.5 text-xs sm:text-sm font-medium cursor-pointer disabled:cursor-not-allowed ${
          isAdded
            ? "bg-pink-100 text-pink-700 disabled:opacity-100"
            : "bg-gray-900 text-white hover:bg-gray-800 disabled:opacity-60"
        }`}
      >
        {isAdded ? (
          <>
            <FaCheck className="inline mr-1" />
            Added to stack
          </>
        ) : (
          "Add to Stack"
        )}
      </button>
    </div>
  );
};

export default TechnologyCard;