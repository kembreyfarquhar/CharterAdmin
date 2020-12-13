const faker = require("faker");

function generateFakeCustomer() {
  const first_name = faker.name.firstName();
  const last_name = faker.name.lastName();
  const email = faker.internet.email(first_name, last_name, "gmail.com");
  const password = faker.internet.password(10);
  return {
    first_name,
    last_name,
    email,
    password,
  };
}

/*
let fakeCustomers = [];

faker.seed(123);

for (let i = 0; i < 25; i++) {
  fakeCustomers.push(generateFakeCustomer());
}
*/

const customers = [
  {
    first_name: "Maurine",
    last_name: "Ratke",
    email: "Maurine42@gmail.com",
    password: "6bUeeOIkHb",
  },
  {
    first_name: "Korey",
    last_name: "Kshlerin",
    email: "Korey39@gmail.com",
    password: "GAfJ8cFYg2",
  },
  {
    first_name: "Idella",
    last_name: "Daniel",
    email: "Idella53@gmail.com",
    password: "dSIqOegBeH",
  },
  {
    first_name: "Enola",
    last_name: "O'Keefe",
    email: "Enola.OKeefe@gmail.com",
    password: "67ijJI1OIu",
  },
  {
    first_name: "Hershel",
    last_name: "Rohan",
    email: "Hershel_Rohan94@gmail.com",
    password: "QPMWPHasx8",
  },
  {
    first_name: "Bernardo",
    last_name: "Kub",
    email: "Bernardo_Kub@gmail.com",
    password: "7RJhNolZTJ",
  },
  {
    first_name: "Evelyn",
    last_name: "Altenwerth",
    email: "Evelyn34@gmail.com",
    password: "HbastQLXpa",
  },
  {
    first_name: "Justen",
    last_name: "Spinka",
    email: "Justen8@gmail.com",
    password: "iu823OW5Ru",
  },
  {
    first_name: "Carolanne",
    last_name: "Murazik",
    email: "Carolanne_Murazik99@gmail.com",
    password: "NYUQ0icQbw",
  },
  {
    first_name: "Kayden",
    last_name: "Erdman",
    email: "Kayden.Erdman@gmail.com",
    password: "xrpdBF6EFU",
  },
  {
    first_name: "Meagan",
    last_name: "Lynch",
    email: "Meagan.Lynch35@gmail.com",
    password: "iYbtFi7CAs",
  },
  {
    first_name: "Jonas",
    last_name: "Barrows",
    email: "Jonas_Barrows@gmail.com",
    password: "7uL_3qUnrV",
  },
  {
    first_name: "Gerda",
    last_name: "Pagac",
    email: "Gerda80@gmail.com",
    password: "Bs1HoANURW",
  },
  {
    first_name: "Kraig",
    last_name: "Lebsack",
    email: "Kraig0@gmail.com",
    password: "x_wB4TKRvV",
  },
  {
    first_name: "Dessie",
    last_name: "Rau",
    email: "Dessie_Rau@gmail.com",
    password: "mBFfs00ZsB",
  },
  {
    first_name: "Wilmer",
    last_name: "Shanahan",
    email: "Wilmer6@gmail.com",
    password: "I4uKwU3ny7",
  },
  {
    first_name: "Keshaun",
    last_name: "Bednar",
    email: "Keshaun.Bednar@gmail.com",
    password: "hNgQHd9pE0",
  },
  {
    first_name: "Raegan",
    last_name: "Sauer",
    email: "Raegan.Sauer68@gmail.com",
    password: "G3OuPcGJ2J",
  },
  {
    first_name: "Alysson",
    last_name: "Runolfsdottir",
    email: "Alysson_Runolfsdottir@gmail.com",
    password: "tXXnNA1yhW",
  },
  {
    first_name: "Eulah",
    last_name: "Rolfson",
    email: "Eulah.Rolfson@gmail.com",
    password: "ar4owxOcFI",
  },
  {
    first_name: "Santina",
    last_name: "MacGyver",
    email: "Santina.MacGyver@gmail.com",
    password: "O4PnDMxmp_",
  },
  {
    first_name: "Katlyn",
    last_name: "Koepp",
    email: "Katlyn_Koepp58@gmail.com",
    password: "I4eEbpYMgF",
  },
  {
    first_name: "Jaquelin",
    last_name: "Prosacco",
    email: "Jaquelin96@gmail.com",
    password: "T_XhjQWxcO",
  },
  {
    first_name: "Maia",
    last_name: "Wuckert",
    email: "Maia32@gmail.com",
    password: "l3RIAkaHNm",
  },
  {
    first_name: "Cheyenne",
    last_name: "Mitchell",
    email: "Cheyenne65@gmail.com",
    password: "qh2SHP71xa",
  },
];

module.exports = customers;
