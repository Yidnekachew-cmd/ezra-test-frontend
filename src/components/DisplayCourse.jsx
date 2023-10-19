import { useEffect, useState } from "react";
import axios from "axios";

const DisplayCourse = () => {
  const [data, setData] = useState([]);

  //get all courses
  useEffect(() => {
    axios
      .get("/course/getall")
      .then((res) => {
        if (res.status === 200) {
          setData(res.data);
        } else {
          alert("Error");
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="bg-gray-100 w-2/3 p-3 rounded">
      {data.map((course, index) => {
        return (
          <div key={index}>
            <h1>{course.title[0].title1}</h1>
            <h1>{course.title[0].title2}</h1>
            <h1>{course.sub[0].sub1}</h1>
            <h1>{course.sub[0].sub2}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default DisplayCourse;
