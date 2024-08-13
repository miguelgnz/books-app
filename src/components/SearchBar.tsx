"use client";

import { Input } from "@nextui-org/react";
import { useState } from "react";

interface Book {
  title: string;
  author: string;
  year: number;
}

interface SearchBarProps {
  data: Book[];
}

export default function SearchBar({ data }: SearchBarProps) {
  const [filteredData, setFilteredData] = useState<Book[]>([]);

  const handleOnChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchParam = event.target.value;

    if (searchParam === "") {
      setFilteredData([]);
    } else {
      const newFilter = data.filter((book) => {
        return book.title.toLowerCase().includes(searchParam.toLowerCase());
      });

      setFilteredData(newFilter);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "600px",
        gap: "4px",
      }}
    >
      <Input
        type="text"
        placeholder="Search for a book"
        color="primary"
        onChange={handleOnChangeInput}
      />
      {filteredData.length !== 0 && (
        <div
          style={{
            height: "200px",
            backgroundColor: "#006fee",
            overflow: "hidden",
            overflowY: "scroll",
          }}
        >
          {filteredData.map((book, index) => {
            return <p key={index}>{book.title}</p>;
          })}
        </div>
      )}
    </div>
  );
}
