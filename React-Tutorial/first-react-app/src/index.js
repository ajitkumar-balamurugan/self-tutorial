import React from "react";
// import ReactDOM from "react-dom";
import ReactDOM from "react-dom/client";
import "./index.css";

const books = [
  {
    id: 1,
    image:
      "https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/81m9fP+LIPL._UX300__PJku-sticker-v7,TopRight,0,-50_AC_UL600_SR600,400_.jpg",
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
  },
  {
    id: 2,
    image:
      "https://images-eu.ssl-images-amazon.com/images/W/WEBP_402378-T2/images/I/81YoazRCtBL._UX300__PJku-sticker-v7,TopRight,0,-50_AC_UL160_SR160,160_.jpg",
    title: "Harry Potter and the Goblet of Fire",
    author: "J.K. Rowling",
  },
];

// function test() {
//   return (
//     <section className="booklist">
//       <Book />
//       <Book />
//     </section>
//   );
// }
const Book = ({ image, title, author, children }) => {
  return (
    <article className="book">
      <img src={image} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {/* {children} */}
    </article>
  );
};

const allBooks = books.map((book) => {
  return <Book key={book.id} {...book}></Book>;
});

function BookList() {
  return (
    <section className="booklist">
      {allBooks}
      {/* {books.map((book) => {
        return (
          <Book
            image={book.image}
            title={book.title}
            author={book.author}
          ></Book>
        );
      })} */}
      {/* <Book author="some author" title="some title" />
      <Book /> */}
    </section>
  );
}

// ReactDOM.render(<Greeting></Greeting>,document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById("root")); // createRoot(container!) if you use TypeScript
root.render(<BookList />);
