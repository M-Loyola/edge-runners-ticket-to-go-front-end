const manilaMovies = [
  {
    id: 1,
    imageUrl: "https://i.pinimg.com/originals/5f/1c/3f/5f1c3f76297204de2346b0bfce854000.jpg",
    title: "Movie Title 1 in Manila",

  },
  {
    id: 2,
    imageUrl: "https://i.pinimg.com/originals/5f/1c/3f/5f1c3f76297204de2346b0bfce854000.jpg",
    title: "Movie Title 1 in Manila",

  },
  {
    id: 3,
    imageUrl: "https://i.pinimg.com/originals/5f/1c/3f/5f1c3f76297204de2346b0bfce854000.jpg",
    title: "Movie Title 1 in Manila",

  }
]

const ortigasMovies = [
  {
    id: 1,
    imageUrl: "https://i.pinimg.com/originals/5f/1c/3f/5f1c3f76297204de2346b0bfce854000.jpg",
    title: "Movie Title 1 in Ortigas",

  },
  {
    id: 2,
    imageUrl: "https://i.pinimg.com/originals/5f/1c/3f/5f1c3f76297204de2346b0bfce854000.jpg",
    title: "Movie Title 1 in Ortigas",

  },
  {
    id: 3,
    imageUrl: "https://i.pinimg.com/originals/5f/1c/3f/5f1c3f76297204de2346b0bfce854000.jpg",
    title: "Movie Title 1 in Ortigas",

  }
]

const lagunaMovies = [
  {
    id: 1,
    imageUrl: "https://i.pinimg.com/originals/5f/1c/3f/5f1c3f76297204de2346b0bfce854000.jpg",
    title: "Movie Title 1 in Laguna",

  },
  {
    id: 2,
    imageUrl: "https://i.pinimg.com/originals/5f/1c/3f/5f1c3f76297204de2346b0bfce854000.jpg",
    title: "Movie Title 1 in Laguna",

  },
  {
    id: 3,
    imageUrl: "https://i.pinimg.com/originals/5f/1c/3f/5f1c3f76297204de2346b0bfce854000.jpg",
    title: "Movie Title 1 in Laguna",

  }
]

  const data = [
    {
      id: 1,
      cinemaTitle: "Cinema 1",
      location: "Manila",
      movies : [ ...manilaMovies]
    },
    {
      id: 2,
      cinemaTitle: "Cinema 2",
      location: "Laguna",
      movies : [ ...lagunaMovies]
    },
    {
      id: 3,
      cinemaTitle: "Cinema 3",
      location: "Ortigas",
      movies : [ ...ortigasMovies]
    }
  ]

  export default data;

 