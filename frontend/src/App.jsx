import { Header, Card, FlexBox } from "./components";
import { footerContent, getCardData, dataFilter } from "./utils";
import homeIcon from "./assets/home.svg";
import { useEffect, useState } from "react";

export default function App() {
  const [cardData, setCardData] = useState([]);
  const [serchQuery, setSearchQuery] = useState("");

  // To Fecth the data from the server and set the state of cardData
  useEffect(() => {
    const fetchData = async () => {
      const data = await getCardData();
      setCardData(data);
    };
    fetchData();
  }, []);

  // To handle the search query and filter the data
  // update the state of cardData and searchQuery
  const handleSearchCallback = async (search) => {
    const data = await dataFilter(search);
    setSearchQuery(search);
    setCardData(data);
  };

  return (
    <>
      {/* HEADER */}
      <section id="header">
        <Header handleSearchCallback={handleSearchCallback} />
      </section>

      {/* CONTENT */}
      <section id="content">
        <div className="text-2xl font-semibold mt-3 p-5 text-center">
          {serchQuery ? `Search results for "${serchQuery}"` : "All Articles"}
          {cardData.length === 0 && (
            <p className="text-lg font-normal my-10">No results found...</p>
          )}
        </div>

        {/* ARTICLE AS CARDS    */}
        <div className="w-3/4 mx-auto grid grid-cols-2 gap-28 px-40 py-20">
          {cardData.slice(0, 6).map((card) => {
            return (
              <Card
                key={card._id}
                title={card.title}
                description={card.description}
                link={card.link}
              />
            );
          })}
        </div>
      </section>

      {/* FOOTER  */}
      <section id="footer">
        <div className="bg-black flex gap-28 justify-evenly p-14">
          {footerContent.map((content) => {
            return (
              <FlexBox title={content.title} key={content.id}>
                {content.content.map((item) => {
                  return <p key={item}>{item}</p>;
                })}
                {content.title === "Company" && (
                  <>
                    <p className="font-semibold mt-6">Contact Us</p>
                    <p className="text-sm">info@abstract.com</p>
                  </>
                )}
              </FlexBox>
            );
          })}
          <div className="text-white flex flex-col-reverse ">
            <p>All rights reserverd.</p>
            <p>Abstract Studio Design, Inc.</p>
            <p>© Copyright 2022</p>
            <img src={homeIcon} alt="" width={32} height={32} />
          </div>
        </div>
      </section>
    </>
  );
}
