import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [openMenu, setOpenMenu] = useState("");
  const navigate = useNavigate();

  const handleMenuClick = (menuName) => {
    setOpenMenu((prevMenu) => (prevMenu === menuName ? "" : menuName));
  };

  const handleSubItemClick = (subItem) => {
    navigate(subItem); // Redirect to the selected sub-item's route
  };

  return (
    <div className="flex flex-col bg-gray-800 text-white h-screen">
      <div
        className="px-4 py-5 cursor-pointer hover:bg-accent-6"
        onClick={() => handleMenuClick("analytics")}
      >
        Analytics
        {openMenu === "analytics" && (
          <ul className="pl-4 mt-2 py-2">
            <li
              className="cursor-pointer hover:text-gray-300 mb-2"
              onClick={() => handleSubItemClick("")}
            >
              App Usage
            </li>
            <li
              className="cursor-pointer hover:text-gray-300 mb-2"
              onClick={() => handleSubItemClick("")}
            >
              Performace Dashboard
            </li>
            {/* Add more sub-items as needed */}
          </ul>
        )}
      </div>

      <div
        className="px-4 py-5 cursor-pointer hover:bg-accent-6"
        onClick={() => handleMenuClick("courses")}
      >
        Courses
        {openMenu === "courses" && (
          <ul className="pl-4 mt-2 py-2">
            <li
              className="cursor-pointer hover:text-gray-300 mb-2"
              onClick={() => handleSubItemClick("/admin/courses")}
            >
              Create Course
            </li>
            <li
              className="cursor-pointer hover:text-gray-300 mb-2"
              onClick={() => handleSubItemClick("/admin/courses/create/add")}
            >
              Manage Courses
            </li>
            {/* Add more sub-items as needed */}
          </ul>
        )}
      </div>
      <div
        className="px-4 py-5 cursor-pointer  hover:bg-accent-6"
        onClick={() => handleMenuClick("sabbathSchool")}
      >
        Sabbath School
        {openMenu === "sabbathSchool" && (
          <ul className="pl-4 mt-2 py-2">
            <li
              className="cursor-pointer hover:text-gray-300 mb-2"
              onClick={() => handleSubItemClick("/admin/sabbathSchool")}
            >
              Create Sabbath School
            </li>
            {/* Add more sub-items as needed */}
          </ul>
        )}
      </div>
      <div
        className="px-4 py-5 cursor-pointer  hover:bg-accent-6"
        onClick={() => handleMenuClick("devotion")}
      >
        Daily Devotional
        {openMenu === "devotion" && (
          <ul className="pl-4 mt-2 py-2">
            <li
              className="cursor-pointer hover:text-gray-300 mb-2"
              onClick={() => handleSubItemClick("/admin/devotion/create")}
            >
              Add Devotion
            </li>

            <li
              className="cursor-pointer hover:text-gray-300 mb-2"
              onClick={() => handleSubItemClick("/admin/devotion")}
            >
              Manage Devotion
            </li>
            {/* Add more sub-items as needed */}
          </ul>
        )}
      </div>
      <div
        className="px-4 py-5 cursor-pointer hover:bg-accent-6"
        onClick={() => handleMenuClick("users")}
      >
        Users
        {openMenu === "users" && (
          <ul className="pl-4 mt-2 py-2">
            <li
              className="cursor-pointer hover:text-gray-300 mb-2"
              onClick={() => handleSubItemClick("")}
            >
              Profile Page
            </li>
          </ul>
        )}
      </div>
      <div
        className="px-4 py-5 cursor-pointer hover:bg-accent-6"
        onClick={() => handleMenuClick("feedback")}
      >
        Feedback Survey
        {openMenu === "feedback" && (
          <ul className="pl-4 mt-2 py-2">
            <li
              className="cursor-pointer hover:text-gray-300 mb-2"
              onClick={() => handleSubItemClick("")}
            >
              Give us Feedback
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
