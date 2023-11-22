// import SubTitle from "./SubTitle";
import ImgMap from "./ImgMap";
import SlideShow from "./SlideShow";
import PropTypes from "prop-types";

const AddCourse = ({courseData}) => {
  return (
    <div className="container mt-12">
      <ImgMap /> {/* This is the data displayed that comes from backend */}
      <SlideShow courseData={courseData} /> {/* This is the form to add courses */}
    </div>
  );
};

AddCourse.propTypes = {
  courseData: PropTypes.object.isRequired,
}

export default AddCourse;
