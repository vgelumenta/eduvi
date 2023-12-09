import React from "react";
import {
  Button,
  CheckBox,
  Img,
  Input,
  Line,
  List,
  Text,
  Header,
  Footer,
} from "index";

const PricingPage = () => {
  return (
    <>
      <div className="bg-gray-100_02 flex flex-col font-metropolis items-center justify-start mx-auto p-7 sm:px-5 w-full">
        <div className="flex flex-col items-center max-w-7xl mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[30px] items-center justify-start max-w-[944px] mx-auto md:px-5 w-full">
            <Header className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full" />
            <div className="bg-deep_purple-50_01 flex flex-row items-center justify-start p-[27px] sm:px-5 rounded-[20px] w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start mb-[23px] ml-0.5 w-[97%]">
                <Text
                  className="text-base text-gray-900_66 tracking-[0.48px]"
                  size="txtMetropolisMedium16Gray90066"
                >
                  <span className="text-gray-900_66 font-metropolis text-left font-medium">
                    Home |{" "}
                  </span>
                  <span className="text-deep_purple-A200 font-metropolis text-left font-medium">
                    Pricing
                  </span>
                </Text>
                <Text
                  className="leading-[40.00px] md:mt-0 mt-[67px] sm:text-[31px] md:text-[33px] text-[35px] text-gray-900"
                  size="txtMetropolisSemiBold35"
                >
                  <>
                    Our Pre-ready
                    <br />
                    Pricing Packages
                  </>
                </Text>
                <Img
                  className="h-[168px] ml-14 md:ml-[0] md:mt-0 mt-[23px]"
                  src="src/assets/images/img_43891.svg"
                  alt="43891"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-start max-w-[945px] mt-[50px] mx-auto md:px-5 w-full">
            <div className="flex flex-col gap-10 items-center justify-start w-full">
              <div className="flex flex-col gap-5 items-center justify-start">
                <Text
                  className="leading-[40.00px] sm:text-[31px] md:text-[33px] text-[35px] text-center text-gray-900"
                  size="txtMetropolisBold35"
                >
                  <>
                    We create a monthly pricing package
                    <br />
                    for all standard students
                  </>
                </Text>
                <Text
                  className="leading-[28.00px] text-center text-gray-700 text-sm w-full"
                  size="txtMetropolisRegular14"
                >
                  Basically we create this package for those who are really
                  interested and get benifited from our courses or books. We
                  want to make a low cost package for them. So that they can
                  purchase any courses with the package they buy from us. Also
                  will get free books from every packages.
                </Text>
              </div>
              <List
                className="sm:flex-col flex-row gap-[15px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center w-full"
                orientation="horizontal"
              >
                <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col items-start justify-start p-5 rounded-[10px] hover:shadow-bs3 hover:w-full w-full">
                  <div className="flex flex-col font-metropolis items-start justify-start w-full">
                    <Img
                      className="h-[30px] w-[30px]"
                      src="src/assets/images/img_thumbsup.svg"
                      alt="thumbsup"
                    />
                    <Text
                      className="mt-[13px] text-gray-900 text-xl"
                      size="txtMetropolisSemiBold20Gray900"
                    >
                      Basic Pack
                    </Text>
                    <Line className="bg-gray-900_26 h-px mt-4 w-full" />
                  </div>
                  <div className="flex flex-col font-metropolis gap-[18px] items-start justify-start mt-5 w-[91%] md:w-full">
                    <CheckBox
                      className="font-medium leading-[normal] text-gray-700 text-left text-sm"
                      inputClassName="mr-[5px]"
                      name="3hdvideolessons_One"
                      id="3hdvideolessons_One"
                      label="3 HD video lessons & tutorials"
                    ></CheckBox>
                    <CheckBox
                      className="font-medium leading-[normal] text-gray-700 text-left text-sm"
                      inputClassName="mr-[5px]"
                      name="1officialexam"
                      id="1officialexam"
                      label="1 Official exam"
                    ></CheckBox>
                    <CheckBox
                      className="font-medium leading-[normal] text-gray-700 text-left text-sm"
                      inputClassName="mr-[5px]"
                      name="100practiceques_One"
                      id="100practiceques_One"
                      label="100 Practice questions"
                    ></CheckBox>
                    <CheckBox
                      className="font-medium leading-[normal] text-gray-700 text-left text-sm"
                      inputClassName="mr-[5px]"
                      name="1monthsubscript_One"
                      id="1monthsubscript_One"
                      label="1 Month subscriptions"
                    ></CheckBox>
                    <CheckBox
                      className="font-medium leading-[normal] text-gray-700 text-left text-sm"
                      inputClassName="mr-[5px]"
                      name="1freebook"
                      id="1freebook"
                      label="1 Free book"
                    ></CheckBox>
                    <div className="flex flex-row gap-3.5 items-center justify-start w-full">
                      <Img
                        className="h-5 w-5"
                        src="src/assets/images/img_close24outline.svg"
                        alt="close24outline"
                      />
                      <Text
                        className="text-gray-700 text-sm"
                        size="txtMetropolisMedium14Gray700"
                      >
                        Practice quizes & assignments
                      </Text>
                    </div>
                    <div className="flex flex-row gap-3.5 items-center justify-start w-[76%] md:w-full">
                      <Img
                        className="h-5 w-5"
                        src="src/assets/images/img_close24outline.svg"
                        alt="close24outline_One"
                      />
                      <Text
                        className="text-gray-700 text-sm"
                        size="txtMetropolisMedium14Gray700"
                      >
                        In depth explanations
                      </Text>
                    </div>
                    <div className="flex flex-row gap-3.5 items-start justify-start w-[98%] md:w-full">
                      <Img
                        className="h-5 w-5"
                        src="src/assets/images/img_close24outline.svg"
                        alt="close24outline_Two"
                      />
                      <Text
                        className="mt-0.5 text-gray-700 text-sm"
                        size="txtMetropolisMedium14Gray700"
                      >
                        Personal instructor Assitance
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="mt-[19px] text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                    size="txtMetropolisSemiBold30"
                  >
                    $200
                  </Text>
                  <Button
                    className="cursor-pointer font-inter font-medium leading-[normal] min-w-[265px] mt-[30px] text-base text-center"
                    shape="round"
                    size="lg"
                    variant="outline"
                  >
                    Purchase Course
                  </Button>
                </div>
                <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col items-start justify-start p-5 rounded-[10px] hover:shadow-bs3 shadow-bs3 hover:w-full w-full">
                  <div className="flex flex-col font-metropolis gap-3.5 items-start justify-start w-full">
                    <Img
                      className="h-[30px] w-[30px]"
                      src="src/assets/images/img_thumbsup.svg"
                      alt="thumbsup"
                    />
                    <Text
                      className="text-gray-900 text-xl"
                      size="txtMetropolisSemiBold20Gray900"
                    >
                      Standard Pack
                    </Text>
                    <Line className="bg-gray-900_26 h-px w-full" />
                  </div>
                  <div className="flex flex-col font-metropolis gap-[18px] items-start justify-start mt-5 w-[91%] md:w-full">
                    <CheckBox
                      className="font-medium leading-[normal] text-gray-700 text-left text-sm"
                      inputClassName="mr-[5px]"
                      name="3hdvideolessons_One"
                      id="3hdvideolessons_One2"
                      label="3 HD video lessons & tutorials"
                    ></CheckBox>
                    <CheckBox
                      className="font-medium leading-[normal] text-gray-700 text-left text-sm"
                      inputClassName="mr-[5px]"
                      name="1officialexam"
                      id="1officialexam2"
                      label="1 Official exam"
                    ></CheckBox>
                    <CheckBox
                      className="font-medium leading-[normal] text-gray-700 text-left text-sm"
                      inputClassName="mr-[5px]"
                      name="100practiceques_One"
                      id="100practiceques_One2"
                      label="100 Practice questions"
                    ></CheckBox>
                    <CheckBox
                      className="font-medium leading-[normal] text-gray-700 text-left text-sm"
                      inputClassName="mr-[5px]"
                      name="1monthsubscript_One"
                      id="1monthsubscript_One2"
                      label="1 Month subscriptions"
                    ></CheckBox>
                    <CheckBox
                      className="font-medium leading-[normal] text-gray-700 text-left text-sm"
                      inputClassName="mr-[5px]"
                      name="1freebook"
                      id="1freebook2"
                      label="1 Free book"
                    ></CheckBox>
                    <CheckBox
                      className="font-medium leading-[normal] text-gray-700 text-left text-sm"
                      inputClassName="mr-[5px]"
                      name="practicequizes"
                      id="practicequizes"
                      label="Practice quizes & assignments"
                    ></CheckBox>
                    <div className="flex flex-row gap-3.5 items-center justify-start w-[76%] md:w-full">
                      <Img
                        className="h-5 w-5"
                        src="src/assets/images/img_close24outline.svg"
                        alt="close24outline"
                      />
                      <Text
                        className="text-gray-700 text-sm"
                        size="txtMetropolisMedium14Gray700"
                      >
                        In depth explanations
                      </Text>
                    </div>
                    <div className="flex flex-row gap-3.5 items-start justify-start w-[98%] md:w-full">
                      <Img
                        className="h-5 w-5"
                        src="src/assets/images/img_close24outline.svg"
                        alt="close24outline_One"
                      />
                      <Text
                        className="mt-0.5 text-gray-700 text-sm"
                        size="txtMetropolisMedium14Gray700"
                      >
                        Personal instructor Assitance
                      </Text>
                    </div>
                  </div>
                  <Text
                    className="mt-[19px] text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                    size="txtMetropolisSemiBold30"
                  >
                    $600
                  </Text>
                  <Button
                    className="cursor-pointer font-inter font-medium leading-[normal] min-w-[265px] mt-[30px] text-base text-center"
                    shape="round"
                    size="lg"
                  >
                    Purchase Course
                  </Button>
                </div>
                <div className="bg-white-A700 hover:cursor-pointer flex flex-1 flex-col items-start justify-start p-5 rounded-[10px] hover:shadow-bs3 hover:w-full w-full">
                  <div className="flex flex-col font-metropolis items-start justify-start w-full">
                    <Img
                      className="h-[30px] w-[30px]"
                      src="src/assets/images/img_thumbsup.svg"
                      alt="thumbsup"
                    />
                    <Text
                      className="mt-[13px] text-gray-900 text-xl"
                      size="txtMetropolisSemiBold20Gray900"
                    >
                      Premium Pack
                    </Text>
                    <Line className="bg-gray-900_26 h-px mt-4 w-full" />
                  </div>
                  <div className="flex flex-col font-metropolis gap-[18px] items-start justify-start mt-5 w-[91%] md:w-full">
                    <CheckBox
                      className="font-medium leading-[normal] text-gray-700 text-left text-sm"
                      inputClassName="mr-[5px]"
                      name="3hdvideolessons_One"
                      id="3hdvideolessons_One3"
                      label="3 HD video lessons & tutorials"
                    ></CheckBox>
                    <CheckBox
                      className="font-medium leading-[normal] text-gray-700 text-left text-sm"
                      inputClassName="mr-[5px]"
                      name="1officialexam"
                      id="1officialexam3"
                      label="1 Official exam"
                    ></CheckBox>
                    <CheckBox
                      className="font-medium leading-[normal] text-gray-700 text-left text-sm"
                      inputClassName="mr-[5px]"
                      name="100practiceques_One"
                      id="100practiceques_One3"
                      label="100 Practice questions"
                    ></CheckBox>
                    <CheckBox
                      className="font-medium leading-[normal] text-gray-700 text-left text-sm"
                      inputClassName="mr-[5px]"
                      name="1monthsubscript_One"
                      id="1monthsubscript_One3"
                      label="1 Month subscriptions"
                    ></CheckBox>
                    <CheckBox
                      className="font-medium leading-[normal] text-gray-700 text-left text-sm"
                      inputClassName="mr-[5px]"
                      name="1freebook"
                      id="1freebook3"
                      label="1 Free book"
                    ></CheckBox>
                    <CheckBox
                      className="font-medium leading-[normal] text-gray-700 text-left text-sm"
                      inputClassName="mr-[5px]"
                      name="practicequizes"
                      id="practicequizes2"
                      label="Practice quizes & assignments"
                    ></CheckBox>
                    <CheckBox
                      className="font-medium leading-[normal] text-gray-700 text-left text-sm"
                      inputClassName="mr-[5px]"
                      name="indepthexplanat_One"
                      id="indepthexplanat_One"
                      label="In depth explanations"
                    ></CheckBox>
                    <CheckBox
                      className="font-medium leading-[normal] text-gray-700 text-left text-sm"
                      inputClassName="mr-[5px]"
                      name="personalinstruc_One"
                      id="personalinstruc_One"
                      label="Personal instructor Assitance"
                    ></CheckBox>
                  </div>
                  <Text
                    className="mt-[19px] text-3xl sm:text-[26px] md:text-[28px] text-gray-900"
                    size="txtMetropolisSemiBold30"
                  >
                    $1200
                  </Text>
                  <Button
                    className="cursor-pointer font-inter font-medium leading-[normal] min-w-[265px] mt-[30px] text-base text-center"
                    shape="round"
                    size="lg"
                    variant="outline"
                  >
                    Purchase Course
                  </Button>
                </div>
              </List>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default PricingPage;
