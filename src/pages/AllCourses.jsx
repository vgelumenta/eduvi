import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Button,
  Img,
  Input,
  List,
  SelectBox,
  Text,
  Header,
  DisplayCourses,
  Footer,
} from "index";
import Courses from "../data/Courses.json";

const sortbyOptionsList = [
  { label: "Default", value: "default" },
  { label: "Name", value: "name" },
  { label: "Price Low to High", value: "priceLowToHigh" },
  { label: "Price High to Low", value: "priceHighToLow" },
];

const AllCoursesPage = () => {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("default");

  const filteredCourses = Courses.filter((Courses) =>
    Courses.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortCourses = (option) => {
    switch (option) {
      case "name":
        return [...filteredCourses].sort((a, b) =>
          a.title.localeCompare(b.title)
        );
      case "priceLowToHigh":
        return [...filteredCourses].sort((a, b) => a.price - b.price);
      case "priceHighToLow":
        return [...filteredCourses].sort((a, b) => b.price - a.price);
      default:
        return [...filteredCourses];
    }
  };

  const sortedCourses = sortCourses(sortOption);
  console.log("sortOption:", sortOption);
  console.log("filteredCourses:", filteredCourses);
  console.log("sortedCourses:", sortedCourses);

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-metropolis items-center justify-start mx-auto p-7 sm:px-5 w-full">
        <div className="flex flex-col gap-[30px] items-center justify-start max-w-7xl mx-auto md:px-5 w-full">
          <Header className="flex sm:flex-col flex-row sm:gap-5 items-center justify-center w-full" />
          <div className="bg-deep_purple-50 flex md:flex-col flex-row md:gap-5 items-start justify-start p-[17px] rounded-[20px] w-full">
            <Text
              className="md:ml-[0] ml-[13px] md:mt-0 mt-0.5 text-base text-gray-900_66 tracking-[0.48px]"
              size="txtMetropolisMedium16"
            >
              <span className="text-deep_purple-A200 font-metropolis text-left font-medium"></span>
            </Text>
            <Text
              className="leading-[50.00px] md:mt-0 mt-[68px] sm:text-[35px] md:text-[41px] text-[45px] text-gray-900"
              size="txtMetropolisSemiBold45"
            >
              <>
                Eduvi Courses
                <br />
                For All Standards
              </>
            </Text>
            <div className="font-airbnbcerealapp md:h-[233px] h-[234px] sm:h-[238px] md:ml-[0] ml-[148px] relative w-[35%] md:w-full">
              <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-full">
                <div className="flex flex-col md:gap-10 gap-[95px] justify-start w-full">
                  <div className="flex flex-col items-center justify-start md:ml-[0] ml-[30px] rounded-[20px] w-[32%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                      <List
                        className="flex flex-col gap-px items-center w-full"
                        orientation="vertical"
                      >
                        <div className="flex flex-1 flex-row items-center justify-between my-0 w-full">
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                        </div>
                        <div className="flex flex-1 flex-row items-center justify-between my-0 w-full">
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                        </div>
                        <div className="flex flex-1 flex-row items-center justify-between my-0 w-full">
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                        </div>
                        <div className="flex flex-1 flex-row items-center justify-between my-0 w-full">
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                        </div>
                        <div className="flex flex-1 flex-row items-center justify-between my-0 w-full">
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                        </div>
                        <div className="flex flex-1 flex-row items-center justify-between my-0 w-full">
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                        </div>
                        <div className="flex flex-1 flex-row items-center justify-between my-0 w-full">
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14"
                          >
                            +
                          </Text>
                        </div>
                      </List>
                    </div>
                  </div>
                  <div className="backdrop-opacity-[0.5] bg-black-900_cc blur-[90.00px] h-4 rounded-[215px] w-full"></div>
                </div>
              </div>
              <Img
                className="absolute h-[233px] inset-[0] justify-center m-auto object-cover rounded-[20px] w-[97%]"
                src="src/assets/images/img_image_233x416.png"
                alt="image_One"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row flex-wrap font-inter gap-5 items-center justify-start max-w-7xl mt-10 mx-auto md:px-5 w-full">
          <Button
            className="cursor-pointer font-medium min-w-[148px] rounded-[10px] text-base text-center"
            color="white_A700"
            size="md"
          >
            All Courses
          </Button>
          <Button
            className="cursor-pointer font-medium min-w-[152px] rounded-[10px] text-base text-center"
            color="white_A700"
            size="md"
          >
            Kindergarten
          </Button>
          <Button
            className="cursor-pointer font-medium min-w-[152px] rounded-[10px] text-base text-center"
            color="deep_orange_400"
            size="md"
          >
            High School
          </Button>
          <Button
            className="cursor-pointer font-medium min-w-[119px] rounded-[10px] text-base text-center"
            color="white_A700"
            size="md"
          >
            College
          </Button>
          <Button
            className="cursor-pointer font-medium min-w-[137px] rounded-[10px] text-base text-center"
            color="white_A700"
            size="md"
          >
            Computer
          </Button>
          <Button
            className="cursor-pointer font-medium min-w-[121px] rounded-[10px] text-base text-center"
            color="white_A700"
            size="md"
          >
            Science
          </Button>
          <Button
            className="cursor-pointer font-medium min-w-[151px] rounded-[10px] text-base text-center"
            color="white_A700"
            size="md"
          >
            Engineering
          </Button>
          <Button
            className="!text-deep_purple-A200 cursor-pointer font-medium min-w-[160px] rounded-[10px] text-base text-center"
            color="white_A700"
            size="md"
          >
            More Courses
          </Button>
        </div>
        <div className="flex flex-col font-metropolis items-center justify-start max-w-7xl mt-[38px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[31px] items-start justify-start w-full">
            <Text
              className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
              size="txtMetropolisSemiBold30"
            >
              Standard Classes
            </Text>
            <div className="gap-10 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
              <div
                className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col items-center justify-center p-[15px] rounded-[15px] hover:shadow-bs1 hover:w-full w-full"
                onClick={() => navigate("/CourseDetails")}
              >
                <Img
                  className="h-[50px] mt-[15px] w-[50px]"
                  src="src/assets/images/img_download.svg"
                  alt="user"
                />
                <Text
                  className="mt-[18px] sm:text-[21px] md:text-[23px] text-[25px] text-center text-gray-900"
                  size="txtMetropolisSemiBold25"
                >
                  Standard One
                </Text>
                <Text
                  className="leading-[30.00px] mt-4 text-base text-center text-gray-700 w-full"
                  size="txtMetropolisRegular16Gray700"
                >
                  Standard 1 is a foundation Standard that reflects 7 important
                  concepts...
                </Text>
                <Button
                  className="cursor-pointer font-inter font-medium mb-[15px] min-w-[162px] mt-[25px] rounded-[5px] text-base text-center"
                  shape="round"
                  variant="outline"
                  onClick={() => navigate("/CourseDetails")}
                >
                  Class Details
                </Button>
              </div>
              <div
                className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col items-center justify-center p-[15px] rounded-[15px] hover:shadow-bs1 hover:w-full w-full"
                onClick={() => navigate("/CourseDetails")}
              >
                <Img
                  className="h-[50px] mt-[15px] w-[50px]"
                  src="src/assets/images/img_download_gray_800.svg"
                  alt="profile"
                />
                <Text
                  className="mt-[18px] sm:text-[21px] md:text-[23px] text-[25px] text-center text-gray-900"
                  size="txtMetropolisSemiBold25"
                >
                  Standard Two
                </Text>
                <Text
                  className="leading-[30.00px] mt-4 text-base text-center text-gray-700 w-full"
                  size="txtMetropolisRegular16Gray700"
                >
                  Standard 2 builds on the foundations of Standard 1 and
                  includes requirements...
                </Text>
                <Button
                  className="cursor-pointer font-inter font-medium mb-[15px] min-w-[162px] mt-[25px] rounded-[5px] text-base text-center"
                  shape="round"
                  variant="outline"
                  onClick={() => navigate("/CourseDetails")}
                >
                  Class Details
                </Button>
              </div>
              <div
                className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col items-center justify-center p-[15px] rounded-[15px] hover:shadow-bs1 shadow-bs1 hover:w-full w-full"
                onClick={() => navigate("/CourseDetails")}
              >
                <Img
                  className="h-[50px] mt-[15px] w-[50px]"
                  src="src/assets/images/img_whatsapp.svg"
                  alt="profile"
                />
                <Text
                  className="mt-[18px] sm:text-[21px] md:text-[23px] text-[25px] text-center text-gray-900"
                  size="txtMetropolisSemiBold25"
                >
                  Standard Three
                </Text>
                <Text
                  className="leading-[30.00px] mt-4 text-base text-center text-gray-700 w-full"
                  size="txtMetropolisRegular16Gray700"
                >
                  Standard 3 of the Aged Care Quality Standards applies to all
                  services delivering personal...
                </Text>
                <Button
                  className="cursor-pointer font-inter font-medium mb-[15px] min-w-[162px] mt-[25px] rounded-[5px] text-base text-center"
                  shape="round"
                  onClick={() => navigate("/CourseDetails")}
                >
                  Class Details
                </Button>
              </div>
              <div
                className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col items-center justify-center p-[15px] rounded-[15px] hover:shadow-bs1 hover:w-full w-full"
                onClick={() => navigate("/CourseDetails")}
              >
                <Img
                  className="h-[50px] mt-[15px] w-[50px]"
                  src="src/assets/images/img_rewind.svg"
                  alt="forward"
                />
                <Text
                  className="mt-[18px] sm:text-[21px] md:text-[23px] text-[25px] text-center text-gray-900"
                  size="txtMetropolisSemiBold25"
                >
                  Standard Four
                </Text>
                <Text
                  className="leading-[30.00px] mt-4 text-base text-center text-gray-700 w-full"
                  size="txtMetropolisRegular16Gray700"
                >
                  Standard 4 of the Aged Care Quality Standards focuses on
                  services and supports...
                </Text>
                <Button
                  className="cursor-pointer font-inter font-medium mb-[15px] min-w-[162px] mt-[25px] rounded-[5px] text-base text-center"
                  shape="round"
                  variant="outline"
                  onClick={() => navigate("/CourseDetails")}
                >
                  Class Details
                </Button>
              </div>
              <div
                className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col items-center justify-center p-[15px] rounded-[15px] hover:shadow-bs1 hover:w-full w-full"
                onClick={() => navigate("/CourseDetails")}
              >
                <Img
                  className="h-[50px] mt-[15px] w-[50px]"
                  src="src/assets/images/img_music.svg"
                  alt="group"
                />
                <Text
                  className="mt-[18px] sm:text-[21px] md:text-[23px] text-[25px] text-center text-gray-900"
                  size="txtMetropolisSemiBold25"
                >
                  Standard Five
                </Text>
                <Text
                  className="leading-[30.00px] mt-4 text-base text-center text-gray-700 w-full"
                  size="txtMetropolisRegular16Gray700"
                >
                  Standard 5 Learning Resources. Learning Resources ensure that
                  the school has the...
                </Text>
                <Button
                  className="cursor-pointer font-inter font-medium mb-[15px] min-w-[162px] mt-[25px] rounded-[5px] text-base text-center"
                  shape="round"
                  variant="outline"
                  onClick={() => navigate("/CourseDetails")}
                >
                  Class Details
                </Button>
              </div>
              <div
                className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col items-center justify-center p-[15px] rounded-[15px] hover:shadow-bs1 hover:w-full w-full"
                onClick={() => navigate("/CourseDetails")}
              >
                <Img
                  className="h-[50px] mt-[15px] w-[50px]"
                  src="src/assets/images/img_volume.svg"
                  alt="user"
                />
                <Text
                  className="mt-[18px] sm:text-[21px] md:text-[23px] text-[25px] text-center text-gray-900"
                  size="txtMetropolisSemiBold25"
                >
                  Standard Six
                </Text>
                <Text
                  className="leading-[30.00px] mt-4 text-base text-center text-gray-700 w-full"
                  size="txtMetropolisRegular16Gray700"
                >
                  Standard 6 requires an organisation to have a system to
                  resolve complaints...
                </Text>
                <Button
                  className="cursor-pointer font-inter font-medium mb-[15px] min-w-[162px] mt-[25px] rounded-[5px] text-base text-center"
                  shape="round"
                  variant="outline"
                  onClick={() => navigate("/CourseDetails")}
                >
                  Class Details
                </Button>
              </div>
              <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col items-center justify-center p-[15px] rounded-[15px] hover:shadow-bs1 hover:w-full w-full">
                <Img
                  className="h-[50px] mt-[15px] w-[50px]"
                  src="src/assets/images/img_arrowdown.svg"
                  alt="cursor"
                />
                <Text
                  className="mt-[18px] sm:text-[21px] md:text-[23px] text-[25px] text-center text-gray-900"
                  size="txtMetropolisSemiBold25"
                >
                  Standard Seven
                </Text>
                <Text
                  className="leading-[30.00px] mt-4 text-base text-center text-gray-700 w-full"
                  size="txtMetropolisRegular16Gray700"
                >
                  Standard 7 Blood Management mandates that leaders of health
                  service organisations...
                </Text>
                <Button
                  className="cursor-pointer font-inter font-medium mb-[15px] min-w-[162px] mt-[25px] rounded-[5px] text-base text-center"
                  shape="round"
                  variant="outline"
                  onClick={() => navigate("/CourseDetails")}
                >
                  Class Details
                </Button>
              </div>
              <div
                className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col items-center justify-center p-[15px] rounded-[15px] hover:shadow-bs1 hover:w-full w-full"
                onClick={() => navigate("/CourseDetails")}
              >
                <Img
                  className="h-[50px] mt-[15px] w-[50px]"
                  src="src/assets/images/img_info.svg"
                  alt="settings"
                />
                <Text
                  className="mt-5 sm:text-[21px] md:text-[23px] text-[25px] text-center text-gray-900"
                  size="txtMetropolisSemiBold25"
                >
                  Standard Eight
                </Text>
                <Text
                  className="leading-[30.00px] mt-3.5 text-base text-center text-gray-700 w-full"
                  size="txtMetropolisRegular16Gray700"
                >
                  Standard 8 Course from NCERT Solutions help students to
                  understand...
                </Text>
                <Button
                  className="cursor-pointer font-inter font-medium mb-[15px] min-w-[162px] mt-[25px] rounded-[5px] text-base text-center"
                  shape="round"
                  variant="outline"
                  onClick={() => navigate("/CourseDetails")}
                >
                  Class Details
                </Button>
              </div>
              <div
                className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col items-center justify-center p-[15px] rounded-[15px] hover:shadow-bs1 hover:w-full w-full"
                onClick={() => navigate("/CourseDetails")}
              >
                <Img
                  className="h-[50px] mt-[15px] w-[50px]"
                  src="src/assets/images/img_volume_red_500.svg"
                  alt="user"
                />
                <Text
                  className="mt-[18px] sm:text-[21px] md:text-[23px] text-[25px] text-center text-gray-900"
                  size="txtMetropolisSemiBold25"
                >
                  Standard Nine
                </Text>
                <Text
                  className="leading-[30.00px] mt-4 text-base text-center text-gray-700 w-full"
                  size="txtMetropolisRegular16Gray700"
                >
                  Standard 5 Learning Resources. Learning Resources ensure that
                  the school has the...
                </Text>
                <Button
                  className="cursor-pointer font-inter font-medium mb-[15px] min-w-[162px] mt-[25px] rounded-[5px] text-base text-center"
                  shape="round"
                  variant="outline"
                  onClick={() => navigate("/CourseDetails")}
                >
                  Class Details
                </Button>
              </div>
              <div
                className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col items-center justify-center p-[15px] rounded-[15px] hover:shadow-bs1 hover:w-full w-full"
                onClick={() => navigate("/CourseDetails")}
              >
                <Img
                  className="h-[50px] mt-[15px] w-[50px]"
                  src="src/assets/images/img_group.svg"
                  alt="contrast"
                />
                <Text
                  className="mt-[18px] sm:text-[21px] md:text-[23px] text-[25px] text-center text-gray-900"
                  size="txtMetropolisSemiBold25"
                >
                  O- Level
                </Text>
                <Text
                  className="leading-[30.00px] mt-4 text-base text-center text-gray-700 w-full"
                  size="txtMetropolisRegular16Gray700"
                >
                  Standard 6 requires an organisation to have a system to
                  resolve complaints...
                </Text>
                <Button
                  className="cursor-pointer font-inter font-medium mb-[15px] min-w-[162px] mt-[25px] rounded-[5px] text-base text-center"
                  shape="round"
                  variant="outline"
                  onClick={() => navigate("/CourseDetails")}
                >
                  Class Details
                </Button>
              </div>
              <div
                className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col items-center justify-center p-[15px] rounded-[15px] hover:shadow-bs1 hover:w-full w-full"
                onClick={() => navigate("/CourseDetails")}
              >
                <Img
                  className="h-[50px] mt-[15px] w-[50px]"
                  src="src/assets/images/img_arrowup.svg"
                  alt="group"
                />
                <Text
                  className="mt-[18px] sm:text-[21px] md:text-[23px] text-[25px] text-center text-gray-900"
                  size="txtMetropolisSemiBold25"
                >
                  A- Level
                </Text>
                <Text
                  className="leading-[30.00px] mt-4 text-base text-center text-gray-700 w-full"
                  size="txtMetropolisRegular16Gray700"
                >
                  Standard 6 requires an organisation to have a system to
                  resolve complaints...
                </Text>
                <Button
                  className="cursor-pointer font-inter font-medium mb-[15px] min-w-[162px] mt-[25px] rounded-[5px] text-base text-center"
                  shape="round"
                  variant="outline"
                  onClick={() => navigate("/CourseDetails")}
                >
                  Class Details
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-metropolis items-center justify-start max-w-7xl mt-[50px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-[19px] items-start justify-start w-full">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                  size="txtMetropolisSemiBold30"
                >
                  Other Courses For High School
                </Text>
                <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
                  <div className="bg-white-A700 flex md:flex-1 flex-row sm:gap-10 items-center justify-between p-[7px] rounded-[10px] w-[66%] md:w-full">
                    <Input
                      name="search"
                      placeholder="Search Courses"
                      className="ml-[13px] text-base text-gray-700_99 text-left w-full"
                      wrapClassName="flex sm:flex-1 rounded-[10px] sm:w-full"
                      type="text"
                      value={searchTerm}
                      onChange={(value) => setSearchTerm(value)}
                      color="white_A700"
                    ></Input>
                    <Button
                      className="cursor-pointer flex items-center justify-center min-w-[143px] rounded-[10px]"
                      suffix={
                        <Img
                          className="h-6 my-[19px]"
                          src="src/assets/images/img_search.svg"
                          alt="search"
                        />
                      }
                      size="xs"
                    >
                      <div className="font-inter font-medium text-base text-center">
                        Search
                      </div>
                    </Button>
                  </div>
                  <SelectBox
                    className="sm:flex-1 font-medium leading-[normal] text-base text-left w-[32%]"
                    placeholderClassName="text-gray-700_99"
                    indicator={
                      <Img
                        className="h-6 mr-[0] w-6"
                        src="src/assets/images/img_arrowdown_deep_purple_a200.svg"
                        alt="arrow_down"
                      />
                    }
                    isMulti={false}
                    name="sortby"
                    isSearchable={false}
                    shape="round"
                    color="white_A700"
                    size="xs"
                    options={sortbyOptionsList}
                    value={
                      sortbyOptionsList.find(
                        (option) => option.value === sortOption
                      ) || {
                        label: "Default",
                        value: "default",
                      }
                    }
                    onChange={(selectedOption) =>
                      setSortOption(selectedOption?.value)
                    }
                  />
                </div>
                <div
                  className="gap-10 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-start p-[15px] rounded-[10px]  w-full"
                  onClick={() => navigate("/CourseDetails")}
                >
                  {sortedCourses.map((Courses) => (
                    <div
                      className="col-xs-12 col-sm-6 col-md-4 col-lg-3"
                      key={Courses.id}
                    >
                      <DisplayCourses {...Courses} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AllCoursesPage;
