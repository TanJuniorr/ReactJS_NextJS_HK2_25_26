import { useState } from "react"
import Bai1_ProductCard from "./pages/Bai1_ProductCard"
import Bai2_ButtonComponent from "./pages/Bai2_ButtonComponent"
import Bai3_Alert from "./pages/Bai3_Alert"

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
        
         <button
          onClick={() => setPage("bai2")}
          style={{
            padding: "8px 14px",
            cursor: "pointer",
            border: "none",
          }}
        >
          Bài 2
        </button>

        <button
          onClick={() => setPage("bai3")}
          style={{
            padding: "8px 14px",
            cursor: "pointer",
            border: "none",
          }}
        >
          Bài 3
        </button>
      </div>

      {page === "bai1" && <Bai1_ProductCard />}
      {page === "bai2" && <Bai2_ButtonComponent />}
      {page === "bai3" && <Bai3_Alert />}
    </div>
  )
}