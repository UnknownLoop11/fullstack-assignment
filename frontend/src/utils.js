// Description: Utility functions and data for the application.

// footer data
const footerContent = [
  {
    id: 1,
    title: "Abstract",
    content: ["Branches"],
  },
  {
    id: 2,
    title: "Resources",
    content: ["Blog", "Help Center", "Release Notes", "Status"],
  },
  {
    id: 3,
    title: "Community",
    content: ["Twitter", "LinkedIn", "Facebook", "Dribbble", "Podcast"],
  },
  {
    id: 4,
    title: "Company",
    content: ["About", "Careers", "Legal"],
  },
];

export { footerContent };

// Backend API URL
const serverUrl =
  import.meta.env.VITE_SERVER_ENDPOINT || "http://localhost:3000";

// Fetch all the card data from the server
const getCardData = async () => {
  try {
    const response = await fetch(`${serverUrl}/cards`, {
      method: "GET",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching card data", error);
    alert("Error fetching card data");
  }
};

// Filter the card data based on search query
const dataFilter = async (searchQuery) => {
  try {
    const data = await getCardData();
    const filteredData = data.filter((card) => {
      return (
        card.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        card.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
    return filteredData;
  } catch (error) {
    console.error("Error filtering data", error);
    alert("Error filtering data");
  }
};

export { getCardData, dataFilter };
