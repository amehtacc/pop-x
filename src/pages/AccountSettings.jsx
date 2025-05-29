import React, { useEffect, useState } from "react";

const AccountSettings = () => {
  const [data, setData] = useState({})

  useEffect(() => {
    const userData = JSON.parse(window.localStorage.getItem('user'))
    setData(userData)
  }, [])

  return (
    <div className="w-full h-screen flex justify-center items-start">
      <div className="relative h-screen pb-8 bg-[#00000007]">
        <div className="w-full sm:max-w-sm">
          <h1 className="text-lg bg-white capitalize py-5 text-left text-[#1D2226] px-4 ">
            Account Settings
          </h1>

          <div className="py-4">
            <div className="px-4 pb-4">
              <div className="flex items-start space-x-6">
                <div className="relative">
                  <img
                    src="https://randomuser.me/api/portraits/women/79.jpg"
                    alt="profile"
                    className="w-20 h-20 rounded-full object-cover"
                  />
                  <span className="absolute bottom-2 -right-3 bg-[#6C25FF] text-white rounded-full p-1 w-7 h-7 flex items-center justify-center shadow-lg cursor-pointer">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="white"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M20 7h-3.17l-1.41-1.41A2 2 0 0 0 14 5h-4a2 2 0 0 0-1.41.59L7.17 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zM12 17a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
                    </svg>
                  </span>
                </div>

                <div className="flex-1">
                  <h2 className="font-medium text-[#1D2226] mb-0">{data?.fullname}</h2>
                  <p className="text-sm text-[#1D2226] mb-4">{data?.email}</p>
                </div>
              </div>
              <p className="text-[#1D2226] text-sm leading-relaxed pt-6">
                Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed
                Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna
                Aliquyam Erat, Sed Diam
              </p>
            </div>
            <div className="border-t border-dashed border-[#CBCBCB]"></div>
          </div>
          <div className="absolute bottom-8 left-0 right-0 border-t border-dashed border-[#CBCBCB]"></div>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
