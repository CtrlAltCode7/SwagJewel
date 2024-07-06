import React from "react";
import "./productDetailsSetSeparateStone.css";
import { useSelector } from 'react-redux';

export default function ProductDetailsSetSeparateStone() {
  const singleProduct = useSelector((state) => state.singleProduct.singleProduct)
  const CanBeSetWith = singleProduct && singleProduct?.data?.Products[0].CanBeSetWith
  return (
    <>
      <table
        className="canBeSetWithTable"
        style={{
          border: "1px solid #ccc",
          borderCollapse: "collapse",
          width: "100%",
          color: "#555",
          fontSize: "14px"
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                backgroundColor: "#f2f2f2",
                padding: "8px",
                textAlign: "left",
              }}
            >
              Quantity
            </th>
            <th
              style={{
                backgroundColor: "#f2f2f2",
                padding: "8px",
                textAlign: "left",
              }}
            >
              Stone
            </th>
            <th
              style={{
                backgroundColor: "#f2f2f2",
                padding: "8px",
                textAlign: "left",
              }}
            >
              Size
            </th>
            <th
              style={{
                backgroundColor: "#f2f2f2",
                padding: "8px",
                textAlign: "left",
              }}
            >
              Setting Type
            </th>
            <th
              style={{
                backgroundColor: "#f2f2f2",
                padding: "8px",
                textAlign: "left",
              }}
            >
              &nbsp;
            </th>
          </tr>
        </thead>
        <tbody>
          {CanBeSetWith && CanBeSetWith.map((item, index) => (
            <tr key={index} style={{
              borderBottom: "1px solid #ccc"
            }}>
              <td style={{ border: "0px solid #ccc", padding: "8px" }}>
                {item.Quantity}
              </td>
              <td style={{ border: "0px solid #ccc", padding: "8px" }}>
                {item.Shape}
              </td>
              <td style={{ border: "0px solid #ccc", padding: "8px" }}>
                {item.Size}
              </td>
              <td style={{ border: "0px solid #ccc", padding: "8px" }}>
                {item.SettingType}
              </td>
              <td
                style={{
                  padding: "8px",
                  textAlign: "right",
                  display: "flex",
                  justifyContent: "end",
                  gap: "1rem"
                }}
                className="actionTableCell"
              >
                <a
                  className="display-block-xs"
                  style={{
                    display: "block",
                    textDecoration: "none",
                    marginLeft: "0",
                    textDecorationLine: "underline",
                    textDecorationColor: "inherit",
                    textDecorationThickness: "from-font",
                  }}
                >
                  <div> View Available Gemstones </div>
                </a>
                <a
                  className="display-block-xs"
                  style={{
                    display: "block",
                    textDecoration: "none",
                    marginLeft: "0",
                    textDecorationLine: "underline",
                    textDecorationColor: "inherit",
                    textDecorationThickness: "from-font",
                    //   color: "#555",
                  }}
                >
                  <div> View Available Gemstones </div>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
