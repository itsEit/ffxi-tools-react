import { Routes, Route } from "react-router-dom";
import Content from "../Content";
import ItemUpdate from "../pages/ItemUpdate";
import PageNotFound from "../pages/PageNotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Content />} />
      <Route path="/admin/item" element={<ItemUpdate />} />
      <Route path="login" element={<Content />} />
      <Route path="register" element={<Content />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default AppRoutes;
