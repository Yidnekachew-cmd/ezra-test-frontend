const PopularCourses = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 w-[80%] mx-auto">
        <h1 className="text-3xl font-nokia-bold  text-[#3A4750]">
            Popular Courses
        </h1>
        <hr className="border-[#EEA63F] border-1 w-[100%] pb-3" />
        <div className="flex flex-col w-[100%] justify-center items-center  mx-auto space-y-6 md:flex-row md:space-x-3 md:space-y-0" >
            <div className="flex flex-col w-[100%] space-y-6 md:space-y-0 md:w-[100%] md:flex-row md:space-x-2">
                <div className="mx-auto w-[100%] relative inline-block">
                    <img  className="w-full " src="src/assets/course-1.svg" alt="" />
                    <h2 className="text-[#fff] text-2xl absolute top-[80%] left-[30%] md:left-[40%] transform -translate-x-1/2 -translate-y-1/2 ">የክርስቶስ ትንሳኤ</h2>
                    <button type="button" className=" text-[#EA9215] font-nokia-ultraLight border-2  border-[#EA9215] border-opacity-80 rounded-full px-4 text-sm absolute top-[87%] md:top-[90%] left-[25%] transform -translate-x-1/2 -translate-y-1/2 ">ክፈት</button>
                </div>
                <div className="mx-auto w-[100%] relative inline-block">
                    <img  className="w-full" src="src/assets/course-2.svg" alt="" />
                    <h2 className="text-[#fff] text-2xl absolute top-[80%] left-[23%] md:left-[23%] transform -translate-x-1/2 -translate-y-1/2 ">ፀጋው</h2>
                    <button type="button" className=" text-[#EA9215] font-nokia-ultraLight border-2  border-[#EA9215] border-opacity-80 rounded-full px-4 text-sm absolute top-[87%] md:top-[90%] left-[25%] transform -translate-x-1/2 -translate-y-1/2 ">ክፈት</button>
                </div>
                  <div className="mx-auto w-[100%] relative inline-block">
                    <img  className="w-full" src="src/assets/course-3.svg" alt="" />
                    <h2 className="text-[#fff] text-2xl absolute top-[80%] left-[23%] md:left-[23%] transform -translate-x-1/2 -translate-y-1/2 ">ማደግ</h2>
                    <button type="button" className=" text-[#EA9215] font-nokia-ultraLight border-2  border-[#EA9215] border-opacity-80 rounded-full px-4 text-sm absolute top-[87%] md:top-[90%] left-[25%] transform -translate-x-1/2 -translate-y-1/2 ">ክፈት</button>
                </div>
                <div className="mx-auto w-[100%] relative inline-block">
                    <img  className="w-full" src="src/assets/course-4.svg" alt="" />
                    <h2 className="text-[#fff] text-2xl absolute top-[80%] left-[30%] md:left-[30%] transform -translate-x-1/2 -translate-y-1/2 ">የፀሎት ያለህ</h2>
                    <button type="button" className=" text-[#EA9215] font-nokia-ultraLight border-2  border-[#EA9215] border-opacity-80 rounded-full px-4 text-sm absolute top-[87%] md:top-[90%] left-[25%] transform -translate-x-1/2 -translate-y-1/2 ">ክፈት</button>
                </div>
            </div>
            
            
        </div>
    </div>
  )
}

export default PopularCourses