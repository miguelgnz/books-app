"use client";

import { Pagination } from "@nextui-org/react";

import { useAppDispatch, useAppSelector } from "@/redux/store";
import { fetchBooks } from "@/redux/features/books-slice";
import { useEffect, useState } from "react";

function BooksList() {
  const dispatch = useAppDispatch();
  let booksData = useAppSelector((state) => state.booksReducer.value);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(2);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const currentPost = booksData.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "112px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "112px",
        }}
      >
        {currentPost.length > 0 &&
          currentPost.map((book, index) => {
            return (
              <div
                key={index}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "48px",
                  border: "1px solid grey",
                  borderRadius: "12px",
                  width: "220px",
                  height: "320px",
                  padding: '8px'
                }}
              >
                <h2 style={{textAlign: 'center', fontSize: '22px'}}>{book.name}</h2>
                <h3>{book.publisher}</h3>
                <h3>{`Pages: ${book.numberOfPages}`}</h3>
              </div>
            );
          })}
      </div>
      <Pagination
        initialPage={1}
        total={booksData.length / postsPerPage}
        page={currentPage}
        onChange={(page) => {
          setCurrentPage(page);
        }}
      />
    </div>
  );
}

export default BooksList;
