import React from "react";
import "../styles/index.css";
import { useNavigate } from "react-router-dom";
import { Button, Img, Line, List, SelectBox, Text, Header, Footer } from "index";

const coursesOneOptionsList = [
  { label: "Kindergarten", value: "option1" },
  { label: "Highschool", value: "option2" },
  { label: "Colege", value: "option3" },
];

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-metropolis sm:gap-10 md:gap-10 gap-[150px] items-center justify-start mx-auto pb-[62px] w-full">
        <div
          className="common-pointer bg-cover bg-no-repeat flex flex-col h-[833px] items-center justify-start pt-7 sm:px-5 px-7 w-full"
          style={{ backgroundImage: "url('src/assets/images/img_header.svg')" }}
        >
          <div className="flex flex-col md:gap-10 gap-[74px] items-center justify-start max-w-[1317px] mx-auto md:px-5 w-full">
            <Header className="flex sm:flex-col flex-row sm:gap-5 items-center justify-center w-full" />
            <div className="flex md:flex-col flex-row md:gap-[42px] items-start justify-between w-full">
              <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[57px] w-[47%] md:w-full">
                <Button
                  className="!text-deep_orange-400 cursor-pointer font-medium leading-[normal] min-w-[239px] rounded-[10px] text-center text-xl"
                  color="white_A700"
                  size="lg"
                ></Button>
                <Text
                  className="leading-[75.00px] mt-[15px] md:text-5xl text-[65px] text-gray-900"
                  size="txtMetropolisBold65"
                >
                  <>
                    Grow up your skills
                    <br />
                    by online courses
                    <br />
                    with Eduvi
                  </>
                </Text>
                <Text
                  className="leading-[30.00px] mt-[30px] text-base text-gray-700 w-full"
                  size="txtMetropolisRegular16"
                >
                  Eduvi is a Global training provider based across the UK that
                  specialises in accredited and bespoke training courses. We
                  crush the barriers togetting a degree.
                </Text>
              </div>
              <div className="md:h-[669px] h-[699px] relative w-[51%] md:w-full">
                <div className="absolute bottom-[0] h-[669px] inset-x-[0] mx-auto w-[89%] sm:w-full">
                  <Img
                    className="absolute h-[563px] inset-x-[0] mx-auto top-[1%]"
                    src="src/assets/images/img_vector1.svg"
                    alt="vectorOne"
                  />
                  <div
                    className="absolute bg-cover bg-no-repeat flex flex-col h-full inset-y-[0] items-center justify-start my-auto md:px-10 sm:px-5 px-[50px] right-[0] rounded-[30px] w-[88%]"
                    style={{ backgroundImage: "url('src/assets/images/img_group3.png')" }}
                  >
                    <div className="h-[669px] relative w-full">
                      <Img
                        className="h-[669px] m-auto object-cover w-full"
                        src="src/assets/images/img_schoolboyhold.png"
                        alt="schoolboyhold"
                      />
                      <div className="absolute h-[669px] inset-[0] justify-center m-auto w-full">
                        <Img
                          className="h-[669px] m-auto object-cover w-full"
                          src="src/assets/images/img_schoolboyhold_669x418.png"
                          alt="schoolboyhold_One"
                        />
                        <Img
                          className="absolute h-20 right-[1%] top-[4%] w-20"
                          src="src/assets/images/img_favorite.svg"
                          alt="favorite"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <Img
                  className="absolute h-20 inset-y-[0] left-[11%] my-auto w-20"
                  src="src/assets/images/img_close.svg"
                  alt="close"
                />
                <Img
                  className="absolute h-20 left-[0] top-[0] w-20"
                  src="src/assets/images/img_close_white_a700.svg"
                  alt="close_One"
                />
                <Img
                  className="absolute bottom-[9%] h-20 right-[0] w-20"
                  src="src/assets/images/img_close_white_a700_80x80.svg"
                  alt="close_Two"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-airbnbcerealapp items-center justify-start max-w-[1136px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-10 items-start justify-start w-full">
            <div className="h-[980px] relative w-full">
              <div className="flex flex-col items-center justify-start mb-[-41.32px] ml-[110px] w-[74%] z-[1]">
                <Text
                  className="leading-[55.00px] sm:text-[35px] md:text-[41px] text-[45px] text-center text-gray-900"
                  size="txtMetropolisBold45"
                >
                  <>
                    High quality video, audio
                    <br />& live classes
                  </>
                </Text>
                <Text
                  className="leading-[30.00px] mt-5 text-base text-center text-gray-700"
                  size="txtMetropolisRegular16"
                >
                  <>
                    High-definition video is video of higher resolution and
                    quality than standard-definition. While there is no
                    standardized meaning for high-definition, generally any
                    video image with considerably more than
                    <br />
                    480 vertical scan lines or 576 vertical lines is considered
                    high-definition.
                  </>
                </Text>
                <Button
                  className="cursor-pointer font-inter font-medium min-w-[162px] mt-10 rounded-[10px] text-base text-center"
                  onClick={() => navigate("AllCourses")}
                >
                  Visit Courses
                </Button>
              </div>
              <div className="md:h-[600px] h-[701px] mt-auto mx-auto w-full">
                <div className="absolute flex flex-col items-center justify-start right-[0] top-[0] w-[16%]">
                  <List
                    className="flex flex-col gap-px items-center w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 flex-row gap-2.5 items-center justify-between my-0 w-full">
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-row gap-2.5 items-center justify-between my-0 w-full">
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-row gap-2.5 items-center justify-between my-0 w-full">
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-row gap-2.5 items-center justify-between my-0 w-full">
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-row gap-2.5 items-center justify-between my-0 w-full">
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-row gap-2.5 items-center justify-between my-0 w-full">
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-row gap-2.5 items-center justify-between my-0 w-full">
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-row gap-2.5 items-center justify-between my-0 w-full">
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-row gap-2.5 items-center justify-between my-0 w-full">
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                    </div>
                    <div className="flex flex-1 flex-row gap-2.5 items-center justify-between my-0 w-full">
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                      <Text
                        className="text-center text-deep_orange-400 text-sm"
                        size="txtAirbnbCerealAppMedium14"
                      >
                        +
                      </Text>
                    </div>
                  </List>
                </div>
                <div className="absolute bg-white-A700 bottom-[0] flex flex-col items-center justify-start left-[0] p-[30px] sm:px-5 rounded-[20px] shadow-bs w-[94%]">
                  <div className="h-[540px] relative w-full">
                    <Img
                      className="h-[540px] m-auto object-cover rounded-[20px] w-full"
                      src="src/assets/images/img_pexelsvanessagarcia6325959.png"
                      alt="pexelsvanessaga"
                    />
                    <div className="absolute bottom-[5%] flex md:flex-col flex-row md:gap-5 inset-x-[0] items-start justify-start mx-auto w-[95%]">
                      <div className="bg-white-A700 flex flex-col items-center justify-start p-2.5 rounded-[10px] shadow-bs1 w-1/5 md:w-full">
                        <Img
                          className="h-[194px] md:h-auto object-cover rounded-[10px] w-[99%]"
                          src="src/assets/images/img_portraitlittlegirlcoloring.png"
                          alt="portraitlittleg"
                        />
                      </div>
                      <Button
                        className="flex h-[60px] items-center justify-center mb-[15px] md:ml-[0] ml-[265px] md:mt-0 mt-[141px] w-[60px]"
                        shape="circle"
                        color="deep_orange_400"
                        size="lg"
                      >
                        <Img
                          className="h-[33px]"
                          src="src/assets/images/img_icbaselinecall.svg"
                          alt="icbaselinecall"
                        />
                      </Button>
                      <Button
                        className="flex h-[60px] items-center justify-center mb-[15px] md:ml-[0] ml-[380px] md:mt-0 mt-[141px] w-[60px]"
                        shape="circle"
                      >
                        <Img
                          className="h-6"
                          src="src/assets/images/img_upperarrow24.svg"
                          alt="upperarrowTwentyFour"
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row font-metropolis gap-[30px] items-center justify-start w-[94%] md:w-full">
              <div className="flex md:flex-col flex-row gap-[30px] items-center justify-between w-[66%] md:w-full">
                <div className="bg-white-A700 flex flex-row gap-5 items-center justify-start p-[15px] rounded-[10px] w-[48%] md:w-full">
                  <div className="bg-red-50 flex flex-col h-[70px] items-center justify-start p-5 rounded-[10px] w-[70px]">
                    <Img
                      className="h-[30px] w-[30px]"
                      src="src/assets/images/img_speakerfilledaudiotool.svg"
                      alt="speakerfilledau"
                    />
                  </div>
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                    size="txtMetropolisSemiBold25"
                  >
                    Audio Classes
                  </Text>
                </div>
                <div className="bg-white-A700 flex flex-row gap-5 items-center justify-start p-[15px] rounded-[10px] w-[48%] md:w-full">
                  <div className="bg-gray-50 flex flex-col h-[70px] items-center justify-start p-5 rounded-[10px] w-[70px]">
                    <Img
                      className="h-[30px] w-[30px]"
                      src="src/assets/images/img_livestreaming1.svg"
                      alt="livestreamingOne"
                    />
                  </div>
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                    size="txtMetropolisSemiBold25"
                  >
                    Live Classes
                  </Text>
                </div>
              </div>
              <div className="bg-white-A700 flex flex-row gap-5 items-center justify-start p-[15px] rounded-[10px] w-[32%] md:w-full">
                <div className="bg-cyan-50 flex flex-col h-[70px] items-center justify-start p-5 rounded-[10px] w-[70px]">
                  <Img
                    className="h-[30px] w-[30px]"
                    src="src/assets/images/img_overflowmenu.svg"
                    alt="overflowmenu"
                  />
                </div>
                <Text
                  className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                  size="txtMetropolisSemiBold25"
                >
                  Recorded Class
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-metropolis items-center justify-start max-w-7xl mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col items-center justify-start w-full">
              <div className="flex flex-col gap-7 items-center justify-start">
                <Text
                  className="sm:text-[35px] md:text-[41px] text-[45px] text-center text-gray-900"
                  size="txtMetropolisBold45"
                >
                  Qualified lessons for students
                </Text>
                <Text
                  className="leading-[30.00px] text-base text-center text-gray-700 w-full"
                  size="txtMetropolisRegular16"
                >
                  A lesson or class is a structured period of time where
                  learning is intended to occur. It involves one or more
                  students being taught by a teacher or instructor.
                </Text>
              </div>
              <div className="flex sm:flex-col flex-row font-inter gap-[50px] items-start justify-center mt-[50px] w-[33%] md:w-full">
                <Text
                  className="sm:mt-0 mt-[21px] text-base text-gray-900"
                  size="txtInterMedium16"
                >
                  Kindergarten
                </Text>
                <Button
                  className="!text-white-A700 cursor-pointer font-medium min-w-[152px] rounded-[10px] shadow-bs2 text-base text-center"
                  color="deep_orange_400"
                >
                  High School
                </Button>
                <Text
                  className="sm:mt-0 mt-[21px] text-base text-gray-900"
                  size="txtInterMedium16"
                >
                  College
                </Text>
              </div>
              <div className="flex flex-col font-inter md:gap-10 gap-[60px] items-center justify-start mt-[45px] w-full">
                <div className="gap-10 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                  <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col items-center justify-center p-[15px] rounded-[15px] hover:shadow-bs3 hover:w-full w-full">
                    <Img
                      className="h-[50px] mt-[15px] w-[50px]"
                      src="src/assets/images/img_user.svg"
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
                      size="txtMetropolisRegular16"
                    >
                      Standard 1 is a foundation Standard that reflects 7
                      important concepts...
                    </Text>
                    <Button
                      className="cursor-pointer font-inter font-medium mb-[15px] min-w-[162px] mt-[25px] text-base text-center"
                      shape="round"
                      size="md"
                      variant="outline"
                      onClick={() => navigate("CourseDetails")}
                    >
                      Class Details
                    </Button>
                  </div>
                  <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col items-center justify-center p-[15px] rounded-[15px] hover:shadow-bs3 hover:w-full w-full">
                    <Img
                      className="h-[50px] mt-[15px] w-[50px]"
                      src="src/assets/images/img_profile.svg"
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
                      size="txtMetropolisRegular16"
                    >
                      Standard 2 builds on the foundations of Standard 1 and
                      includes requirements...
                    </Text>
                    <Button
                      className="cursor-pointer font-inter font-medium mb-[15px] min-w-[162px] mt-[25px] text-base text-center"
                      shape="round"
                      size="md"
                      variant="outline"
                      onClick={() => navigate("CourseDetails")}
                    >
                      Class Details
                    </Button>
                  </div>
                  <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col items-center justify-center p-[15px] rounded-[15px] hover:shadow-bs3 hover:w-full w-full">
                    <Img
                      className="h-[50px] mt-[15px] w-[50px]"
                      src="src/assets/images/img_profile_teal_a400.svg"
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
                      size="txtMetropolisRegular16"
                    >
                      Standard 3 of the Aged Care Quality Standards applies to
                      all services delivering personal...
                    </Text>
                    <Button
                      className="cursor-pointer font-inter font-medium mb-[15px] min-w-[162px] mt-[25px] text-base text-center hover:Button-deep_purple-A200"
                      shape="round"
                      size="md"
                      onClick={() => navigate("CourseDetails")}
                    >
                      Class Details
                    </Button>
                  </div>
                  <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col items-center justify-center p-[15px] rounded-[15px] hover:shadow-bs3 hover:w-full w-full">
                    <Img
                      className="h-[50px] mt-[15px] w-[50px]"
                      src="src/assets/images/img_forward.svg"
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
                      size="txtMetropolisRegular16"
                    >
                      Standard 4 of the Aged Care Quality Standards focuses on
                      services and supports...
                    </Text>
                    <Button
                      className="cursor-pointer font-inter font-medium mb-[15px] min-w-[162px] mt-[25px] text-base text-center hover:Button-deep_purple-A200"
                      shape="round"
                      size="md"
                      variant="outline"
                      onClick={() => navigate("CourseDetails")}
                    >
                      Class Details
                    </Button>
                  </div>
                  <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col items-center justify-center p-[15px] rounded-[15px] hover:shadow-bs3 hover:w-full w-full">
                    <Img
                      className="h-[50px] mt-[15px] w-[50px]"
                      src="src/assets/images/img_group.svg"
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
                      size="txtMetropolisRegular16"
                    >
                      Standard 5 Learning Resources. Learning Resources ensure
                      that the school has the...
                    </Text>
                    <Button
                      className="cursor-pointer font-inter font-medium mb-[15px] min-w-[162px] mt-[25px] text-base text-center"
                      shape="round"
                      size="md"
                      variant="outline"
                      onClick={() => navigate("CourseDetails")}
                    >
                      Class Details
                    </Button>
                  </div>
                  <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col items-center justify-center p-[15px] rounded-[15px] hover:shadow-bs3 hover:w-full w-full">
                    <Img
                      className="h-[50px] mt-[15px] w-[50px]"
                      src="src/assets/images/img_user_deep_orange_500.svg"
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
                      size="txtMetropolisRegular16"
                    >
                      Standard 6 requires an organisation to have a system to
                      resolve complaints...
                    </Text>
                    <Button
                      className="cursor-pointer font-inter font-medium mb-[15px] min-w-[162px] mt-[25px] text-base text-center"
                      shape="round"
                      size="md"
                      variant="outline"
                      onClick={() => navigate("CourseDetails")}
                    >
                      Class Details
                    </Button>
                  </div>
                  <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col items-center justify-center p-[15px] rounded-[15px] hover:shadow-bs3 hover:w-full w-full">
                    <Img
                      className="h-[50px] mt-[15px] w-[50px]"
                      src="src/assets/images/img_cursor.svg"
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
                      size="txtMetropolisRegular16"
                    >
                      Standard 7 Blood Management mandates that leaders of
                      health service organisations...
                    </Text>
                    <Button
                      className="cursor-pointer font-inter font-medium mb-[15px] min-w-[162px] mt-[25px] text-base text-center"
                      shape="round"
                      size="md"
                      variant="outline"
                      onClick={() => navigate("CourseDetails")}
                    >
                      Class Details
                    </Button>
                  </div>
                  <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col items-center justify-center p-[15px] rounded-[15px] hover:shadow-bs3 hover:w-full w-full">
                    <Img
                      className="h-[50px] mt-[15px] w-[50px]"
                      src="src/assets/images/img_settings.svg"
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
                      size="txtMetropolisRegular16"
                    >
                      Standard 8 Course from NCERT Solutions help students to
                      understand...
                    </Text>
                    <Button
                      className="cursor-pointer font-inter font-medium mb-[15px] min-w-[162px] mt-[25px] text-base text-center"
                      shape="round"
                      size="md"
                      variant="outline"
                      onClick={() => navigate("CourseDetails")}
                    >
                      Class Details
                    </Button>
                  </div>
                </div>
                <Button
                  className="cursor-pointer font-medium min-w-[202px] rounded-[10px] text-base text-center"
                  onClick={() => navigate("CourseDetails")}
                >
                  Visit More Classes
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-deep_purple-50 flex md:flex-col flex-row font-airbnbcerealapp gap-[21px] items-center justify-end mt-[120px] md:pl-10 sm:pl-5 pl-[51px] pt-[51px] rounded-[20px] w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start w-[41%] md:w-full">
              <Button
                className="cursor-pointer font-medium font-metropolis leading-[normal] min-w-[170px] rounded-[10px] text-center text-xl"
                color="indigo_50"
                size="lg"
              >
                College Level
              </Button>
              <Text
                className="leading-[55.00px] mt-[15px] sm:text-[35px] md:text-[41px] text-[45px] text-gray-900"
                size="txtMetropolisBold45"
              >
                <>
                  Don’t waste time in
                  <br />
                  COVID-19 pandemic.
                  <br />
                  Develop your skills.
                </>
              </Text>
              <Text
                className="leading-[30.00px] mt-5 text-base text-gray-700"
                size="txtMetropolisRegular16"
              >
                <>
                  High-definition video is video of higher resolution and
                  quality than standard-definition. While there is no
                  standardized
                  <br />
                  meaning for high-definition, generally any video.
                </>
              </Text>
              <Button className="cursor-pointer font-inter font-medium min-w-[185px] mt-10 rounded-[10px] text-base text-center">
                Registation Now
              </Button>
            </div>
            <div className="md:h-[587px] sm:h-[602px] h-[616px] relative w-[57%] md:w-full">
              <div className="absolute md:h-[587px] sm:h-[602px] h-[612px] inset-[0] justify-center m-auto w-full">
                <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[98%]">
                  <div className="flex flex-col md:gap-10 gap-[383px] justify-start w-full">
                    <div className="flex flex-col items-center justify-start md:ml-[0] ml-[143px] rounded-[20px] w-[27%] md:w-full">
                      <List
                        className="flex flex-col gap-px items-center w-full"
                        orientation="vertical"
                      >
                        <div className="flex flex-1 flex-row gap-2.5 items-center justify-between my-0 w-full">
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                        </div>
                        <div className="flex flex-1 flex-row gap-2.5 items-center justify-between my-0 w-full">
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                        </div>
                        <div className="flex flex-1 flex-row gap-2.5 items-center justify-between my-0 w-full">
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                        </div>
                        <div className="flex flex-1 flex-row gap-2.5 items-center justify-between my-0 w-full">
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                        </div>
                        <div className="flex flex-1 flex-row gap-2.5 items-center justify-between my-0 w-full">
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                        </div>
                        <div className="flex flex-1 flex-row gap-2.5 items-center justify-between my-0 w-full">
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                        </div>
                        <div className="flex flex-1 flex-row gap-2.5 items-center justify-between my-0 w-full">
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                        </div>
                        <div className="flex flex-1 flex-row gap-2.5 items-center justify-between my-0 w-full">
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                        </div>
                        <div className="flex flex-1 flex-row gap-2.5 items-center justify-between my-0 w-full">
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                        </div>
                        <div className="flex flex-1 flex-row gap-2.5 items-center justify-between my-0 w-full">
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                          <Text
                            className="text-center text-deep_purple-A200 text-sm"
                            size="txtAirbnbCerealAppMedium14DeeppurpleA200"
                          >
                            +
                          </Text>
                        </div>
                      </List>
                    </div>
                    <div className="backdrop-opacity-[0.5] bg-black-900 blur-[100.00px] h-5 rounded-[337px] w-full"></div>
                  </div>
                </div>
                <div className="absolute bottom-[0] h-[587px] inset-x-[0] mx-auto w-full">
                  <Img
                    className="h-[587px] m-auto object-cover rounded-[20px] w-full  bg-image"
                    src="src/assets/images/img_image.png"
                    alt="image_Four"
                  />
                  <div className="absolute flex flex-row items-start justify-between left-[9%] top-[15%] w-[69%]">
                    <Button
                      className="flex h-[50px] items-center justify-center mb-[29px] shadow-bs4 w-[50px]"
                      shape="round"
                      color="white_A700"
                      size="md"
                    >
                      <Img
                        className="h-[30px]"
                        src="src/assets/images/img_html1.svg"
                        alt="htmlOne"
                      />
                    </Button>
                    <Img
                      className="h-[50px] mt-[29px] w-[50px]"
                      src="src/assets/images/img_close_white_a700_50x50.svg"
                      alt="close_Three"
                    />
                  </div>
                </div>
              </div>
              <Button
                className="absolute flex h-[50px] items-center justify-center right-[14%] shadow-bs4 top-[0] w-[50px]"
                shape="round"
                color="white_A700"
                size="md"
              >
                <Img
                  className="h-[30px]"
                  src="src/assets/images/img_java1.svg"
                  alt="javaOne"
                />
              </Button>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-center justify-start mt-[150px] w-[86%] md:w-full">
            <div className="md:h-[510px] h-[521px] relative w-[47%] md:w-full">
              <div className="absolute bg-gradient  flex flex-col sm:h-auto h-max inset-[0] items-end justify-center m-auto px-[19px] rounded-bl-[50%] rounded-br-[50%] rounded-tl-[50%] w-[510px]">
                <Img
                  className="h-[510px] md:h-auto object-cover rounded-bl-[255px] rounded-br-[255px] rounded-tl-[255px] w-[86%]"
                  src="src/assets/images/img_frontviewmale.png"
                  alt="frontviewmale"
                />
              </div>
              <Img
                className="absolute h-[433px] object-cover right-[4%] top-[0] w-4/5"
                src="src/assets/images/img_frontviewmale_433x403.png"
                alt="frontviewmale_One"
              />
            </div>
            <div className="flex flex-col items-start justify-start w-[46%] md:w-full">
              <Text
                className="leading-[55.00px] sm:text-[35px] md:text-[41px] text-[45px] text-gray-900"
                size="txtMetropolisBold45"
              >
                <>
                  Want to share your
                  <br />
                  knowledge? Join us
                  <br />a Mentor
                </>
              </Text>
              <Text
                className="leading-[30.00px] mt-5 text-base text-gray-700 w-full"
                size="txtMetropolisRegular16"
              >
                High-definition video is video of higher resolution and quality
                than standard-definition. While there is no standardized meaning
                for high-definition, generally any video.
              </Text>
              <Button
                className="cursor-pointer font-inter font-medium min-w-[204px] mt-10 rounded-[10px] text-base text-center"
                onClick={() => navigate("JoinTeacher")}
              >
                Career Information
              </Button>
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    </>
  );
};

export default HomePage;
