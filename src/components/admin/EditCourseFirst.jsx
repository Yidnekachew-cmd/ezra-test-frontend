import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setTitle,
  setDescription,
  setImage,
  selectCourse,
} from "../../redux/courseSlice";
import PropTypes from "prop-types";
import { Button } from "../ui/button";

function EditCourseFirst({ setShowComponent }) {
  const dispatch = useDispatch();
  const { title, description } = useSelector((state) => state.course);
  const course = useSelector(selectCourse);

  const [imagePreviewUrl, setImagePreviewUrl] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[[0]];
    if (file) {
      dispatch(setImage(file)); // Dispatch the File object to the store
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        setImagePreviewUrl(fileReader.result);
      };
      fileReader.readAsDataURL(file); // Generate a URL for preview
    }
  };

  console.log(course);

  // navigate back to the previous route
  const handleGoBack = () => {
    setShowComponent(false);
  };

  return (
    <div className="w-[80%] mx-auto pt-9 font-nokia-bold">
      <h2 className="text-accent-6 text-2xl border-b border-primary-8 pb-1">
        Edit Course
      </h2>
      <div className="w-[60%] mx-auto my-10 flex flex-col gap-4 border border-accent-6 p-8 rounded-xl">
        <div className="relative col-span-12 mx-auto h-72 w-[100%]">
          {imagePreviewUrl && (
            <img
              src={imagePreviewUrl}
              alt="Preview"
              className="absolute inset-0 w-full h-full object-cover rounded-md"
            />
          )}

          <input
            type="file"
            className="relative z-10 w-[100%]
            lg:px-[30%] lg:py-[25%]
            md:px-[20%] md:py-[20%]
            file:mr-4 file:py-2 file:px-4
            file:rounded-md file:border-0
            file:text-sm file:font-semibold
            file:bg-accent-6 file:text-primary-1
            hover:file:bg-accent-7 rounded-xs bg-transparent
            focus:outline-none focus:border-accent-8 cursor-pointer"
            name="image"
            onChange={handleImageChange}
          />
          <div className="absolute inset-0 rounded-md bg-accent-8 opacity-60"></div>
        </div>
        <div className="col-span-12">
          <label className="block text-accent-6">Course Title</label>
          <input
            type="text"
            className="w-full px-3 py-2 text-accent-6 leading-tight border border-orange-300 rounded-md focus:outline-none focus:shadow-lg transition-all placeholder:text-secondary-2"
            name="title"
            placeholder="Untitled Course"
            autoComplete="off"
            value={title}
            onChange={(e) => dispatch(setTitle(e.target.value))}
          />
        </div>
        <div className="col-span-12">
          <label className="block text-accent-6">Description</label>
          <input
            type="text"
            className="w-full px-3 pt-2 pb-12 text-accent-6 leading-tight border border-orange-300 rounded-md focus:outline-none focus:shadow-lg transition-all placeholder:text-secondary-2"
            name="description"
            placeholder="Add a description"
            autoComplete="off"
            value={description}
            onChange={(e) => dispatch(setDescription(e.target.value))}
          />
        </div>
        <div className="col-span-12">
          <Button onClick={handleGoBack}>OK</Button>
        </div>
      </div>
    </div>
  );
}

EditCourseFirst.propTypes = {
  setShowComponent: PropTypes.func,
};

export default EditCourseFirst;
