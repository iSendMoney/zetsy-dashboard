import React from "react";
import "./styles/bulkupload.style.css";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["csv", "xls", "xlsx"];

export default function BulkUpload() {
  const [files, setFile] = React.useState([]);

  const handleChange = (file) => {
    console.log(file);
    setFile(file);
  };

  return (
    <div className="dashboard__bulkUploadContainer">
      <div className="header">
        <div>
          <h1>Bulk Upload</h1>
          <div className="subtitle">
            Dashboard - Ecommerce - New Product - Bulk Upload
          </div>
        </div>
        <a href="">
          <i className="ri-download-line"></i> Download Sample
        </a>
      </div>

      <FileUploader
        multiple={false}
        handleChange={handleChange}
        name="file"
        types={fileTypes}
      />
    </div>
  );
}
