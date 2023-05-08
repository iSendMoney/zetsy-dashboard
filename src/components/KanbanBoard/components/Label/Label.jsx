import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { Check, X } from "react-feather";
import "./Label.css";
export default function (props) {
  const input = useRef();
  const [selectedColor, setSelectedColor] = useState("");
  const [label, setLabel] = useState("");

  const isColorUsed = (color) => {
    const isFound = props.tags.find((item) => item.color === color);

    return isFound ? true : false;
  };

  return (
    <div className="local__bootstrap">
      <div className="popover__wrapper">
        <div className="popover__content" style={{ marginBottom: "0.5rem" }}>
          <div
            className="label__heading"
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "0.5rem 0",
              // flexDirection:"column"
            }}
          >
            <p style={{ fontSize: "15px", textAlign: "center" }}>
              <b>Label</b>
            </p>
            <X
              onClick={() => props.onClose(false)}
              style={{ cursor: "pointer", width: "15px", height: "15px" }}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "column",
            }}
          >
            <p
              style={{
                color: "#5e6c84",
                display: "block",
                fontSize: "12px",
                fontWeight: "700",
                lineHeight: "16px",
              }}
              className="my-1"
            >
              Name
            </p>
            <div className="label__input" style={{ padding: "0 12px" }}>
              <input
                type="text"
                ref={input}
                defaultValue={label}
                placeholder="Name of label"
                onChange={(e) => {
                  setLabel(e.target.value);
                }}
              />
            </div>
            <p
              style={{
                color: "#5e6c84",
                display: "block",
                fontSize: "12px",
                fontWeight: "700",
                lineHeight: "16px",
              }}
              className="my-2"
            >
              Select color
            </p>
            <div
              className="color__palette"
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                margin:"0 0 10px 0",
                // gap:"10px"
              }}
            >
              {props.color.map((item, index) => (
                <span
                  onClick={() => setSelectedColor(item)}
                  key={index}
                  className={isColorUsed(item) ? "disabled__color" : ""}
                  style={{
                    backgroundColor: item,
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {selectedColor === item ? <Check className="icon__sm" /> : ""}
                </span>
              ))}
            </div>
            <div>
              <button
                className="create__btn my-2"
                onClick={() => {
                  if (label !== "") {
                    if (selectedColor === "") {
                      alert("Please select color for label.");
                    }
                    props.addTag(label, selectedColor);
                    setSelectedColor("");
                    setLabel("");
                    input.current.value = "";
                  } else return;
                }}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
