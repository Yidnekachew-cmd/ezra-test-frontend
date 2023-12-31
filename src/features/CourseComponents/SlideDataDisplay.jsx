import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { selectSlides } from "../../redux/courseSlice";

function SlideDataDisplay({ selectedSlideIndex }) {
  const slides = useSelector((state) =>
    selectSlides(state, selectedSlideIndex.chapter)
  );
  const selectedSlide = slides[selectedSlideIndex.slide];

  const [imagePreviewUrl, setImagePreviewUrl] = useState("");
  useEffect(() => {
    if (selectedSlide && selectedSlide.elements) {
      const imgElement = selectedSlide.elements.find((e) => e.type === "img");
      if (imgElement && imgElement.value instanceof File) {
        const objectUrl = URL.createObjectURL(imgElement.value);
        setImagePreviewUrl(objectUrl);

        // Clean up the URL when the component unmounts
        return () => URL.revokeObjectURL(objectUrl);
      }
    }
  }, [selectedSlide]);

  return (
    <div className="mr-16 h-[80%]  bg-chapter-img-1 bg-no-repeat bg-cover bg-center rounded-lg">
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="w-[90%] pt-4 pb-2 flex justify-between mx-auto items-center">
            <h1 className="text-[#fff] text-sm font-Lato-Black">
              EZRA seminary
            </h1>
            <img
              src="../assets/close-icon.svg"
              className="w-[3%] z-40 cursor-pointer"
              alt=""
            />
          </div>
          <hr className="border-accent-5 border-1 w-[90%] mx-auto" />
        </div>
        {selectedSlide && selectedSlide.elements && (
          <div className="flex flex-col justify-center flex-grow p-20">
            <ul>
              {selectedSlide.elements.map((element) => {
                let elementComponent = null;

                if (element.type === "title") {
                  elementComponent = (
                    <li
                      key={element.type}
                      className="text-white text-3xl font-nokia-bold text-center"
                    >
                      {element.value}
                    </li>
                  );
                } else if (element.type === "sub") {
                  elementComponent = (
                    <p
                      key={element.type}
                      className="text-white font-nokia-bold w-[100%] self-center tracking-wide text-2xl text-center"
                    >
                      {element.value}
                    </p>
                  );
                } else if (element.type === "text") {
                  elementComponent = (
                    <p
                      key={element.type}
                      className="text-white font-nokia-bold w-[100%] self-center tracking-wide text-justify text-lg mt-2"
                    >
                      {element.value}
                    </p>
                  );
                } else if (element.type === "list") {
                  const listItemsComponent = element.value.map(
                    (listItem, index) => (
                      <li
                        key={index}
                        className="text-white font-nokia-bold w-[100%] tracking-wide text-lg"
                      >
                        {listItem}
                      </li>
                    )
                  );

                  elementComponent = (
                    <div className="flex flex-col ml-8">
                      <ul className="list-disc mt-2">{listItemsComponent}</ul>
                    </div>
                  );
                } else if (element.type === "img") {
                  elementComponent = (
                    <img
                      key={element.type}
                      src={imagePreviewUrl}
                      alt={element.value.name}
                      className="w-[40%] mx-auto"
                    />
                  );
                }

                return elementComponent;
              })}
            </ul>
          </div>
        )}
        <div className="mb-4 w-[100%] flex flex-col items-center justify-center">
          <hr className="border-accent-5  border-1 w-[90%] mx-auto z-50 " />
          <button className="text-white text-center font-nokia-bold mt-2 py-1 px-2 bg-accent-6 hover:bg-accent-7 w-[15%] rounded-3xl text-2xl transition-all">
            ቀጥል
          </button>
        </div>
      </div>
    </div>
  );
}

SlideDataDisplay.propTypes = {
  selectedSlideIndex: PropTypes.shape({
    chapter: PropTypes.number.isRequired,
    slide: PropTypes.number.isRequired,
  }).isRequired,
};

export default SlideDataDisplay;
