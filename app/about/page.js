import React from 'react';

const CustomLayout = () => {
  return (
    <>
      <h2 className="text-4xl font-bold text-center font-poppins text-[#37B7C3] mt-[53px] mb-[-87px]">About Us</h2>
      <div className="w-full bg-white">
        <div className="max-w-screen-xl mx-auto p-8 md:p-16 flex flex-col md:flex-row gap-8 items-center">
          {/* Left Column - Images */}
          <div className="w-full md:w-2/5 flex gap-4">
            <div className="flex-shrink-0 w-[280px] h-[460px]">
              <img
                src="/abottwo.avif"
                
                alt="Digital Marketing"
                className="w-full h-full rounded-lg object-cover"
              />
            </div>

            <div className="flex flex-col gap-4 w-[280px] h-[460px]">
              <img
                src="/aboutthree.jpg"
                alt="Marketing Strategy"
                className="w-full h-1/2 rounded-lg object-cover"
              />
              <img
                src="/aboutone.jpg"
                alt="Team Collaboration"
                className="w-full h-1/2 rounded-lg object-cover"
              />
            </div>
          </div>

          {/* Right Column - Text */}
          <div className="w-full md:w-3/5 flex flex-col justify-center font-poppins">
            <h2 className="text-gray-900 text-2xl md:text-4xl font-bold mt-2 leading-snug">
              Your Ultimate Partner in Digital Marketing Success
            </h2>
            <p className="text-gray-600 mt-4 text-lg leading-relaxed">
              At Digital Marketing Experts, we specialize in creating tailored marketing strategies that drive results. 
              From SEO and content marketing to social media management and PPC campaigns, our experienced team delivers 
              comprehensive solutions that elevate your brand's online presence.
            </p>

            {/* Stats Section */}
            <div className="flex items-start mt-6 gap-12">
              <div className="text-center">
                <div className="gradient-text text-4xl font-bold">500+</div>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                We take pride in our proven track record of helping businesses achieve their digital marketing goals. 
                Join our community of satisfied clients and experience unparalleled growth.
              </p>
            </div>

            {/* Button */}
            <button 
              className="bg-gradient-to-r from-[#2558a2] via-[#1e8cd8] to-[#00aaff] antialiased bg-grid-white/[0.02] mt-6 text-black px-6 py-3 rounded-lg shadow-md text-lg font-semibold hover:bg-orange-600"
              
            >
              Discover More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomLayout;
