import Overview from "./Overview";

export default function NavBar() {
    return (
        <>
            <div className="xsm:flex hidden justify-between h-[50px] w-full border-b-2 border-[#1D1D1D]">
                <div className="flex">
                    <span className="ps-[10px] pe-[12px] pt-[8px] pb-[12px] w-[50px]">
                        <img src="/images/Group 13.svg" alt="logo" className="h-[30px] w-[30px]" />
                    </span>
                    <span className="ps-[23px] pe-[57px] pt-[13px] pb-[14px] border-e-[1px] border-[#1D1D1D]">
                        <p className="text-[18px] font-[700] text-[#FFFFFF]">Vertxlabs, Inc</p>
                    </span>
                    <span className="ps-[23px] py-[14px]">
                        <p className="text-[16px] font-[600] text-[#FFFFFF]">Profile</p>
                    </span>
                </div>
                <div className="flex">
                    <span className="ps-[30px] pe-[31px] pt-[14px] pb-[18px] border-x-[1px] border-[#1D1D1D]">
                        <p className="text-[16px] font-[600] text-[#FFFFFF]">Activity</p>
                    </span>
                    <span className="ps-[30px] pe-[32px] py-[14px]">
                        <p className="text-[16px] font-[600] text-[#FFFFFF]">Log out</p>
                    </span>
                </div>
            </div>


            {/* mobile responsive */}

            <div className="flex flex-col xsm:hidden smx:h-[140px] h-[120px] smx:pt-[14px] pt-[10px] px-[11px] border-b-[1px] border-[#1D1D1D]">
                <div className="flex justify-between">
                    <div>
                        {/* <img src="/images/Group 13.svg" alt="Group 13" className="smx:h-[40px] smx:w-[40px]  h-[30px] w-[30px]" /> */}
                        <div className="smx:h-[40px] smx:w-[40px]  h-[30px] w-[30px] bg-white border border-white rounded-full"></div>
                    </div>
                    <div>
                        <img src="/images/Vertx New SVG 1 1 1.svg" alt="Vertx Logo" className="smx:h-[40px] smx:w-[40px] h-[30px] w-[30px]" />
                    </div>
                    <div>
                        <img src="/images/Vector.svg" alt="Vector Icon" className="smx:h-[35px] smx:w-[14px] h-[30px] w-[7px]" />
                    </div>
                </div>
                <div className="flex justify-between smx:text-[16px] text-[12px] font-[600] smx:px-[29px] px-[20px] pt-[48.77px]">
                    <span className="text-white underline decoration-2 underline-offset-[10px]">
                        <p>Overview</p>
                    </span>
                    <span className="text-[#555555]">
                        <p>Portfolio</p>
                    </span>
                    <span className="text-[#555555]">
                        <p>Experience</p>
                    </span>
                    <span className="text-[#555555]">
                        <p>Media</p>
                    </span>
                </div>
            </div>

            {/* mobile responsive */}


            <div className="flex xsm:flex-row flex-col w-full">
                <div className="xsm:flex hidden flex-col h-[calc(100vh-50px)] w-[50px] min-w-[50px] border-e-[1px] border-[#1D1D1D]">
                    <span className="px-[10px] pt-[8px] pb-[12px] bg-[#3A3030] border-b-[1px] border-[#1D1D1D] ">
                        <div className="relative h-[30px] w-[30px] flex items-center justify-center">
                            <div className="h-[30px] w-[30px] bg-white border border-white rounded-full"></div>
                            <div className="absolute bottom-0 right-0 h-[8px] w-[8px] bg-[#01754F] rounded-full"></div>
                        </div>
                    </span>
                    <span className="px-[10px] pt-[8px] pb-[12px] border-b-[1px] border-[#1D1D1D]">
                        <div className="relative h-[30px] w-[30px] flex items-center justify-center">
                            <div className="h-[30px] w-[30px] bg-white border border-white rounded-full"></div>
                            <div className="absolute bottom-0 right-0 h-[8px] w-[8px] bg-[#8B3A08] rounded-full"></div>
                        </div>
                    </span>
                    <span className="px-[10px] pt-[8px] pb-[12px] border-b-[1px] border-[#1D1D1D]">
                        <div className="relative h-[30px] w-[30px] flex items-center justify-center">
                            <div className="h-[30px] w-[30px] bg-white border border-white rounded-full"></div>
                            <div className="absolute bottom-0 right-0 h-[8px] w-[8px] bg-[#01754F] rounded-full"></div>
                        </div>
                    </span>
                </div>
                <div className="xsm:flex hidden flex-col gap-y-[30px] ps-[23px] pt-[18px] pe-[87px] w-[199px] min-w-[199px] border-e-[1px] border-[#1D1D1D]">
                    {["Dashboard", "Analytics", "Connect", "Dealroom", "Profile", "Settings"].map((item) => (
                        <p
                            key={item}
                            className='text-[16px] font-[700] text-[#555555]'
                        >
                            {item}
                        </p>
                    ))}
                </div>
                <div className="flex-1 overflow-x-auto">
                    <Overview />
                </div>


                {/* mobile responsive */}

                <div className="flex xsm:hidden h-[65px] px-[15px] pt-[13px] pb-[10px]">
                    <div className="flex justify-between text-white smx:text-[14px] text-[10px] font-[600] w-full">
                        <span className="flex flex-col gap-1 items-center">
                            <img src="/images/dashboard.svg" className="h-[20px] w-[20px]" />
                            <p>Dashboard</p>
                        </span>
                        <span className="flex flex-col gap-1 items-center">
                            <img src="/images/analyic.svg" className="h-[20px] w-[20px]" />
                            <p>Analytics</p>
                        </span>
                        <span className="flex flex-col gap-1 items-center">
                            <img src="/images/connect.svg" className="h-[20px] w-[20px]" />
                            <p>Connect</p>
                        </span>
                        <span className="flex flex-col gap-1 items-center">
                            <img src="/images/activity.svg" className="h-[20px] w-[20px]" />
                            <p>Activity</p>
                        </span>
                        <span className="flex flex-col gap-1 items-center">
                            <img src="/images/dealroom.svg" className="h-[20px] w-[20px]" />
                            <p>Dealroom</p>
                        </span>
                    </div>
                </div>

                {/* mobile responsive */}


            </div>
        </>
    );
} 