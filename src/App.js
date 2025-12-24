import { Routes, Route } from "react-router-dom";
import NewCollection from "./components/NewCollection/NewCollection";
import DetailProduct from "./Router/DetailProduct";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<NewCollection />} />
      <Route path="/detailproduct/:id" element={<DetailProduct />} />
    </Routes>
  );
}
