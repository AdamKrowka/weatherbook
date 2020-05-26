const APIKEY = "c68dd49b4150a92e79f8a0254fd0d999";

export const getData = async (city) => {
  const data = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${city.coord.lat}&lon=${city.coord.lon}&units=metric&appid=${APIKEY}`
  )
    .then((res) => res.json())
    .then((json) => json);
  return data;
};
