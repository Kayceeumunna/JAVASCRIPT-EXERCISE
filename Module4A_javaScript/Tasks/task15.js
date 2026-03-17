const books = [
  {
    title: "Heart Attack",
    description: "A story of Love and Betrayal.",
    numberOfPages: 380,
    authour: "Kelechi Umunna",
    reading: true
  },
  {
    title: "Benson Power",
    description: "A dystopian novel about power and Mentorship.",
    numberOfPages: 111,
    authour: "Felix Bates",
    reading: false
  },
  {
    title: "Hey Lucy",
    description: "An autobiography.",
    numberOfPages: 510,
    authour: "Lucy Tens",
    reading: true
  },
  
];


console.log("Books currently being read:");

for (let i = 0; i < books.length; i++) {
  if (books[i].reading === true) {
    console.log(`- ${books[i].title} by ${books[i].authour}`);
  }
}


