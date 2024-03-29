import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash, FaEdit } from "react-icons/fa";
import {
  selectDevotion,
  deleteDevotion,
  setIsEditing,
} from "../../redux/devotionsSlice";
import { useGetDevotionsQuery } from "../../redux/api-slices/apiSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CurrentDevotional = ({ devotionToDisplay, showControls }) => {
  const { refetch } = useGetDevotionsQuery();
  const role = useSelector((state) => state.auth.role); // get the authentication token
  const dispatch = useDispatch();

  const handleDelete = async (id) => {
    await dispatch(deleteDevotion(id)); // dispatch delete action
    toast.success("Devotion deleted successfully!");
    refetch(); // refetch the devotions data
  };

  const startEditing = (devotion) => {
    dispatch(selectDevotion(devotion)); // dispatch select action
    dispatch(setIsEditing(true)); // dispatch startEditing action
  };

  return (
    <>
      <ToastContainer />
      <div className="h-auto border-2 shadow-lg rounded-2xl p-6">
        <div>
          <h1 className="font-nokia-bold  text-3xl text-accent-5 ">
            Daily Devotional
          </h1>
        </div>
        <div className="flex space-x-12">
          {/* Replace latestDevotion with devotionToDisplay */}
          {devotionToDisplay &&
          (devotionToDisplay.month !== "" || devotionToDisplay.day !== "") ? (
            <div className="rounded-xl w-[20%] h-full border-2 bg-[#fff] border-accent-5 mt-8 text-secondary-6">
              <div className="w-[95%] h-[95%] mx-auto  flex flex-col justify-center items-center border-2 bg-secondary-6  rounded-xl my-1 leading-none  py-6">
                <p className=" font-nokia-bold text-3xl text-[#fff]">
                  {devotionToDisplay.month}
                </p>
                <p className="text-5xl font-nokia-bold text-[#fff]">
                  {devotionToDisplay.day}
                </p>
              </div>
            </div>
          ) : (
            <div className="hidden rounded-xl w-[20%] h-full border-2 bg-[#fff] border-accent-5 mt-8 text-secondary-6">
              <div className="w-[90%] mx-auto h-[95%] flex flex-col justify-center items-center border-2 bg-secondary-6   rounded-xl my-1 leading-none py-6">
                <p className="font-nokia-bold text-3xl text-[#fff]">
                  {devotionToDisplay && devotionToDisplay.month}
                </p>
                <p className="font-nokia-bold text-5xl text-[#fff]">
                  {devotionToDisplay && devotionToDisplay.day}
                </p>
              </div>
            </div>
          )}

          <div className="font-nokia-bold flex flex-col w-[50%] space-y-2 mt-8">
            <div className="flex width: 100% space-x-12">
              <h1 className="text-4xl text-justify text-secondary-6">
                {devotionToDisplay && devotionToDisplay.title}
              </h1>
              {role === "Admin" && showControls && (
                <>
                  <FaTrash
                    className="text-gray-700 text-xl cursor-pointer self-center"
                    onClick={() =>
                      handleDelete(devotionToDisplay && devotionToDisplay._id)
                    }
                  />
                  <FaEdit
                    className="text-gray-700 text-xl cursor-pointer self-center "
                    onClick={() => startEditing(devotionToDisplay)}
                  />
                </>
              )}
            </div>
            <h2 className=" text-lg text-accent-5">
              {devotionToDisplay && devotionToDisplay.chapter}
            </h2>
            <p className=" text-1xl text-secondary-6">
              {devotionToDisplay && devotionToDisplay.verse}
            </p>

            {devotionToDisplay && devotionToDisplay.chapter !== "" ? (
              <hr className="border-accent-5" />
            ) : (
              <hr className="hidden border-secondary-6" />
            )}

            {devotionToDisplay &&
              devotionToDisplay.body.map((paragraph, paragraphIndex) => (
                <p
                  className=" font-nokia-bold text-sm text-justify text-secondary-6 space-y-3"
                  key={paragraphIndex}
                >
                  {paragraph}
                </p>
              ))}

            {devotionToDisplay && devotionToDisplay.prayer !== "" ? (
              <p className="font-nokia-bold text-1xl text-center border-2 border-accent-5 p-2 rounded text-accent-5">
                {devotionToDisplay.prayer}
              </p>
            ) : (
              <p className="hidden font-nokia-bold text-1xl text-center border-2 border-accent-5 p-2 rounded text-accent-5">
                {devotionToDisplay && devotionToDisplay.prayer}
              </p>
            )}
          </div>

          <div className="w-[25%] mt-12 flex flex-col space-y-6">
            <img
              src={`https://ezra-seminary-api.onrender.com/images/${
                devotionToDisplay && devotionToDisplay.image
              }`}
              alt="Devotion Image"
            />

            {devotionToDisplay && devotionToDisplay.previewUrl && (
              <img src={devotionToDisplay.previewUrl} alt="Preview" />
            )}

            {devotionToDisplay && devotionToDisplay.previewUrl !== "" ? (
              <img src="../../assets/Advert-Image.svg" alt="" />
            ) : (
              <img
                src="../../assets/Advert-Image.svg"
                alt=""
                className="hidden"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

CurrentDevotional.propTypes = {
  devotionToDisplay: PropTypes.object.isRequired,
  showControls: PropTypes.bool.isRequired,
};

export default CurrentDevotional;
