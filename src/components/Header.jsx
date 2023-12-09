import React from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

import { Img, Text } from "index";

const Header = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <header className={`sticky-header ${props.className}`}>
        <div className="flex flex-row gap-1.5 items-center justify-center w-[9%] md:w-full">
          <div
            className="bg-deep_orange-400 flex flex-col items-center justify-start p-[3px] rounded-[5px] w-[22%]"
            onClick={() => navigate("/")}
          >
            <Img
              className="h-[18px] my-[3px] w-[18px]"
              src="src/assets/images/img_openbook1.svg"
              alt="openbookOne"
            />
          </div>
          <Text
            className="text-3xl sm:text-[26px] md:text-[28px] hover:text-deep_purple-A200 text-gray-900"
            size="txtMetropolisSemiBold30"
            onClick={() => navigate("/")}
          >
            Eduvi
          </Text>
        </div>
        <ul className="flex md:flex-col flex-row md:hidden items-center justify-center sm:ml-[0] ml-[100px] sm:mt-0 my-[3px] w-[56%] md:w-full common-row-list">
          <li>
            <div className="flex flex-row items-center justify-center ml-10">
              <Text
                className="text-lg hover:text-deep_purple-A200 text-gray-900 text-right font-bold"
                size="txtMetropolisMedium16Gray900"
                onClick={() => navigate("/AllCourses")}
              >
                Courses
              </Text>
            </div>
          </li>
          <li>
            <div className="flex flex-row items-center justify-center ml-10">
              <Text
                className="text-lg hover:text-deep_purple-A200 text-gray-900 text-right font-bold"
                size="txtMetropolisMedium16Gray900"
                onClick={() => navigate("/AllMentors")}
              >
                Mentors
              </Text>
            </div>
          </li>
          <li>
            <div className="flex flex-row items-center justify-center ml-10">
              <Text
                className="text-lg hover:text-deep_purple-A200 text-gray-900 text-right font-bold"
                size="txtMetropolisMedium16Gray900"
                onClick={() => navigate("/JoinTeacher")}
              >
                Join Teacher
              </Text>
            </div>
          </li>
        </ul>
        <div className="flex flex-row gap-2.5 items-center justify-center sm:ml-[0] ml-[90px] w-[8%] md:w-full">
          <Text
            className="text-lg text-gray-900 hover:text-deep_purple-A200 text-right font-bold"
            size="txtMetropolisMedium16Gray900"
            onClick={() => navigate("/Shop")}
          >
            Shop
          </Text>
          <Img
            className="h-[30px] w-[30px]"
            src="src/assets/images/img_shoppingbag24.svg"
            alt="shoppingbagTwentyFour"
            onClick={() => navigate("/Shop")}
          />
        </div>
        <div className="flex flex-row gap-2.5 items-center justify-center sm:ml-[0] ml-[30px] w-[11%] md:w-full">
          <Text
            className="text-base text-gray-900 hover:text-deep_purple-A200 text-right font-bold"
            size="txtMetropolisMedium16Gray900"
          >
            My Account
          </Text>
          <Img
            className="h-[30px] w-[30px]"
            src="src/assets/images/img_profile24outline.svg"
            alt="profile24outlin"
          />
        </div>
      </header>
      <br></br>
    </>
  );
};

Header.defaultProps = {};

export { Header };