import data from "./data.json";

const fetchData = async () => {
  try {
    return data;
  } catch (error) {
    console.log("Error fetching data:", error);
    throw error;
  }
};

export default fetchData;
