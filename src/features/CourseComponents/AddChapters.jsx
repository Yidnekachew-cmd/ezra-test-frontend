import { useState } from "react";

function AddChapters() {
  const [chapters, setChapters] = useState([]);

  const addChapter = () => {
    setChapters([...chapters, { chapter: "", slides: [] }]);
  };

  const updateChapter = (index, value) => {
    const newChapters = [...chapters];
    newChapters[index].chapter = value;
    setChapters(newChapters);
  };

  const addSlide = (chapterIndex) => {
    const newChapters = [...chapters];
    newChapters[chapterIndex].slides.push({ slide: "" });
    setChapters(newChapters);
  };

  const updateSlide = (chapterIndex, slideIndex, value) => {
    const newChapters = [...chapters];
    newChapters[chapterIndex].slides[slideIndex].slide = value;
    setChapters(newChapters);
  };
  console.log(chapters);

  return (
    <div className="bg-white w-[30%] p-6">
      <button
        className="flex justify-center items-center text-white bg-accent-6 hover:bg-accent-6 rounded-3xl mb-4 p-2"
        onClick={addChapter}
      >
        <span className="material-symbols-outlined">add</span>
        Add Chapter
      </button>
      {chapters.map((chapter, chapterIndex) => (
        <div key={chapterIndex}>
          <input
            type="text"
            name={`chapter-${chapterIndex}`}
            placeholder="Chapter Title"
            autoComplete="off"
            className="w-full text-lg font-bold py-2 px-8 my-2"
            value={chapter.chapter}
            onChange={(e) => updateChapter(chapterIndex, e.target.value)}
          />
          <div className="ml-14 pl-1 border-l-2 border-gray-300">
            {chapter.slides.map((slide, slideIndex) => (
              <div key={slideIndex} className="flex my-2">
                <input
                  type="text"
                  name={`slide-${chapterIndex}-${slideIndex}`}
                  placeholder="Slide Title"
                  autoComplete="off"
                  className="w-full text-sm font-bold px-3 py-1 my-2"
                  value={slide.slide}
                  onChange={(e) =>
                    updateSlide(chapterIndex, slideIndex, e.target.value)
                  }
                />
              </div>
            ))}
            <button
              className="flex justify-between items-center text-white bg-gray-200 hover:bg-gray-300 p-1 rounded-lg"
              onClick={() => addSlide(chapterIndex)}
            >
              <p className="text-accent-6 px-2">New Slide</p>
              <span className="material-symbols-outlined t flex justify-center text-xl font-bold bg-accent-6 hover:bg-accent-6 rounded-3xl">
                add
              </span>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AddChapters;
