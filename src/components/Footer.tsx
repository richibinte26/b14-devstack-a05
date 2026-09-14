import logo from "../assets/logo-text.png";
const Footer = () => {
  return (
    <footer className=" mt-7 border-t border-gray-200 bg-white">
      <div className="mx-4 sm:mx-8 md:mx-10 lg:mx-14 grid gap-8 sm:gap-10 px-2 sm:px-4 lg:px-6 py-7 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <img src={logo} alt="DevStack" className="w-28 sm:w-32" />
          <p className="mt-3 text-xs sm:text-sm leading-6 text-gray-600">
            Curated tools, technologies, and resources for developers building
            modern software.
          </p>
          <div className="mt-5 flex items-center gap-4 text-xs sm:text-sm text-gray-900">
            <a href="#" className="hover:text-gray-900">
              Github
            </a>
            <a href="#" className="hover:text-gray-900">
              Twitter
            </a>
            <a href="#" className="hover:text-gray-900">
              LinkedIn
            </a>
          </div>
        </div>
        <div className="hidden sm:block">
          <h4 className="font-semibold text-sm sm:text-base">Product</h4>
          <div className="mt-4 flex flex-col gap-3 text-xs sm:text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">
              Home
            </a>
            <a href="#" className="hover:text-gray-900">
              Technologies
            </a>
            <a href="#" className="hover:text-gray-900">
              Projects
            </a>
          </div>
        </div>
        <div className="hidden sm:block">
          <h4 className="font-semibold text-sm sm:text-base">Company</h4>
          <div className="mt-4 flex flex-col gap-3 text-xs sm:text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">
              About
            </a>
            <a href="#" className="hover:text-gray-900">
              Contact
            </a>
            <a href="#" className="hover:text-gray-900">
              Careers
            </a>
          </div>
        </div>
        <div className="hidden sm:block">
          <h4 className="font-semibold text-sm sm:text-base">Legal</h4>
          <div className="mt-4 flex flex-col gap-3 text-xs sm:text-sm text-gray-600">
            <a href="#" className="hover:text-gray-900">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-900">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
      <div className="mx-4 sm:mx-10 lg:mx-20 lg:mr-25 border-t border-gray-200"></div>
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 justify-between items-center mx-4 sm:mx-10 lg:mx-20 mt-3 text-xs sm:text-sm text-gray-500 text-center sm:text-left">
        <p>© 2026 Dev Stack. All rights reserved</p>
        <div className="sm:mr-8 flex gap-4">
          <a href="#" className="hover:text-gray-900">
            Privacy
          </a>
          <a href="#" className="hover:text-gray-900">
            Terms
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
