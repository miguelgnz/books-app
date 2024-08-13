import BooksList from "@/components/BooksList";
import ChangeThemeButton from "@/components/ChangeThemeButton";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "7rem",
      }}
    >
      <div>
        <h1 style={{ fontSize: "44px" }}>BOOK EXPLORER</h1>
        <ChangeThemeButton />
      </div>
      <BooksList />
    </div>
  );
}
