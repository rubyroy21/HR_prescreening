import { useState } from "react";
import { TiDelete } from "react-icons/ti";
import { AiOutlineDropbox } from "react-icons/ai";

import "./FileUpload.css";

function FileUpload() {
  const [arrayItem, setArrayItem] = useState<File[]>([]);
  //   const [status, setStatus] = useState(false);

  const handleDelete = (name: any) => {
    console.log("delete", name);
    const newList = arrayItem.filter((item: any) => item.name !== name);

    setArrayItem(newList);
  };
  const newItem = arrayItem.map((value) => {
    console.log("valueee", value);
    let name = value.name;
    return (
      <>
        <div className="listItem">
          <div className="valueName">{name}</div>
          <div className="btnValue">
            <button onClick={() => handleDelete(name)} className="deleteBtn">
              <TiDelete size={24} color="red" />
            </button>
          </div>
        </div>
      </>
    );
  });
  console.log(newItem, "newItem");

  function saveItem() {
    localStorage.setItem(
      "dataKey",
      JSON.stringify([...arrayItem].map((file) => file.name))
    );
  }

  console.log("arrayItem", arrayItem);
  // const dragItem = .map((value) => {
  //   return <div>{value}</div>
  // })
  function fileSelect(event: any) {
    setArrayItem((oldItem) => {
      return [...oldItem, ...event.target.files];
    });
    console.log("Button click");
  }
  const handleDragOver = (event: any) => {
    console.log("drag");
    event.preventDefault();
  };

  const handleDrop = (event: any) => {
    event.preventDefault();
    setArrayItem((oldItem) => {
      return [...oldItem, ...event.dataTransfer.files];
    });

    // console.log(arrayItem);
  };

  //   const handleChange = () => {
  //     setStatus(!status);
  //   };

  return (
    <div className="body-style">
      <div className="box">
        <div className="header">
          <div className="maincontainer">
            {/* <label className="formbold-form-label formbold-form-label-2">
              Upload File
            </label> */}

            <div className="formbold-mb-5 formbold-file-input">
              <input
                type="file"
                name="file"
                id="file"
                // accept=".csv"
                onChange={fileSelect}
              />
              <label htmlFor="file">
                <div
                  className="dropzone"
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                >
                  <div>
                    <span className="formbold-drop-file">
                      <AiOutlineDropbox size={70} />
                      <br /> Drop files here{" "}
                    </span>
                    <span className="formbold-or"> Or </span>
                    <span className="formbold-browse"> Browse </span>
                  </div>
                </div>
              </label>
            </div>

            <div className="fileZone">
              <div className="newItems">
                <br />
                {newItem}

                {/* <button></button> */}
                <br />
              </div>
              <div className="bottomDiv">
                <button className="formbold-upload" onClick={saveItem}>
                  Upload Data
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default FileUpload;
