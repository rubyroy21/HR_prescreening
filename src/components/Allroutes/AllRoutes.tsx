import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import QuestionBank from "../../pages/QuestionBank";
import UploadCSV from "../../pages/UploadCSV";
import SideNav from "../SideNav/SideNav";

const AllRoutes = () => {
  return (
    <BrowserRouter>
      <SideNav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/uploadCsv" element={<UploadCSV />} />
          <Route path="/general" element={<QuestionBank />} />
        </Routes>
      </SideNav>
    </BrowserRouter>
  );
};

export default AllRoutes;
