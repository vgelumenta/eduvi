import React, { useState } from "react";
import {
  Button,
  Img,
  Input,
  List,
  SelectBox,
  Text,
  Header,
  DisplayBook,
  Footer,
} from "index";
import Books from "../data/Books.json";

const sortbyOptionsList = [
  { label: "Default", value: "default" },
  { label: "Name", value: "name" },
  { label: "Price Low to High", value: "priceLowToHigh" },
  { label: "Price High to Low", value: "priceHighToLow" },
];

const ShopPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("default");

  const filteredBooks = Books.filter((book) =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortBooks = (option) => {
    switch (option) {
      case "name":
        return [...filteredBooks].sort((a, b) =>
          a.title.localeCompare(b.title)
        );
      case "priceLowToHigh":
        return [...filteredBooks].sort((a, b) => a.price - b.price);
      case "priceHighToLow":
        return [...filteredBooks].sort((a, b) => b.price - a.price);
      default:
        return [...filteredBooks];
    }
  };

  const sortedBooks = sortBooks(sortOption);

  return (
    <>
      <div className="bg-gray-100 flex flex-col font-metropolis items-center justify-start mx-auto p-7 sm:px-5 w-full">
        <div className="flex flex-col items-center justify-start max-w-7xl mb-[69px] mx-auto md:px-5 w-full">
          <div className="flex flex-col gap-[30px] items-center justify-center w-full">
            <Header className="flex sm:flex-col flex-row sm:gap-5 items-center justify-center w-full" />
            <div className="bg-deep_purple-50 flex sm:flex-col flex-row sm:gap-5 items-start justify-center p-5 rounded-[20px] w-full">
              <Text
                className="ml-2.5 sm:ml-[0] text-base text-gray-900_66 tracking-[0.48px]"
                size="txtMetropolisMedium16"
              ></Text>
              <Text
                className="leading-[50.00px] sm:mt-0 mt-[65px] sm:text-[35px] md:text-[41px] text-[45px] text-gray-900"
                size="txtMetropolisSemiBold45"
              >
                <>
                  Eduvi Online
                  <br />
                  Book Shop
                </>
              </Text>
              <Img
                className="md:flex-1 h-[210px] sm:h-auto sm:ml-[0] ml-[243px] sm:mt-0 mt-5 object-cover w-[31%] md:w-full"
                src="src/assets/images/img_kisspngbookcas.png"
                alt="kisspngbookcas"
              />
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-inter md:gap-10 items-center justify-center mt-10 w-full">
            <div className="flex md:flex-1 flex-col items-center justify-center w-[66%] md:w-full">
              <div className="flex flex-col items-center justify-center w-full">
                {/* Search & Sort */}

                <div className="flex sm:flex-col flex-row font-metropolis gap-[15px] items-center justify-between mt-[30px] w-full">
                  <Input
                    name="search"
                    placeholder="Search Book"
                    className="font-medium leading-[normal] p-0 placeholder:text-gray-700_99 text-base text-left w-full"
                    wrapClassName="flex sm:flex-1 rounded-[10px] sm:w-full"
                    type="text"
                    value={searchTerm}
                    onChange={(value) => setSearchTerm(value)}
                    suffix={
                      <div className="h-[46px] ml-[35px] w-[46px] bg-deep_purple-A200 p-[11px] rounded-lg flex justify-center items-center">
                        <Img
                          className="h-6 my-auto"
                          src="src/assets/images/img_search.svg"
                          alt="search"
                        />
                      </div>
                    }
                    color="white_A700"
                    size="xs"
                  ></Input>

                  <SelectBox
                    className="sm:flex-1 font-medium leading-[normal] text-base text-left w-[33%] sm:w-full"
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

                {/* Ends Search & Sort */}

                {/* DisplayBook */}

                <div className="gap-10 md:gap-5 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 justify-center mt-10 w-full">
                  {sortedBooks.map((book) => (
                    <div
                      className="col-xs-12 col-sm-6 col-md-4 col-lg-3"
                      key={book.id}
                    >
                      <DisplayBook {...book} />
                    </div>
                  ))}
                </div>

                {/* End DisplayBook */}

                {/* Pagination */}

                {/* <div className="flex flex-row font-metropolis items-start justify-center md:ml-[0] ml-[278px] mt-[52px] w-[34%] md:w-full">
                  <Button
                    className="flex h-11 items-center justify-center w-11"
                    shape="round"
                    color="deep_purple_50_01"
                  >
                    <Img
                      className="h-6"
                      src="src/assets/images/img_arrowleft.svg"
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
                    className="!text-blue_gray-800 cursor-pointer font-medium h-11 leading-[normal] ml-[15px] rounded-lg text-center text-lg w-11"
                    color="white_A700"
                  >
                    5
                  </Button>
                  <Text
                    className="ml-[15px] mt-[13px] text-base text-gray-900"
                    size="txtMetropolisMedium16Gray900"
                  >
                    of 80
                  </Text>
                  <Button
                    className="flex h-11 items-center justify-center ml-5 rotate-[180deg] w-11"
                    shape="round"
                  >
                    <Img
                      className="h-6"
                      src="src/assets/images/img_arrowright.svg"
                      alt="arrowright_One"
                    />
                  </Button>
                </div> */}

                {/* End Pagination */}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default ShopPage;
