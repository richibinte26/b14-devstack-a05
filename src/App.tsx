import { Suspense } from "react";
import Footer from "./components/Footer";
import TechnologySection from "./components/TechnologySection";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import type { Technology } from "./Technology";
import technologiesData from "./data/technologies.json";

const fetchTechnologies = (): Promise<Technology[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(technologiesData as Technology[]);
        }, 500);
    });
};

const technologiesPromise = fetchTechnologies();

function App() {
    return (
        <>
            <Navbar />
            <Hero />

            <Suspense
                fallback={
                    <p className="py-16 text-center text-gray-500">
                        Loading technologies...
                    </p>
                }
            >
                <TechnologySection technologiesPromise={technologiesPromise} />
            </Suspense>

            <Footer />
        </>
    );
}

export default App;