import React from "react";
import { useNavigate } from "react-router-dom";
import { Img, Text, Button, List, Input } from "index";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-900 font-metropolis md:h-[394px] h-[420px] sm:h-[439px] mt-[100px] p-[50px] md:px-10 sm:px-5 relative rounded-[20px] w-full">
        <div className="flex flex-col h-full items-center justify-start m-auto w-[45%]">
          <Text
            className="leading-[55.00px] sm:text-[35px] md:text-[41px] text-[45px] text-center text-white-A700"
            size="txtMetropolisBold45WhiteA700"
          >
            <>
              Subscribe For Get Update
              <br />
              Every New Courses
            </>
          </Text>
          <Text
            className="mt-[27px] text-base text-center text-white-A700_b2"
            size="txtMetropolisRegular16WhiteA700b2"
          >
            20k+ students daily learn with Eduvi. Subscribe for new courses.
          </Text>
          <div
            className="flex sm:flex-col flex-row sm:gap-5 items-center justify-center mt-[46px] w-[89%] md:w-full"
            style={{ position: "relative", zIndex: 1 }}
          >
            <Button
              onClick={() => navigate("/pricing")}
              className="cursor-pointer font-inter font-medium leading-[normal] min-w-[142px] rounded-[10px] text-base text-center"
            >
              Subscribe Now
            </Button>
          </div>
        </div>
        <div className="absolute flex flex-col h-max inset-[0] items-center justify-center m-auto w-[93%]">
          <div className="flex flex-col gap-[45px] items-center justify-start w-full">
            <div className="flex flex-row md:gap-10 items-center justify-between w-[98%] md:w-full">
              <Img
                className="h-[60px] md:h-auto rotate-[180deg] rounded-[50%] w-[60px]"
                src="src/assets/images/img_ellipse168.png"
                alt="ellipse168"
              />
              <Img
                className="h-[60px] md:h-auto rounded-[50%] w-[60px]"
                src="src/assets/images/img_ellipse166.png"
                alt="ellipse166"
              />
            </div>
            <div className="flex flex-row sm:gap-10 items-start justify-between w-[79%] md:w-full">
              <Img
                className="h-[60px] md:h-auto mb-6 rotate-[180deg] rounded-[50%] w-[60px]"
                src="src/assets/images/img_ellipse167.png"
                alt="ellipse167"
              />
              <Img
                className="h-[60px] md:h-auto mt-6 rounded-[50%] w-[60px]"
                src="src/assets/images/img_ellipse167_60x60.png"
                alt="ellipse167_One"
              />
            </div>
            <div className="flex flex-row md:gap-10 items-center justify-between w-[98%] md:w-full">
              <Img
                className="h-[60px] md:h-auto rotate-[180deg] rounded-[50%] w-[60px]"
                src="src/assets/images/img_ellipse166_60x60.png"
                alt="ellipse166_One"
              />
              <Img
                className="h-[60px] md:h-auto rounded-[50%] w-[60px]"
                src="src/assets/images/img_ellipse168_60x60.png"
                alt="ellipse168_One"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:flex-col flex-row font-inter md:gap-10 items-start justify-between mt-[78px] w-full">
        <div className="flex md:flex-1 flex-col items-center justify-start w-[14%] md:w-full">
          <div className="flex flex-row font-metropolis gap-1.5 items-center justify-start w-[69%] md:w-full">
            <div className="bg-deep_orange-400 flex flex-col items-center justify-center p-[3px] rounded-[5px] w-[22%]">
              <Img
                className="h-[18px] my-[3px] w-[18px]"
                src="src/assets/images/img_openbook1.svg"
                alt="openbookOne_One"
              />
            </div>
            <Text
              className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
              size="txtMetropolisSemiBold30"
            >
              Eduvi
            </Text>
          </div>
          <div className="flex flex-row gap-[15px] items-center justify-start mt-[25px] w-[89%] md:w-full">
            <Img
              className="h-[22px] w-[22px]"
              src="src/assets/images/img_facebooklogo1.svg"
              alt="facebooklogoOne"
            />
            <Button
              className="flex h-9 items-center justify-center rounded-[50%] w-9"
              color="deep_orange_400"
              size="sm"
            >
              <Img
                className="h-[18px]"
                src="src/assets/images/img_instagramicon.svg"
                alt="instagramicon"
              />
            </Button>
            <Img
              className="h-[17px]"
              src="src/assets/images/img_twitterlogo.svg"
              alt="twitterlogo"
            />
            <Img
              className="h-[18px]"
              src="src/assets/images/img_linkedinicon.svg"
              alt="linkedinicon"
            />
          </div>
          <Text
            className="mt-[39px] text-base text-gray-700"
            size="txtInterRegular16"
          >
            ©2023 Kelompok 4
          </Text>
        </div>
        <div className="flex flex-col items-start justify-start md:mt-0 mt-0.5">
          <Text
            className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
            size="txtInterSemiBold22"
          >
            Quick links
          </Text>
          <Text
            className="mt-[18px] text-base text-gray-700"
            size="txtInterRegular16"
          >
            Home
          </Text>
          <Text
            className="mt-[13px] text-base text-gray-700"
            size="txtInterRegular16"
          >
            Professional Education
          </Text>
          <Text
            className="mt-[15px] text-base text-gray-700"
            size="txtInterRegular16"
          >
            Courses
          </Text>
          <Text
            className="mt-3 text-base text-gray-700"
            size="txtInterRegular16"
          >
            Admissions
          </Text>
          <Text
            className="mt-[13px] text-base text-gray-700"
            size="txtInterRegular16"
          >
            Testimonial
          </Text>
          <Text
            className="mt-[15px] text-base text-gray-700"
            size="txtInterRegular16"
          >
            Programs
          </Text>
        </div>
        <List
          className="md:flex-1 sm:flex-col flex-row md:gap-10 gap-[137px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 md:mt-0 mt-0.5 w-[51%] md:w-full"
          orientation="horizontal"
        >
          <div className="flex flex-col items-start justify-start w-full">
            <Text
              className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
              size="txtInterSemiBold22"
            >
              Courses
            </Text>
            <Text
              className="mt-[18px] text-base text-gray-700"
              size="txtInterRegular16"
            >
              Classroom courses
            </Text>
            <Text
              className="mt-[13px] text-base text-gray-700"
              size="txtInterRegular16"
            >
              Virtual classroom courses
            </Text>
            <Text
              className="mt-3.5 text-base text-gray-700"
              size="txtInterRegular16"
            >
              E-learning courses
            </Text>
            <Text
              className="mt-[13px] text-base text-gray-700"
              size="txtInterRegular16"
            >
              Video Courses
            </Text>
            <Text
              className="mt-3.5 text-base text-gray-700"
              size="txtInterRegular16"
            >
              Offline Courses
            </Text>
          </div>
          <div className="flex flex-col items-start justify-start w-full">
            <Text
              className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
              size="txtInterSemiBold22"
            >
              Community
            </Text>
            <Text
              className="mt-4 text-base text-gray-700"
              size="txtInterRegular16"
            >
              Learners
            </Text>
            <Text
              className="mt-3.5 text-base text-gray-700"
              size="txtInterRegular16"
            >
              Parteners
            </Text>
            <Text
              className="mt-[15px] text-base text-gray-700"
              size="txtInterRegular16"
            >
              Developers
            </Text>
            <Text
              className="mt-3 text-base text-gray-700"
              size="txtInterRegular16"
            >
              Transactions
            </Text>
            <Text
              className="mt-[15px] text-base text-gray-700"
              size="txtInterRegular16"
            >
              Blog
            </Text>
            <Text
              className="mt-[13px] text-base text-gray-700"
              size="txtInterRegular16"
            >
              Teaching Center
            </Text>
          </div>

          <div className="flex flex-col items-start justify-start w-full">
            <Text
              className="text-[22px] text-gray-900 sm:text-lg md:text-xl"
              size="txtInterSemiBold22"
            >
              More
            </Text>
            <Text
              className="mt-[18px] text-base text-gray-700"
              size="txtInterRegular16"
            >
              Press
            </Text>
            <Text
              className="mt-3.5 text-base text-gray-700"
              size="txtInterRegular16"
            >
              Investors
            </Text>
            <Text
              className="mt-3.5 text-base text-gray-700"
              size="txtInterRegular16"
            >
              Terms
            </Text>
            <Text
              className="mt-[15px] text-base text-gray-700"
              size="txtInterRegular16"
            >
              Privacy
            </Text>
            <Text
              className="mt-3.5 text-base text-gray-700"
              size="txtInterRegular16"
            >
              Help
            </Text>
            <Text
              className="mt-3 text-base text-gray-700"
              size="txtInterRegular16"
            >
              Contact
            </Text>
          </div>
        </List>
      </div>
    </>
  );
};

export { Footer };
