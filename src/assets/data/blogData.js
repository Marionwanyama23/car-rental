// import images from all-images/blog-img directory
import img01 from "../all-images/blog-img/blog-1.jpg";
import img02 from "../all-images/blog-img/blog-2.jpg";
import img03 from "../all-images/blog-img/blog-3.jpg";

const blogData = [
  {
    id: 1,
    title: "The best way to drive cars",
    author: "Marion",
    date: "12 May, 2022",
    time: "9pm",
    imgUrl: img01,
    description:
    "Get farmiliar with your car",
    quote:
    "Correct your sitting position",
  },

  {
    id: 2,
    title: "If your car battery is down",
    author: "Mary",
    date: "1 Dec, 2021",
    time: "1pm",
    imgUrl: img02,
    description:
    "Always grease your car",
    quote:
      "Your car is like your child. ",
  },

  {
    id: 3,
    title: "The best way to give trip",
    author: "Khalayi",
    date: "20 June, 2021",
    time: "6am",
    imgUrl: img03,
    description:
    "Dont overspeed",
    quote:
    "Maintain the right speed ",
  },
];

export default blogData;
