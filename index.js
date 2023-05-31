const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const weather = document.querySelector(".weather");
const searchBox = document.querySelector(".searchBox");

const api = {
  base: "https://api.weatherapi.com/v1/current.json",
  key: "7c42ba48bd8e439f9d1124300233005",
};

async function fetchData(cityName) {
  try {
    const response = await fetch(`${api.base}?key=${api.key}&q=${cityName}`, {
      mode: "cors",
    });
    const data = await response.json();
    console.log(data);
    temp.innerText = `${data.current.temp_c} °C`;
    city.innerText = `${data.location.name.toUpperCase()} ${
      data.location.country
    }`;
    weather.innerText = data.current.condition.text;
  } catch (err) {
    console.log(err);
  }
}

searchBox.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    console.log(e.target.value);
    fetchData(e.target.value);
    searchBox.value = "";
  }
});
