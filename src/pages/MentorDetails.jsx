import React from "react";
import { Button, Img, Input, List, Text, Header, Footer } from "index";

const MentorDetailsPage = () => {
  return (
    <>
      <div className="bg-gray-100_02 flex flex-col font-metropolis items-center justify-start mx-auto p-7 sm:px-5 w-full">
        <div className="flex flex-col items-center max-w-7xl mx-auto md:px-5 w-full">
          <div className="md:h-[394px] h-[820px] max-w-[944px] mx-auto md:px-5 relative w-full">
            <div className="absolute bottom-[0] md:h-[394px] h-[563px] inset-x-[0] mx-auto w-[97%] md:w-full">
              <div className="absolute bottom-[0] flex flex-col gap-3.5 items-start justify-start left-[0] w-[64%]">
                <div className="flex flex-col gap-4 items-start justify-start">
                  <Text
                    className="text-gray-900 text-xl"
                    size="txtMetropolisSemiBold20Gray900"
                  >
                    About Kritsin
                  </Text>
                  <Text
                    className="leading-[28.00px] text-gray-700 text-sm"
                    size="txtMetropolisRegular14"
                  >
                    <>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra maecenas accumsan lacus vel facilisis
                      consectetur adipiscing elit.
                      <br />
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra maecenas accumsan.
                    </>
                  </Text>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-full">
                  <Text
                    className="text-gray-900 text-xl"
                    size="txtMetropolisSemiBold20Gray900"
                  >
                    Certification
                  </Text>
                  <Text
                    className="leading-[28.00px] text-gray-700 text-sm w-full"
                    size="txtMetropolisRegular14"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                    commodo viverra maecenas accumsan lacus vel facilisis
                    consectetur adipiscing elit.
                  </Text>
                </div>
              </div>
              <div className="absolute bg-white-A700 flex flex-col items-center justify-center p-5 right-[0] rounded-[10px] top-[0] w-[39%]">
                <div className="flex flex-row items-center justify-between mt-[9px] w-full">
                  <Text
                    className="text-gray-700 text-lg"
                    size="txtMetropolisSemiBold18Gray700"
                  >
                    Total Course
                  </Text>
                  <Text
                    className="text-deep_orange-400 text-right text-xl"
                    size="txtMetropolisSemiBold20Deeporange400"
                  >
                    30
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between mt-[21px] w-full">
                  <Text
                    className="text-gray-700 text-lg"
                    size="txtMetropolisSemiBold18Gray700"
                  >
                    Ratings
                  </Text>
                  <div className="flex flex-row items-center justify-evenly">
                    <Img
                      className="h-4 w-4"
                      src="src/assets/images/img_signal.svg"
                      alt="signal"
                    />
                    <Text
                      className="text-gray-900 text-lg text-right"
                      size="txtMetropolisSemiBold18"
                    >
                      <span className="text-gray-900 font-metropolis font-semibold">
                        4.9(
                      </span>
                      <a
                        href="javascript:"
                        className="text-deep_orange-400 font-metropolis font-semibold underline"
                      >
                        153
                      </a>
                      <span className="text-gray-900 font-metropolis font-semibold">
                        )
                      </span>
                    </Text>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-between mt-[18px] w-full">
                  <Text
                    className="text-gray-700 text-lg"
                    size="txtMetropolisSemiBold18Gray700"
                  >
                    Experiences
                  </Text>
                  <Text
                    className="text-gray-900 text-lg text-right"
                    size="txtMetropolisSemiBold18"
                  >
                    10 Years
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between mt-[18px] w-full">
                  <Text
                    className="text-gray-700 text-lg"
                    size="txtMetropolisSemiBold18Gray700"
                  >
                    Grauduated
                  </Text>
                  <Text
                    className="text-gray-900 text-lg text-right"
                    size="txtMetropolisSemiBold18"
                  >
                    Yes
                  </Text>
                </div>
                <div className="flex flex-row items-center justify-between mt-[21px] w-full">
                  <Text
                    className="text-gray-700 text-lg"
                    size="txtMetropolisSemiBold18Gray700"
                  >
                    Language
                  </Text>
                  <Text
                    className="text-gray-900 text-lg text-right"
                    size="txtMetropolisSemiBold18"
                  >
                    English, French
                  </Text>
                </div>
                <div className="flex flex-row items-start justify-between mb-2.5 mt-[19px] w-full">
                  <Text
                    className="mt-1 text-gray-700 text-lg"
                    size="txtMetropolisSemiBold18Gray700"
                  >
                    Social
                  </Text>
                  <div className="flex flex-row gap-2.5 items-center justify-between w-[37%]">
                    <Img
                      className="h-[18px] w-[18px]"
                      src="src/assets/images/img_facebooklogo1.svg"
                      alt="facebooklogoOne"
                    />
                    <Button
                      className="flex h-[30px] items-center justify-center rounded-[50%] w-[30px]"
                      shape="circle"
                      color="deep_orange_400"
                      size="sm"
                    >
                      <Img
                        className="h-[15px]"
                        src="src/assets/images/img_instagramicon.svg"
                        alt="instagramicon"
                      />
                    </Button>
                    <Img
                      className="h-3.5"
                      src="src/assets/images/img_twitterlogo.svg"
                      alt="twitterlogo"
                    />
                    <Img
                      className="h-[15px]"
                      src="src/assets/images/img_linkedinicon.svg"
                      alt="linkedinicon"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute flex flex-row font-inter gap-5 items-center justify-start left-[3%] top-[42%] w-[37%]">
              <Button
                className="!text-white-A700 cursor-pointer font-medium min-w-[91px] shadow-bs2 text-center text-sm"
                shape="round"
                color="deep_orange_400"
                size="lg"
              >
                About
              </Button>
              <Button
                className="cursor-pointer font-medium min-w-[106px] text-center text-sm"
                shape="round"
                color="white_A700"
                size="lg"
              >
                Courses
              </Button>
              <Button
                className="cursor-pointer font-medium min-w-[106px] text-center text-sm"
                shape="round"
                color="white_A700"
                size="lg"
              >
                Reviews
              </Button>
            </div>
            <div className="absolute flex flex-col font-metropolis gap-7 inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
              <header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
              <div className="flex flex-col font-airbnbcerealapp relative w-full">
                <div className="md:h-[169px] h-[173px] mx-auto w-full">
                  <div className="absolute bg-deep_purple-50_04 md:h-[139px] h-[171px] inset-[0] justify-center m-auto pl-0.5 py-0.5 rounded-[20px] w-full">
                    <div className="absolute md:h-[139px] h-[166px] inset-y-[0] my-auto right-[0] w-[17%]">
                      <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto rotate-[-90deg] rounded-[20px] top-[0] w-full">
                        <List
                          className="flex flex-col gap-px items-center w-full"
                          orientation="vertical"
                        >
                          <div className="flex flex-1 flex-row gap-3 items-center justify-between my-0 w-full">
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-row gap-3 items-center justify-between my-0 w-full">
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-row gap-3 items-center justify-between my-0 w-full">
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-row gap-3 items-center justify-between my-0 w-full">
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-row gap-3 items-center justify-between my-0 w-full">
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-row gap-3 items-center justify-between my-0 w-full">
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-row gap-3 items-center justify-between my-0 w-full">
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                          </div>
                        </List>
                      </div>
                      <div className="absolute bottom-[0] flex flex-col items-center justify-start right-[0] rotate-[-90deg] rounded-[20px] w-[52%]">
                        <List
                          className="flex flex-col gap-px items-center w-full"
                          orientation="vertical"
                        >
                          <div className="flex flex-1 flex-row gap-3 items-center justify-between my-0 w-full">
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-row gap-3 items-center justify-between my-0 w-full">
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-row gap-3 items-center justify-between my-0 w-full">
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-row gap-3 items-center justify-between my-0 w-full">
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-row gap-3 items-center justify-between my-0 w-full">
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                          </div>
                          <div className="flex flex-1 flex-row gap-3 items-center justify-between my-0 w-full">
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                            <Text
                              className="text-center text-deep_purple-A200_4c text-sm"
                              size="txtAirbnbCerealAppMedium14DeeppurpleA2004c"
                            >
                              +
                            </Text>
                          </div>
                        </List>
                      </div>
                    </div>
                  </div>
                  <div
                    className="absolute bg-cover bg-no-repeat flex flex-col font-metropolis h-max inset-[0] items-start justify-center m-auto p-7 sm:px-5 rounded-[20px] w-full"
                    style={{
                      backgroundImage:
                        "url('src/assets/images/img_group37.png')",
                    }}
                  >
                    <div className="flex flex-col items-center justify-start mb-[97px]">
                      <Text
                        className="text-base text-gray-900_66 tracking-[0.48px]"
                        size="txtMetropolisMedium16Gray90066"
                      >
                        <span className="text-gray-900_66 font-metropolis text-left font-medium">
                          Home | Mentor |{" "}
                        </span>
                        <span className="text-deep_purple-A200 font-metropolis text-left font-medium">
                          Kristin Watson
                        </span>
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex sm:flex-col flex-row font-inter sm:gap-5 items-end justify-start ml-[30px] mt-[-65px] w-[58%] z-[1]">
                  <Img
                    className="h-[140px] md:h-auto object-cover rounded-[10px] w-[140px]"
                    src="src/assets/images/img_bg.png"
                    alt="bg"
                  />
                  <div className="flex flex-col font-metropolis gap-2.5 items-center justify-start sm:ml-[0] ml-[15px] sm:mt-0 mt-[92px]">
                    <Text
                      className="text-gray-900 text-xl"
                      size="txtMetropolisMedium20"
                    >
                      Kritsin Watson
                    </Text>
                    <Text
                      className="text-base text-gray-700"
                      size="txtMetropolisMedium16Gray700"
                    >
                      Founder & Mentor
                    </Text>
                  </div>
                  <Button
                    className="cursor-pointer font-medium min-w-[138px] sm:ml-[0] ml-[104px] sm:mt-0 mt-[90px] text-center text-sm"
                    shape="round"
                    size="lg"
                  >
                    Contact Now
                  </Button>
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

export default MentorDetailsPage;
