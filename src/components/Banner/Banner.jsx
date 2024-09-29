const Banner = () => {
  return (
    <div>
      {/* <!-- Banner Section --> */}
      <section className="ml-5 mr-5 mx-auto mt-10 mb-10 lg:mb-0 py-0 lg:h-[650px] border-0 relative">
        {/* <!-- Banner Container --> */}
        <div className="bg-[url('/cooking-banner.jpg')] bg-cover bg-no-repeat rounded-xl hero h-[550px]">
          <div className="rounded-xl hero-overlay bg-opacity-60"></div>

          <div className="flex flex-col gap-5 justify-center items-center text-center mb-10">
            <h1 className="text-2xl md:text-4xl lg:text-7xl font-bold text-white">
              Discover an exceptional cooking <br /> className tailored for you!
            </h1>
            <p className="text-gray-200 md:text-lg mt-3 w-4/5 lg:w-2/3">
              Yes, you can run unit tests and view the results directly within
              the app. The integrated testing features allow for a streamlined .
            </p>

            <div className="flex flex-col md:flex-row gap-5">
              <button className="bg-[#0BE58A] border-2 border-[#0BE58A] font-bold rounded-full w-36 h-12 hover:bg-transparent hover:border-[#0BE58A] hover:text-[#0BE58A] text-black">
                Explore Now
              </button>
              <button className="bg-transparent border-2 border-[#0BE58A] text-[#0BE58A] font-bold rounded-full w-36 h-12 hover:bg-[#0BE58A] hover:border-[#0BE58A] hover:text-black">
                Feedback
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
