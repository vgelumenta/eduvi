import React from "react";
import ReactPlayer from "react-player";
import { Button, Img, Input, List, Text, Header, Footer } from "index";
import { useNavigate } from "react-router-dom";

const CourseDetailsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-metropolis items-center justify-start mx-auto p-7 sm:px-5 w-full">
        <div className="flex flex-col items-center justify-start max-w-7xl mb-[39px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[30px] items-center justify-start w-full">
            <Header className="flex sm:flex-col flex-row sm:gap-5 items-center justify-center w-full" />
            <div className="bg-deep_purple-50_01 flex flex-col items-center justify-start p-[18px] rounded-[20px] w-full">
              <div className="flex md:flex-col flex-row md:gap-[42px] items-start justify-between my-1.5 w-full">
                <div className="flex md:flex-1 flex-col gap-[27px] items-start justify-start w-[66%] md:w-full">
                  <Text
                    className="text-base text-gray-900_66 tracking-[0.48px]"
                    size="txtMetropolisMedium16Gray90066"
                  >
                    <span className="text-deep_purple-A200 font-metropolis text-left font-medium">
                      {" "}
                    </span>
                  </Text>
                  <div className="flex flex-col gap-5 items-start justify-start w-full">
                    <br></br>
                    <div className="h-[500px] relative w-full">
                      <ReactPlayer
                        url="https://www.youtube.com/watch?v=kcnwI_5nKyA"
                        className="h-[500px] m-auto object-cover rounded-[10px] w-full"
                      />
                    </div>
                    <Text
                      className="flex flex-col gap-5 items-center justify-center w-full sm:text-[21px] md:text-[23px] text-[25px]"
                      size="txtMetropolisSemiBold25 "
                    >
                      Maths - for Standard 3 Students | Episode 2
                    </Text>
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col gap-[19px] items-center justify-center w-[32%] md:w-full">
                  <br></br>
                  <Text
                    className="sm:text-[21px] md:text-[23px] text-[25px] text-gray-900"
                    size="txtMetropolisSemiBold25"
                  >
                    Course Playlists
                  </Text>
                  <List
                    className="flex flex-col gap-4 items-center pt-[86px] w-full"
                    orientation="vertical"
                  >
                    <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col items-start justify-start p-2.5 rounded-[10px] hover:shadow-bs5 shadow-bs5 w-full">
                      <div className="flex flex-row gap-2.5 items-center justify-start w-[89%] md:w-full">
                        <Img
                          className="h-[50px] md:h-auto object-cover rounded-[5px] w-1/4"
                          src="src/assets/images/img_image_50x80.png"
                          alt="image"
                        />
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-gray-900 text-lg"
                            size="txtMetropolisSemiBold18"
                          >
                            Maths - for Standard 3 St..
                          </Text>
                          <Text
                            className="mt-1 text-deep_orange-400 text-sm"
                            size="txtMetropolisMedium14"
                          >
                            5:43
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col items-start justify-start p-2.5 rounded-[10px] hover:shadow-bs5 w-full">
                      <div className="flex flex-row gap-2.5 items-center justify-start w-3/4 md:w-full">
                        <Img
                          className="h-[50px] md:h-auto object-cover rounded-[5px] w-[30%]"
                          src="src/assets/images/img_image_50x80.png"
                          alt="image"
                        />
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-gray-900 text-lg"
                            size="txtMetropolisSemiBold18"
                          >
                            Maths - Introduction
                          </Text>
                          <Text
                            className="mt-1 text-deep_orange-400 text-sm"
                            size="txtMetropolisMedium14"
                          >
                            1:57
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700_87 hover:cursor-pointer flex flex-1 flex-col items-start justify-start p-2.5 rounded-[10px] hover:shadow-bs5 w-full">
                      <div className="flex flex-row gap-2.5 items-center justify-start w-[89%] md:w-full">
                        <div className="h-[50px] relative w-1/4">
                          <Img
                            className="h-[50px] m-auto object-cover rounded-[5px] w-full"
                            src="src/assets/images/img_image_1.png"
                            alt="image"
                          />
                          <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto p-1 rounded-[50%] w-[18px]">
                            <Img
                              className="h-2.5 w-2.5"
                              src="src/assets/images/img_lockpadlocks.svg"
                              alt="lockpadlocks"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-gray-900_87 text-lg"
                            size="txtMetropolisSemiBold18Gray90087"
                          >
                            Maths - for Standard 3 St..
                          </Text>
                          <Text
                            className="mt-1 text-deep_orange-400_87 text-sm"
                            size="txtMetropolisMedium14Deeporange40087"
                          >
                            8:11
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700_87 hover:cursor-pointer flex flex-1 flex-col items-start justify-start p-2.5 rounded-[10px] hover:shadow-bs5 w-full">
                      <div className="flex flex-row gap-2.5 items-center justify-start w-[89%] md:w-full">
                        <div className="h-[50px] relative w-1/4">
                          <Img
                            className="h-[50px] m-auto object-cover rounded-[5px] w-full"
                            src="src/assets/images/img_image_50x80.png"
                            alt="image"
                          />
                          <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto p-1 rounded-[50%] w-[18px]">
                            <Img
                              className="h-2.5 w-2.5"
                              src="src/assets/images/img_lockpadlocks.svg"
                              alt="lockpadlocks"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-gray-900_87 text-lg"
                            size="txtMetropolisSemiBold18Gray90087"
                          >
                            Maths - for Standard 3 St..
                          </Text>
                          <Text
                            className="mt-1 text-deep_orange-400_87 text-sm"
                            size="txtMetropolisMedium14Deeporange40087"
                          >
                            6:10
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700_87 hover:cursor-pointer flex flex-1 flex-col items-start justify-start p-2.5 rounded-[10px] hover:shadow-bs5 w-full">
                      <div className="flex flex-row gap-2.5 items-center justify-start w-[89%] md:w-full">
                        <div className="h-[50px] relative w-1/4">
                          <Img
                            className="h-[50px] m-auto object-cover rounded-[5px] w-full"
                            src="src/assets/images/img_image_50x80.png"
                            alt="image"
                          />
                          <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto p-1 rounded-[50%] w-[18px]">
                            <Img
                              className="h-2.5 w-2.5"
                              src="src/assets/images/img_lockpadlocks.svg"
                              alt="lockpadlocks"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-gray-900_87 text-lg"
                            size="txtMetropolisSemiBold18Gray90087"
                          >
                            Maths - for Standard 3 St..
                          </Text>
                          <Text
                            className="mt-1 text-deep_orange-400_87 text-sm"
                            size="txtMetropolisMedium14Deeporange40087"
                          >
                            10:00
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="bg-white-A700_87 hover:cursor-pointer flex flex-1 flex-col items-start justify-start p-2.5 rounded-[10px] hover:shadow-bs5 w-full">
                      <div className="flex flex-row gap-2.5 items-center justify-start w-[89%] md:w-full">
                        <div className="h-[50px] relative w-1/4">
                          <Img
                            className="h-[50px] m-auto object-cover rounded-[5px] w-full"
                            src="src/assets/images/img_image_50x80.png"
                            alt="image"
                          />
                          <div className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto p-1 rounded-[50%] w-[18px]">
                            <Img
                              className="h-2.5 w-2.5"
                              src="src/assets/images/img_lockpadlocks.svg"
                              alt="lockpadlocks"
                            />
                          </div>
                        </div>
                        <div className="flex flex-col items-start justify-start">
                          <Text
                            className="text-gray-900_87 text-lg"
                            size="txtMetropolisSemiBold18Gray90087"
                          >
                            Maths - for Standard 3 St..
                          </Text>
                          <Text
                            className="mt-1 text-deep_orange-400_87 text-sm"
                            size="txtMetropolisMedium14Deeporange40087"
                          >
                            7:53
                          </Text>
                        </div>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mt-[69px] w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start w-[66%] md:w-full">
              <div className="flex flex-col gap-4 items-start justify-start w-full">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                  size="txtMetropolisSemiBold30"
                >
                  Course Details
                </Text>
                <Text
                  className="leading-[30.00px] text-base text-gray-700"
                  size="txtMetropolisRegular16"
                >
                  <>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis
                    consectetur adipiscing elit.
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis
                    consectetur adipiscing elit.
                  </>
                </Text>
              </div>
              <div className="flex flex-col gap-4 items-start justify-start mt-[23px] w-full">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                  size="txtMetropolisSemiBold30"
                >
                  Certification
                </Text>
                <Text
                  className="leading-[30.00px] text-base text-gray-700 w-full"
                  size="txtMetropolisRegular16"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis consectetur adipiscing
                  elit.
                </Text>
              </div>
              <div className="flex flex-col gap-4 items-start justify-start mt-[23px] w-full">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                  size="txtMetropolisSemiBold30"
                >
                  Who this course is for
                </Text>
                <Text
                  className="leading-[30.00px] text-base text-gray-700 w-full"
                  size="txtMetropolisRegular16"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis consectetur adipiscing
                  elit.
                </Text>
              </div>
              <div className="flex flex-col gap-[22px] items-start justify-start mt-[25px] w-[55%] md:w-full">
                <Text
                  className="text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                  size="txtMetropolisSemiBold30"
                >
                  <>What you&#39;ll learn in this course:</>
                </Text>
                <div className="flex sm:flex-col flex-row gap-2.5 items-start justify-start w-[96%] md:w-full">
                  <div className="bg-deep_orange-400 h-2.5 sm:mt-0 my-0.5 rounded-[50%] w-2.5"></div>
                  <Text
                    className="text-base text-gray-900"
                    size="txtMetropolisRegular16Gray900"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-2.5 items-start justify-start w-[96%] md:w-full">
                  <div className="bg-deep_orange-400 h-2.5 sm:mt-0 my-0.5 rounded-[50%] w-2.5"></div>
                  <Text
                    className="text-base text-gray-900"
                    size="txtMetropolisRegular16Gray900"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-2.5 items-start justify-start w-[96%] md:w-full">
                  <div className="bg-deep_orange-400 h-2.5 sm:mt-0 my-0.5 rounded-[50%] w-2.5"></div>
                  <Text
                    className="text-base text-gray-900"
                    size="txtMetropolisRegular16Gray900"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-2.5 items-start justify-start w-[96%] md:w-full">
                  <div className="bg-deep_orange-400 h-2.5 sm:mt-0 my-0.5 rounded-[50%] w-2.5"></div>
                  <Text
                    className="text-base text-gray-900"
                    size="txtMetropolisRegular16Gray900"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </Text>
                </div>
                <div className="flex sm:flex-col flex-row gap-2.5 items-start justify-start w-[96%] md:w-full">
                  <div className="bg-deep_orange-400 h-2.5 sm:mt-0 my-0.5 rounded-[50%] w-2.5"></div>
                  <Text
                    className="text-base text-gray-900"
                    size="txtMetropolisRegular16Gray900"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-5 items-center justify-start w-[32%] md:w-full">
              <div className="bg-white-A700 flex flex-col font-metropolis items-center justify-start p-5 rounded-[10px] w-full">
                <div className="flex flex-row items-center justify-between mt-2 w-full">
                  <Text
                    className="text-gray-700 text-xl"
                    size="txtMetropolisSemiBold20"
                  >
                    Price
                  </Text>
                  <Text
                    className="text-2xl md:text-[22px] text-deep_orange-400 text-right sm:text-xl"
                    size="txtMetropolisSemiBold24"
                  >
                    $49.00
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-between mt-[25px] w-full">
                  <Text
                    className="text-gray-700 text-xl"
                    size="txtMetropolisSemiBold20"
                  >
                    Instructor
                  </Text>
                  <Text
                    className="text-gray-900 text-right text-xl underline"
                    size="txtMetropolisSemiBold20Gray900"
                  >
                    Wade Warren
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between mt-6 w-full">
                  <Text
                    className="text-gray-700 text-xl"
                    size="txtMetropolisSemiBold20"
                  >
                    Ratings
                  </Text>
                  <Img
                    className="h-4"
                    src="src/assets/images/img_close_amber_500.svg"
                    alt="close"
                  />
                </div>
                <div className="flex flex-row items-start justify-between mt-[23px] w-full">
                  <Text
                    className="mb-0.5 text-gray-700 text-xl"
                    size="txtMetropolisSemiBold20"
                  >
                    Durations
                  </Text>
                  <Text
                    className="mt-0.5 text-gray-900 text-right text-xl"
                    size="txtMetropolisSemiBold20Gray900"
                  >
                    10 Days
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between mt-[23px] w-full">
                  <Text
                    className="text-gray-700 text-xl"
                    size="txtMetropolisSemiBold20"
                  >
                    Lessons
                  </Text>
                  <Text
                    className="text-gray-900 text-right text-xl"
                    size="txtMetropolisSemiBold20Gray900"
                  >
                    30
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between mt-6 w-full">
                  <Text
                    className="text-gray-700 text-xl"
                    size="txtMetropolisSemiBold20"
                  >
                    Quizzes
                  </Text>
                  <Text
                    className="text-gray-900 text-right text-xl"
                    size="txtMetropolisSemiBold20Gray900"
                  >
                    5
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between mt-6 w-full">
                  <Text
                    className="text-gray-700 text-xl"
                    size="txtMetropolisSemiBold20"
                  >
                    Certificate
                  </Text>
                  <Text
                    className="text-gray-900 text-right text-xl"
                    size="txtMetropolisSemiBold20Gray900"
                  >
                    Yes
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between mt-[26px] w-full">
                  <Text
                    className="text-gray-700 text-xl"
                    size="txtMetropolisSemiBold20"
                  >
                    Language
                  </Text>
                  <Text
                    className="text-gray-900 text-right text-xl"
                    size="txtMetropolisSemiBold20Gray900"
                  >
                    English
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between mb-2.5 mt-[22px] w-full">
                  <Text
                    className="text-gray-700 text-xl"
                    size="txtMetropolisSemiBold20"
                  >
                    Access
                  </Text>
                  <Text
                    className="text-gray-900 text-right text-xl"
                    size="txtMetropolisSemiBold20Gray900"
                  >
                    Lifetime
                  </Text>
                </div>
              </div>
              <Button
                className="cursor-pointer font-inter font-medium min-w-[400px] sm:min-w-full text-center text-lg"
                shape="round"
                onClick={() => navigate("/Pricing")}
              >
                Purchase Course
              </Button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start mt-[88px] w-full">
            <div className="flex flex-col gap-12 items-start justify-start w-full">
              <Text
                className="sm:text-[35px] md:text-[41px] text-[45px] text-gray-900"
                size="txtMetropolisBold45"
              >
                Similar Courses
              </Text>
              <div className="gap-10 md:gap-5 grid md:grid-cols-1 grid-cols-2 justify-center min-h-[auto] w-full">
                <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-[15px] rounded-[10px] hover:shadow-bs3 shadow-bs3 hover:w-full w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-full">
                    <Img
                      CourseDetailsPage
                      className="sm:flex-1 h-[103px] md:h-auto object-cover rounded-[10px] w-[28%] sm:w-full"
                      src="src/assets/images/img_image_103x160.png"
                      alt="image"
                    />
                    <div className="flex sm:flex-1 flex-col items-start justify-start sm:ml-[0] ml-[15px] sm:mt-0 my-1.5 w-[45%] sm:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                        size="txtMetropolisSemiBold24Gray900"
                        onClick={() => navigate("/CourseDetails")}
                      >
                        The Three Musketeers
                      </Text>
                      <Img
                        className="h-5 mt-2"
                        src="src/assets/images/img_star.svg"
                        alt="star"
                      />
                      <Text
                        className="mt-[11px] text-2xl md:text-[22px] text-deep_orange-400 sm:text-xl"
                        size="txtMetropolisSemiBold24"
                        onClick={() => navigate("/CourseDetails")}
                      >
                        $40.00
                      </Text>
                    </div>
                    <Button
                      className="flex h-11 items-center justify-center mb-[5px] sm:ml-[0] ml-[106px] sm:mt-0 mt-[54px] rounded-md w-11"
                      shape="round"
                      size="sm"
                    >
                      <Img
                        className="h-6"
                        src="src/assets/images/img_shoppingbag24_white_a700.svg"
                        alt="shoppingbagTwentyFour"
                        onClick={() => navigate("/CourseDetails")}
                      />
                    </Button>
                  </div>
                </div>
                <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-[15px] rounded-[10px] hover:shadow-bs3 hover:w-full w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-full">
                    <Img
                      className="sm:flex-1 h-[103px] md:h-auto object-cover rounded-[10px] w-[28%] sm:w-full"
                      src="src/assets/images/img_image_2.png"
                      alt="image"
                    />
                    <div className="flex sm:flex-1 flex-col items-start justify-start sm:ml-[0] ml-[15px] sm:mt-0 my-1.5 w-[45%] sm:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                        size="txtMetropolisSemiBold24Gray900"
                        onClick={() => navigate("/CourseDetails")}
                      >
                        The Three Musketeers
                      </Text>
                      <Img
                        className="h-5 mt-2"
                        src="src/assets/images/img_star.svg"
                        alt="star"
                      />
                      <Text
                        className="mt-[11px] text-2xl md:text-[22px] text-deep_orange-400 sm:text-xl"
                        size="txtMetropolisSemiBold24"
                      >
                        $40.00
                      </Text>
                    </div>
                    <Button
                      className="flex h-11 items-center justify-center mb-[5px] sm:ml-[0] ml-[106px] sm:mt-0 mt-[54px] rounded-md w-11"
                      shape="round"
                      color="gray_50"
                      size="sm"
                    >
                      <Img
                        className="h-6"
                        src="src/assets/images/img_shoppingbag24_deep_purple_a200.svg"
                        alt="shoppingbagTwentyFour"
                      />
                    </Button>
                  </div>
                </div>
                <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-[15px] rounded-[10px] hover:shadow-bs3 hover:w-full w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-full">
                    <Img
                      className="sm:flex-1 h-[103px] md:h-auto object-cover rounded-[10px] w-[28%] sm:w-full"
                      src="src/assets/images/img_image_3.png"
                      alt="image"
                    />
                    <div className="flex sm:flex-1 flex-col items-start justify-start sm:ml-[0] ml-[15px] sm:mt-0 my-1.5 w-[45%] sm:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                        size="txtMetropolisSemiBold24Gray900"
                        onClick={() => navigate("/CourseDetails")}
                      >
                        The Three Musketeers
                      </Text>
                      <Img
                        className="h-5 mt-2"
                        src="src/assets/images/img_star.svg"
                        alt="star"
                      />
                      <Text
                        className="mt-[11px] text-2xl md:text-[22px] text-deep_orange-400 sm:text-xl"
                        size="txtMetropolisSemiBold24"
                      >
                        $40.00
                      </Text>
                    </div>
                    <Button
                      className="flex h-11 items-center justify-center mb-[5px] sm:ml-[0] ml-[106px] sm:mt-0 mt-[54px] rounded-md w-11"
                      shape="round"
                      color="gray_50"
                      size="sm"
                    >
                      <Img
                        className="h-6"
                        src="src/assets/images/img_shoppingbag24_deep_purple_a200.svg"
                        alt="shoppingbagTwentyFour"
                        onClick={() => navigate("/CourseDetails")}
                      />
                    </Button>
                  </div>
                </div>
                <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col items-center justify-start p-[15px] rounded-[10px] hover:shadow-bs3 hover:w-full w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-end justify-start w-full">
                    <Img
                      className="sm:flex-1 h-[103px] md:h-auto object-cover rounded-[10px] w-[28%] sm:w-full"
                      src="src/assets/images/img_image_4.png"
                      alt="image"
                    />
                    <div className="flex sm:flex-1 flex-col items-start justify-start sm:ml-[0] ml-[15px] sm:mt-0 my-1.5 w-[45%] sm:w-full">
                      <Text
                        className="text-2xl md:text-[22px] text-gray-900 sm:text-xl"
                        size="txtMetropolisSemiBold24Gray900"
                      >
                        The Three Musketeers
                      </Text>
                      <Img
                        className="h-5 mt-2"
                        src="src/assets/images/img_star.svg"
                        alt="star"
                      />
                      <Text
                        className="mt-[11px] text-2xl md:text-[22px] text-deep_orange-400 sm:text-xl"
                        size="txtMetropolisSemiBold24"
                      >
                        $40.00
                      </Text>
                    </div>
                    <Button
                      className="flex h-11 items-center justify-center mb-[5px] sm:ml-[0] ml-[106px] sm:mt-0 mt-[54px] rounded-md w-11"
                      shape="round"
                      color="gray_50"
                      size="sm"
                    >
                      <Img
                        className="h-6"
                        src="src/assets/images/img_shoppingbag24_deep_purple_a200.svg"
                        alt="shoppingbagTwentyFour"
                      />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default CourseDetailsPage;
