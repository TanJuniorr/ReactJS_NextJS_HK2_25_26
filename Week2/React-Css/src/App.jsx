import { useState } from "react"
import Bai1_ProductCard from "./pages/Bai1_ProductCard"

export default function App() {
  const [page, setPage] = useState("bai1")

  return (
    <div>
      <div
        style={{
          padding: "15px",
          background: "#000000",
          display: "flex",
          gap: "10px",
        }}
      >
        <button
          onClick={() => setPage("bai1")}
          style={{
            padding: "8px 14px",
            cursor: "pointer",
            border: "none",
          }}
        >
          Bài 1
        </button>
      </div>

      {page === "bai1" && <Bai1_ProductCard />}
    </div>
  )
}