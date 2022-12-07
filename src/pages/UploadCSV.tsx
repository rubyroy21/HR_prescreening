import React from "react";
import FileUpload from "../components/FileUpload/FileUpload";
import "../styles/UploadCSV.css";

const UploadCSV = () => {
  // const onFileChange = (files: any) => {
  //   console.log(files);
  // };

  return (
    <div>
      <div className="content">
        <FileUpload />
      </div>
    </div>
  );
};

export default UploadCSV;
