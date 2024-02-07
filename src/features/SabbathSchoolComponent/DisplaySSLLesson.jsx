import { useParams, Link } from "react-router-dom";
import { useGetSSLOfDayLessonQuery } from "./../../services/SabbathSchoolApi";

function DisplaySSLLesson() {
  const { quarter, id, day } = useParams();
  console.log(quarter, id, day);
  const {
    data: lessonDetails,
    error,
    isLoading,
  } = useGetSSLOfDayLessonQuery({ path: quarter, id: id, day: day });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div className="container mx-auto px-4 w-[90%] md:w-[80%] py-12 font-nokia-bold ">
      <h1 className="text-3xl mb-6">Sabbath School Lessons</h1>
      <div className="">
        <div className="flex flex-col justify-between p-4">
          <div className="flex flex-col">
            <h2 className="text-xl mb-2 whitespace-normal">
              {lessonDetails.title}
            </h2>
            <p className="text-gray-600 overflow-hidden overflow-ellipsis">
              {lessonDetails.content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplaySSLLesson;
