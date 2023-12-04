const Contents = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 w-[80%] mx-auto">
        <h1 className="text-3xl font-nokia-bold  text-[#3A4750]">
            Our Contents
        </h1>
        <hr className="border-[#EEA63F] border-1 w-[100%] pb-3" />
        <div className="flex flex-col w-[100%] justify-center items-center  mx-auto space-y-6 md:flex-row md:space-x-3 md:space-y-0" >
            <div className="flex flex-col w-[100%] md:w-[33.3%]">
                <div className="mx-auto w-[100%]">
                    <img  className="w-full" src="src/assets/content-1.svg" alt="" />
                </div>
                <div className="bg-[#3A4750E5] bg-opacity-90 text-center py-4 font-nokia-bold">
                    <h2 className="text-[#EA9215] text-2xl ">Course Study</h2>
                    <p className="text-[#fff] text-lg mb-4">Study on specific bible topics.</p>
                    <button type="button" className=" text-[#fff] font-nokia-ultraLight border-2  border-white border-opacity-80 rounded-full px-4 text-sm">See More</button>
                </div>
            </div>
            <div className="flex flex-col w-[100%]  md:w-[33.3%]">
                <div className="mx-auto w-[100%]">
                    <img  className="w-full" src="src/assets/content-2.svg" alt="" />
                </div>
                <div className="bg-[#3A4750E5] bg-opacity-90 text-center py-4 font-nokia-bold ">
                    <h2 className="text-[#EA9215] text-2xl ">Sabbath School Study</h2>
                    <p className="text-[#fff] text-lg mb-4">Quarterly bible study on a topic.</p>
                    <button type="button" className=" text-[#fff] font-nokia-ultraLight border-2  border-white border-opacity-80 rounded-full px-4 text-sm">See More</button>
                </div>
            </div>
            <div className="flex flex-col w-[100%] md:w-[33.3%]">
                <div className="mx-auto w-[100%]">
                    <img  className="w-full" src="src/assets/content-3.svg" alt="" />
                </div>
                <div className="bg-[#3A4750E5] bg-opacity-90 text-center py-4 font-nokia-bold">
                    <h2 className="text-[#EA9215] text-2xl ">Devotional Study</h2>
                    <p className="text-[#fff] text-lg mb-4">Daily devotional text study.</p>
                    <button type="button" className=" text-[#fff] font-nokia-ultraLight border-2  border-white border-opacity-80 rounded-full px-4 text-sm">See More</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contents