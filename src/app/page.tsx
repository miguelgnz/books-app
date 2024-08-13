import BooksList from "@/components/BooksList";

export default function Home() {
  return (
    <div
      className="font-bold"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: '7rem'
      }}
    >
      <h1 style={{fontSize: '44px'}}>BOOK EXPLORER</h1>
      <BooksList />
    </div>
  );
}
