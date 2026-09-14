import logo from "../assets/logo-text.png"
const Footer = () => {
    return(
        <footer className=" my-10 border-t border-gray-200 bg-white">
            <div className="mx-14 grid gap-10 px-6 py-7 md:grid-cols-2 lg:grid-cols-4">
                <div>
                    <img src={logo} alt="DevStack" className="w-32" />
                    <p className="mt-3 text-sm leading-6 text-gray-600">Curated tools, technologies, and resources for developers building modern software.</p>
                     <div className="mt-5 flex items-center gap-4 text-sm text-gray-900">
                        <a href="#" className="hover:text-gray-900">Github</a>
                        <a href="#"className="hover:text-gray-900">Twitter</a>
                        <a href="#"className="hover:text-gray-900">LinkedIn</a>

                    </div>
                </div>
                <div>
                    <h4 className="font-semibold">Product</h4>
                    <div className="mt-4 flex flex-col gap-3 text-sm text-gray-600">
                        <a href="#" className="hover:text-gray-900">Home</a>
                        <a href="#"className="hover:text-gray-900">Technologies</a>
                        <a href="#"className="hover:text-gray-900">Projects</a>

                    </div>
                </div>
                <div>
                    <h4 className="font-semibold">Company</h4>
                     <div className="mt-4 flex flex-col gap-3 text-sm text-gray-600">
                        <a href="#" className="hover:text-gray-900">About</a>
                        <a href="#"className="hover:text-gray-900">Contact</a>
                        <a href="#"className="hover:text-gray-900">Careers</a>

                    </div>
                </div>
                <div>
                    <h4 className="font-semibold">Legal</h4>
                     <div className="mt-4 flex flex-col gap-3 text-sm text-gray-600">
                        <a href="#" className="hover:text-gray-900">Privacy Policy</a>
                        <a href="#"className="hover:text-gray-900">Terms of Service</a>
                       

                    </div>
                </div>
            </div>
            <div className="mx-20  mr-25 border-t border-gray-200"></div>
                <div className="flex justify-between items-center mx-20  py-4 text-sm text-gray-500">
                    <p>© 2026 Dev Stack. All rights reserved</p>
                    <div className="mr-8 flex gap-4">
                        <a href="#"className="hover:text-gray-900">Privacy</a>
                         <a href="#"className="hover:text-gray-900">Terms</a>
                    </div>
               
            </div>

        </footer>
    )
}
export default Footer