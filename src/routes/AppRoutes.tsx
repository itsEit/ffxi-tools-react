import { Routes, Route } from "react-router-dom";
import Content from "../Content";
import ItemUpdate from "../pages/ItemUpdate";
import PageNotFound from "../pages/PageNotFound";
import Box from "@mui/material/Box";

const AppRoutes = () => {
  return (
    <Box component="main" sx={{ flex: 1, py: 3, px: 3, bgcolor: "#eaeff1" }}>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/admin/item" element={<ItemUpdate />} />
        <Route path="login" element={<Content />} />
        <Route path="register" element={<Content />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Box>
  );
};

export default AppRoutes;
