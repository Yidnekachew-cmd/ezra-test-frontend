import { useState, useEffect } from "react";
import useCalculateLessonIndex from "./hooks/useCalculateLessonIndex";
import {
  useGetSSLOfDayQuery,
  useGetSSLOfQuarterQuery,
} from "./../../services/SabbathSchoolApi";
import DateConverter from "./DateConverter";
import { YoutubeLogo } from "@phosphor-icons/react";
function CurrentSSL() {
  const currentDate = new Date().toISOString().slice(0, 10);
  const [quarter, week] = useCalculateLessonIndex(currentDate);
  const [backgroundImage, setBackgroundImage] = useState("");

  const {
    data: lessonDetails,
    error: lessonError,
    isLoading: lessonIsLoading,
  } = useGetSSLOfDayQuery({ path: quarter, id: week });
  const {
    data: quarterDetails,
    error: quarterError,
    isLoading: quarterIsLoading,
  } = useGetSSLOfQuarterQuery(quarter);

  useEffect(() => {
    if (lessonDetails) {
      setBackgroundImage(lessonDetails.lesson.cover);
    }
  }, [lessonDetails]);

  if (lessonIsLoading || quarterIsLoading) return <div>Loading...</div>;
  if (lessonError) return <div>Error: {lessonError.message}</div>;
  if (quarterError) return <div>Error: {quarterError.message}</div>;
  if (!quarterDetails || !lessonDetails) return <div>Missing data...</div>;

  return (
    <div className="container mx-auto px-4 w-[90%] md:w-[80%] py-12 font-nokia-bold text-secondary-6">
      <div className="flex gap-4 w-full border border-accent-6 p-2 rounded-xl">
        <div
          className="flex rounded-md w-[35%] h-48 text-primary-1 p-4 items-end"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(234,146,21,0.8) 100%), url(${backgroundImage})`,
            backgroundSize: "cover",
          }}
        >
          <div className="">
            <p>የዚህ ሳምንት ትምህርት</p>
            {quarterDetails && quarterDetails.quarterly && (
              <div className="flex text-2xl text-primary-3">
                <DateConverter
                  gregorianDate={lessonDetails.lesson.start_date}
                />
                &nbsp;- &nbsp;
                <DateConverter gregorianDate={lessonDetails.lesson.end_date} />
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col w-[65%]">
          <div className="flex w-full justify-between">
            <div className="">
              <p className="text-lg text-accent-6">
                {quarterDetails.quarterly.title}
              </p>
              <p className="text-3xl text-secondary-6 leading-8">
                {lessonDetails.lesson.title}
              </p>
              <p className="text-xs text-accent-6 mt-2">
                {quarterDetails.quarterly.human_date}
              </p>
              <div className="border border-b-accent-6 my-2" />
            </div>
            <div className="flex flex-col gap-2 items-end">
              <button className="px-4 py-1 bg-accent-6 text-primary-1 rounded-full text-xs">
                ትምህርቱን ክፈት
              </button>
              <button className="px-2 border border-accent-6 text-accent-6 text-xs flex rounded-full items-center gap-2">
                Watch on YouTube <YoutubeLogo size={24} weight="fill" />
              </button>
            </div>
          </div>
          <p className="text-xs">{quarterDetails.quarterly.description}</p>
        </div>
      </div>
    </div>
  );
}

export default CurrentSSL;
