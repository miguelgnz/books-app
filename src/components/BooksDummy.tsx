import SearchBar from "./SearchBar";
import booksData from "@/utils/books.json";

export default function BooksDummy() {
  return (
    <div>
      <SearchBar data={booksData} />
    </div>
  );
}
