const fetchDrinks = async (url) => {
  try {
    let data = await fetch(url);
    data = data.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default fetchDrinks;
