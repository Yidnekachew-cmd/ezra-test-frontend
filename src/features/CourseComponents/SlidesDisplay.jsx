import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function SlidesDisplay() {
  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [unlockedIndex, setUnlockedIndex] = useState(0); // New state variable to track the unlocked index

  const { courseId, chapterId } = useParams(); // Note the two separate parameters

  //get all courses
  useEffect(() => {
    axios
      .get(`/course/get/${courseId}`) // Assuming you will change the endpoint as needed
      .then((res) => {
        // Now we need to find the specific chapter within the course
        const chapter = res.data.chapters.find(
          (chap) => chap._id === chapterId
        );
        if (chapter) {
          setData(chapter.slides);
        } else {
          console.log("Chapter not found");
        }
      })
      .catch((err) => console.log(err));
  }, [courseId, chapterId]);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= data.length) {
      newIndex = data.length - 1;
    }

    if (newIndex > unlockedIndex) {
      setUnlockedIndex(newIndex); // Update the unlocked index
    }

    setActiveIndex(newIndex);
  };

  // slide number
  const currentDataNumber = activeIndex + 1;
  const totalDataNumber = data.length;

  const isSlideUnlocked = (index) => {
    return index <= unlockedIndex; // Check if the slide is unlocked based on the unlocked index
  };

  return (
    <div className="flex justify-center items-center w-[80%] mx-auto">
      <div className="flex w-[100%] justify-center items-center h-screen ">
        <div className="flex flex-col justify-start items-center md:w-[30%] h-[80%] shadow-2xl  rounded-lg border-2 border-accent-5 ">
          {/* slide number */}
          <div className="w-[90%] mx-auto ">
            <div className="flex flex-col mt-6 border-accent-5 border-1">
              <h1 className=" font-Lato-Black pb-1">
                SLIDE {currentDataNumber}/{totalDataNumber}
              </h1>
            <hr className="border-accent-5 border-1 w-[100%] mx-auto"/>
            </div>
            <div className="flex flex-col  mt-[20px]">
              {data.map((slides, index) => {
                const unlocked = isSlideUnlocked(index);
                return (
                  <button
                    key={index}
                    className={`flex justify-between items-center text-sm font-nokia-bold border-b-2 border-accent-5 px-4 text-secondary-6 cursor-pointer py-2 ${
                      unlocked ? "text-black" : "text-gray-500"
                    }  ${index === activeIndex && "font-bold bg-[#FAE5C7]"}
                    `} // Locked slide to gray
                    onClick={() => {
                      updateIndex(index);
                    }}
                    disabled={!unlocked} // Disable the button if the slide is locked
                  >
                    <span>{slides.slide}</span>
                    {unlocked ? (
                      <span className="material-symbols-outlined text-orange-500 pl-4 text-xl">
                        check_circle
                      </span>
                    ) : (
                      <span className="material-symbols-outlined text-orange-500 pl-4 text-lg">
                        radio_button_unchecked
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
            <Link to={`/courses/get/${courseId}`}>
              <div className="flex justify-between items-center w-[100%] mx-auto mt-12">
                <button className="text-white font-nokia-bold bg-accent-6 hover:bg-accent-7 rounded-xl py-1 px-4">
                  ዘግተህ ውጣ
                </button>
                <button className="text-white font-bold text-3xl bg-accent-6 hover:bg-accent-7 rounded-[50%] w-[15%] mx-auto">
                  <span className="material-symbols-outlined ">arrow_left</span>
                </button>
              </div>
            </Link>
          </div>
        </div>
        {/* slides */}
        <div className=" md:w-[70%] justify-start items-center mx-auto h-[80%]  bg-chapter-img-1 bg-no-repeat bg-cover bg-center rounded-lg">
          <div className="flex flex-col w-[100%] ">
            <div className="w-[90%] pt-4 pb-2 flex justify-between mx-auto items-center">
              <h1 className="text-[#fff] text-sm font-Lato-Black">EZRA seminary</h1>
              <img src="/src/assets/close-icon.svg" className="w-[3%] z-40 cursor-pointer" alt="" />
            </div>
            <hr className="border-accent-5 border-1 w-[90%] mx-auto"/>
            {data.map((slides, index) => {
              if (index === activeIndex) {
                return (
                  <div
                    key={index}
                    className="flex flex-col justify-center py-36"
                  >
                    <h1 className="text-3xl text-[#fff] text-center font-nokia-bold">
                      {slides.slide}
                    </h1>
                    {slides.elements.map((element) => {
                      // Check the type of the element and render it accordingly
                      if (element.type === "title") {
                        return (
                          <li
                            key={element._id}
                            className="text-white text-2xl font-nokia-bold pl-20"
                          >
                            {element.value}
                          </li>
                        );
                      } else if (element.type === "sub") {
                        return (
                          <p
                            key={element._id}
                            className="text-white font-nokia-bold  w-[80%] self-center tracking-wide text-justify text-sm"
                          >
                            {element.value}
                          </p>
                        );
                      } else if (element.type === "img") {
                        return (
                          <img
                            key={element._id}
                            // src={`https://ezra-seminary-api.onrender.com/images/${element.value}`}
                            src={`http://localhost:5000/images/${element.value}`}
                            alt={element.id}
                            className="w-[15%]"
                          />
                        );
                      } else {
                        return null;
                      }
                    })}
                  </div>
                );
              } else {
                return null; // Hide the slide if it doesn't match the activeIndex
              }
            })}
            <hr className="border-accent-5  border-1 w-[90%] mx-auto z-50 "/>
            <button
              className={`text-white text-center font-nokia-bold mt-2 py-1 px-2 bg-accent-6 hover:bg-accent-7 w-[15%] rounded-3xl mx-auto text-2xl  ${
                activeIndex === data.length - 1 ? "hidden" : "block"
              }`} // hidding the next button for the last slide
              onClick={() => {
                updateIndex(activeIndex + 1);
              }}
            >
              ቀጥል
            </button>
          </div>
        </div>
      </div>
      ;
    </div>
  );
}

export default SlidesDisplay;
