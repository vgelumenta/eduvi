import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  SelectBox,
  Text,
  Header,
  Footer,
} from "index";

const kristinWatsonOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const brooklynSimmonsOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const robertFoxOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const wadeWarrenOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const bessieCooperOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const ronaldRichardsOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const guyHawkinsOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const floydMilesOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const theresaWebbOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const codyFisherOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const courtneyHenryOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];
const jeromeBellOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];

const AllMentorsPage = () => {
  return (
    <>
      <div className="bg-gray-100 flex flex-col font-metropolis gap-10 items-start justify-start mx-auto p-7 sm:px-5 w-full">
        <div className="flex flex-col items-center max-w-7xl mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[30px] items-center justify-start w-full">
            <Header className="flex sm:flex-col flex-row sm:gap-5 items-center justify-center w-full" />
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[270px] items-start justify-start p-[19px] w-full"
              style={{
                backgroundImage: "url('src/assets/images/img_group24.svg')",
              }}
            >
              <div className="flex flex-col gap-[49px] justify-start mb-[65px] ml-2.5 md:ml-[0]">
                <Text
                  className="text-base text-gray-900_66 tracking-[0.48px]"
                  size="txtMetropolisMedium16Gray90066"
                >
                  <span className="text-gray-900_66 font-metropolis text-left font-medium">
                    Home |{" "}
                  </span>
                  <span className="text-deep_purple-A200 font-metropolis text-left font-medium">
                    Our Mentors
                  </span>
                </Text>
                <Text
                  className="leading-[50.00px] md:ml-[0] ml-[165px] sm:text-[35px] md:text-[41px] text-[45px] text-gray-900"
                  size="txtMetropolisSemiBold45"
                >
                  <>
                    Eduvi has the
                    <br />
                    qualified mentor
                  </>
                </Text>
              </div>
            </div>
          </div>
        </div>
        <div className="flex md:flex-col flex-row font-inter gap-5 items-center justify-start md:ml-[0] ml-[51px] md:px-5 w-[67%] md:w-full">
          <Button
            className="cursor-pointer font-medium min-w-[147px] rounded-[10px] text-base text-center"
            color="white_A700"
          >
            All Mentors
          </Button>
          <Button
            className="cursor-pointer font-medium min-w-[190px] rounded-[10px] text-base text-center"
            color="white_A700"
          >
            For Kindergarten
          </Button>
          <Button
            className="!text-white-A700 cursor-pointer font-medium min-w-[177px] rounded-[10px] shadow-bs2 text-base text-center"
            color="deep_orange_400"
          >
            For high school
          </Button>
          <Button
            className="cursor-pointer font-medium min-w-[145px] rounded-[10px] text-base text-center"
            color="white_A700"
          >
            For college
          </Button>
          <Button
            className="cursor-pointer font-medium min-w-[178px] rounded-[10px] text-base text-center"
            color="white_A700"
          >
            For Technology
          </Button>
        </div>
        <div className="flex flex-col font-inter items-center max-w-7xl mb-[39px] mx-auto md:px-5 w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col gap-[50px] items-center justify-start w-full">
              <div className="gap-10 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center min-h-[auto] w-full">
                <div className="flex flex-1 flex-col gap-2.5 items-center justify-start w-full">
                  <div className="flex flex-col h-[290px] items-center justify-start w-[290px]">
                    <Img
                      className="h-[290px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-[290px]"
                      src="src/assets/images/img_bg.png"
                      alt="bg"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                    <SelectBox
                      className="font-medium text-base text-gray-900 text-left w-full"
                      placeholderClassName="text-gray-900"
                      indicator={
                        <Img
                          className="h-6 mr-[0] w-6"
                          src="src/assets/images/img_arrowdown.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="groupFortyFour"
                      options={kristinWatsonOptionsList}
                      isSearchable={false}
                      placeholder="Kristin Watson"
                    />
                    <div className="flex flex-col items-center justify-start w-[42%] md:w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Text
                          className="text-gray-700 text-sm"
                          size="txtInterMedium14"
                        >
                          Founder & Mentor
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2.5 items-center justify-start w-full">
                  <div className="flex flex-col h-[290px] items-center justify-start w-[290px]">
                    <Img
                      className="h-[290px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-[290px]"
                      src="src/assets/images/img_bg_290x290.png"
                      alt="bg"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                    <SelectBox
                      className="font-medium text-base text-gray-900 text-left w-full"
                      placeholderClassName="text-gray-900"
                      indicator={
                        <Img
                          className="h-6 mr-[0] w-6"
                          src="src/assets/images/img_arrowdown.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="groupFiftyEight"
                      options={brooklynSimmonsOptionsList}
                      isSearchable={false}
                      placeholder="Brooklyn Simmons"
                    />
                    <div className="flex flex-col items-center justify-start w-[42%] md:w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Text
                          className="text-gray-700 text-sm"
                          size="txtInterMedium14"
                        >
                          Founder & Mentor
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2.5 items-center justify-start w-full">
                  <div className="flex flex-col h-[290px] items-center justify-start w-[290px]">
                    <Img
                      className="h-[290px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-[290px]"
                      src="src/assets/images/img_bg_1.png"
                      alt="bg"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                    <SelectBox
                      className="font-medium text-base text-gray-900 text-left w-full"
                      placeholderClassName="text-gray-900"
                      indicator={
                        <Img
                          className="h-6 mr-[0] w-6"
                          src="src/assets/images/img_arrowdown.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="groupEightyThree"
                      options={robertFoxOptionsList}
                      isSearchable={false}
                      placeholder="Robert Fox"
                    />
                    <Text
                      className="text-gray-700 text-sm"
                      size="txtInterMedium14"
                    >
                      Founder & Mentor
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2.5 items-center justify-start w-full">
                  <div className="flex flex-col h-[290px] items-center justify-start w-[290px]">
                    <Img
                      className="h-[290px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-[290px]"
                      src="src/assets/images/img_bg_2.png"
                      alt="bg"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                    <SelectBox
                      className="font-medium text-base text-gray-900 text-left w-full"
                      placeholderClassName="text-gray-900"
                      indicator={
                        <Img
                          className="h-6 mr-[0] w-6"
                          src="src/assets/images/img_arrowdown.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="groupFiftyOne"
                      options={wadeWarrenOptionsList}
                      isSearchable={false}
                      placeholder="Wade Warren"
                    />
                    <div className="flex flex-col items-center justify-start w-[42%] md:w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Text
                          className="text-gray-700 text-sm"
                          size="txtInterMedium14"
                        >
                          Founder & Mentor
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2.5 items-center justify-start w-full">
                  <div className="flex flex-col h-[290px] items-center justify-start w-[290px]">
                    <Img
                      className="h-[290px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-[290px]"
                      src="src/assets/images/img_bg_3.png"
                      alt="bg"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                    <SelectBox
                      className="font-medium text-base text-gray-900 text-left w-full"
                      placeholderClassName="text-gray-900"
                      indicator={
                        <Img
                          className="h-6 mr-[0] w-6"
                          src="src/assets/images/img_arrowdown.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="groupFortySeven"
                      options={bessieCooperOptionsList}
                      isSearchable={false}
                      placeholder="Bessie Cooper"
                    />
                    <div className="flex flex-col items-center justify-start w-[42%] md:w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Text
                          className="text-gray-700 text-sm"
                          size="txtInterMedium14"
                        >
                          Founder & Mentor
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2.5 items-center justify-start w-full">
                  <div className="flex flex-col h-[290px] items-center justify-start w-[290px]">
                    <Img
                      className="h-[290px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-[290px]"
                      src="src/assets/images/img_bg_4.png"
                      alt="bg"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                    <SelectBox
                      className="font-medium text-base text-gray-900 text-left w-full"
                      placeholderClassName="text-gray-900"
                      indicator={
                        <Img
                          className="h-6 mr-[0] w-6"
                          src="src/assets/images/img_arrowdown.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="groupSixtyOne"
                      options={ronaldRichardsOptionsList}
                      isSearchable={false}
                      placeholder="Ronald Richards"
                    />
                    <div className="flex flex-col items-center justify-start w-[42%] md:w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Text
                          className="text-gray-700 text-sm"
                          size="txtInterMedium14"
                        >
                          Founder & Mentor
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col items-center justify-start w-full">
                  <div className="flex flex-col h-[290px] items-center justify-start w-[290px]">
                    <Img
                      className="h-[290px] md:h-auto object-cover w-[290px]"
                      src="src/assets/images/img_bg_5.png"
                      alt="bg"
                    />
                  </div>
                  <div className="flex md:h-[93px] h-[94px] justify-end relative w-full">
                    <div className="flex flex-row gap-2.5 h-full items-start justify-center mb-[9px] mt-auto mx-auto w-[33%]">
                      <Line className="bg-gray-700 h-[17px] mb-0.5 w-px" />
                      <Text
                        className="mt-0.5 text-gray-700 text-sm"
                        size="txtInterMedium14"
                      >
                        <span className="text-gray-700 font-inter text-left font-medium">
                          Courses(
                        </span>
                        <a
                          href="javascript:"
                          className="text-deep_orange-400 font-inter text-left font-medium underline"
                        >
                          30
                        </a>
                        <span className="text-gray-700 font-inter text-left font-medium">
                          )
                        </span>
                      </Text>
                    </div>
                    <div className="absolute bg-white-A700 flex flex-col gap-[9px] h-full inset-[0] items-end justify-center m-auto pb-2.5 rounded-bl-[10px] rounded-br-[10px] shadow-bs6 w-full">
                      <Line className="bg-deep_purple-A200 h-px w-full" />
                      <div className="flex flex-col gap-2 items-start justify-start w-[95%] md:w-full">
                        <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                          <SelectBox
                            className="font-medium text-base text-deep_orange-400 text-left w-full"
                            placeholderClassName="text-deep_orange-400"
                            indicator={
                              <Img
                                className="h-6 mr-[0] w-6"
                                src="src/assets/images/img_arrowdown.svg"
                                alt="arrow_down"
                              />
                            }
                            isMulti={false}
                            name="groupSeventyFive"
                            options={guyHawkinsOptionsList}
                            isSearchable={false}
                            placeholder="Guy Hawkins"
                          />
                          <Text
                            className="text-gray-700 text-sm"
                            size="txtInterMedium14"
                          >
                            Founder & Mentor
                          </Text>
                        </div>
                        <div className="flex flex-row items-start justify-start w-[30%] md:w-full">
                          <Img
                            className="h-4 w-4"
                            src="src/assets/images/img_signal.svg"
                            alt="signal"
                          />
                          <Text
                            className="ml-[5px] text-gray-700 text-sm"
                            size="txtInterMedium14"
                          >
                            <span className="text-gray-700 font-inter text-left font-medium">
                              4.9 (
                            </span>
                            <a
                              href="javascript:"
                              className="text-deep_orange-400 font-inter text-left font-medium underline"
                            >
                              135
                            </a>
                            <span className="text-gray-700 font-inter text-left font-medium">
                              )
                            </span>
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2.5 items-center justify-start w-full">
                  <div className="flex flex-col h-[290px] items-center justify-start w-[290px]">
                    <Img
                      className="h-[290px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-[290px]"
                      src="src/assets/images/img_bg_6.png"
                      alt="bg"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                    <SelectBox
                      className="font-medium text-base text-gray-900 text-left w-full"
                      placeholderClassName="text-gray-900"
                      indicator={
                        <Img
                          className="h-6 mr-[0] w-6"
                          src="src/assets/images/img_arrowdown.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="groupFiftyFour"
                      options={floydMilesOptionsList}
                      isSearchable={false}
                      placeholder="Floyd Miles"
                    />
                    <div className="flex flex-col items-center justify-start w-[42%] md:w-full">
                      <div className="flex flex-col items-center justify-start w-full">
                        <Text
                          className="text-gray-700 text-sm"
                          size="txtInterMedium14"
                        >
                          Founder & Mentor
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2.5 items-center justify-start w-full">
                  <div className="flex flex-col h-[290px] items-center justify-start w-[290px]">
                    <Img
                      className="h-[290px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-[290px]"
                      src="src/assets/images/img_bg_7.png"
                      alt="bg"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                    <SelectBox
                      className="font-medium text-base text-gray-900 text-left w-full"
                      placeholderClassName="text-gray-900"
                      indicator={
                        <Img
                          className="h-6 mr-[0] w-6"
                          src="src/assets/images/img_arrowdown.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="groupFifty"
                      options={theresaWebbOptionsList}
                      isSearchable={false}
                      placeholder="Theresa Webb"
                    />
                    <Text
                      className="text-gray-700 text-sm"
                      size="txtInterMedium14"
                    >
                      Founder & Mentor
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2.5 items-center justify-start w-full">
                  <div className="flex flex-col h-[290px] items-center justify-start w-[290px]">
                    <Img
                      className="h-[290px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-[290px]"
                      src="src/assets/images/img_bg_8.png"
                      alt="bg"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                    <SelectBox
                      className="font-medium text-base text-gray-900 text-left w-full"
                      placeholderClassName="text-gray-900"
                      indicator={
                        <Img
                          className="h-6 mr-[0] w-6"
                          src="src/assets/images/img_arrowdown.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="groupSixtyFour"
                      options={codyFisherOptionsList}
                      isSearchable={false}
                      placeholder="Cody Fisher"
                    />
                    <Text
                      className="text-gray-700 text-sm"
                      size="txtInterMedium14"
                    >
                      Founder & Mentor
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2.5 items-center justify-start w-full">
                  <div className="flex flex-col h-[290px] items-center justify-start w-[290px]">
                    <Img
                      className="h-[290px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-[290px]"
                      src="src/assets/images/img_bg_9.png"
                      alt="bg"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                    <SelectBox
                      className="font-medium text-base text-gray-900 text-left w-full"
                      placeholderClassName="text-gray-900"
                      indicator={
                        <Img
                          className="h-6 mr-[0] w-6"
                          src="src/assets/images/img_arrowdown.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="groupSixtySeven"
                      options={courtneyHenryOptionsList}
                      isSearchable={false}
                      placeholder="Courtney Henry"
                    />
                    <Text
                      className="text-gray-700 text-sm"
                      size="txtInterMedium14"
                    >
                      Founder & Mentor
                    </Text>
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-2.5 items-center justify-start w-full">
                  <div className="flex flex-col h-[290px] items-center justify-start w-[290px]">
                    <Img
                      className="h-[290px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-[290px]"
                      src="src/assets/images/img_bg_10.png"
                      alt="bg"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5 items-start justify-start w-full">
                    <SelectBox
                      className="font-medium text-base text-gray-900 text-left w-full"
                      placeholderClassName="text-gray-900"
                      indicator={
                        <Img
                          className="h-6 mr-[0] w-6"
                          src="src/assets/images/img_arrowdown.svg"
                          alt="arrow_down"
                        />
                      }
                      isMulti={false}
                      name="groupFiftySeven"
                      options={jeromeBellOptionsList}
                      isSearchable={false}
                      placeholder="Jerome Bell"
                    />
                    <Text
                      className="text-gray-700 text-sm"
                      size="txtInterMedium14"
                    >
                      Founder & Mentor
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-row font-metropolis items-start justify-center w-[22%] md:w-full">
                <Button
                  className="flex h-11 items-center justify-center rounded-md w-11"
                  shape="round"
                  color="deep_purple_50_04"
                  size="sm"
                >
                  <Img
                    className="h-6"
                    src="src/assets/images/img_arrowright.svg"
                    alt="arrowright"
                  />
                </Button>
                <Text
                  className="ml-5 mt-3.5 text-base text-gray-900"
                  size="txtMetropolisMedium16Gray900"
                >
                  Page
                </Text>
                <Button
                  className="!text-blue_gray-800_01 cursor-pointer font-medium h-11 leading-[normal] ml-[15px] rounded-lg text-center text-lg w-11"
                  color="white_A700"
                  size="lg"
                >
                  1
                </Button>
                <Text
                  className="ml-[15px] mt-[13px] text-base text-gray-900"
                  size="txtMetropolisMedium16Gray900"
                >
                  of 3
                </Text>
                <Button
                  className="flex h-11 items-center justify-center ml-5 rotate-[180deg] rounded-md w-11"
                  shape="round"
                  size="sm"
                >
                  <Img
                    className="h-6"
                    src="src/assets/images/img_arrowright_white_a700.svg"
                    alt="arrowright_One"
                  />
                </Button>
              </div>
            </div>
          </div>
          <Footer/>
        </div>
      </div>
    </>
  );
};

export default AllMentorsPage;
