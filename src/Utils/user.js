const users = [
  {
    id: 1,
    login: "admin",
    password: "admin",
    cities: [
      {
        id: 759734,
        name: "Rzeszów",
        state: "",
        country: "PL",
        coord: {
          lon: 21.99901,
          lat: 50.041321,
        },
      },
      {
        id: 6695624,
        name: "Warszawa",
        state: "",
        country: "PL",
        coord: {
          lon: 21.04191,
          lat: 52.23547,
        },
      },
    ],
  },
];

export const validate = (login, password) => {
  const user = users.find(
    (user) => user.login === login && user.password === password
  );
  if (user) return { id: user.id, login: user.login, cities: user.cities };
  return null;
};

export const addCity = (city, userID) => {
  const user = users.find((u) => u.id === userID);
  user.cities.push(city);
  return user.cities;
};

export const deleteCity = (city, userID) => {
  const user = users.find((u) => u.id === userID);
  const index = user.cities.findIndex((c) => c.id === city.id);
  user.cities.splice(index, 1);

  return user.cities;
};

export const isOnList = (city, userID) => {
  const user = users.find((u) => u.id === userID);
  const index = user.cities.find((c) => c.id === city.id);
  return index ? true : false;
};
