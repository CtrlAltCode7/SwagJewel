import React from "react";
import "./productDetailsSetSeparateStone.css"

export default function ProductDetailsSetSeparateStone() {
  const jsonData = [
    {
      Quantity: "24",
      Stone: "MARQUISE",
      Size: "2.50x1.25",
      "Setting Type": "Prong",
      Actions: [
        {
          label: "View Available Gemstones",
          url: "/browse/gemstones/shop-by-stone-size/?dimensionid=3385&shape=MARQUISE&size=2.50x1.25&recommendationSource=CanBeSetWith",
        },
        {
          label: "View Available Diamonds",
          url: "/browse/diamonds/listingbysize/?stoneshape=MARQUISE&size=2.50x1.25&recommendationSource=CanBeSetWith",
        },
      ],
    },
    {
      Quantity: "3",
      Stone: "ROUND",
      Size: "1.70",
      "Setting Type": "Prong",
      Actions: [
        {
          label: "View Available Gemstones",
          url: "/browse/gemstones/shop-by-stone-size/?dimensionid=1902&shape=ROUND&size=1.70&recommendationSource=CanBeSetWith",
        },
        {
          label: "View Available Diamonds",
          url: "/browse/diamonds/listingbysize/?stoneshape=ROUND&size=1.70&recommendationSource=CanBeSetWith",
        },
      ],
    },
  ];

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
          {jsonData.map((item, index) => (
            <tr key={index} style={{
                borderBottom: "1px solid #ccc"
            }}>
              <td style={{ border: "0px solid #ccc", padding: "8px" }}>
                {item.Quantity}
              </td>
              <td style={{ border: "0px solid #ccc", padding: "8px" }}>
                {item.Stone}
              </td>
              <td style={{ border: "0px solid #ccc", padding: "8px" }}>
                {item.Size}
              </td>
              <td style={{ border: "0px solid #ccc", padding: "8px" }}>
                {item["Setting Type"]}
              </td>
              <td
                style={{
                //   border: "1px solid #ccc",
                  padding: "8px",
                  textAlign: "right",
                  display: "flex",
                  justifyContent: "end",
                  gap: "1rem"
                }}
                className="actionTableCell"
              >
                {item.Actions.map((action, idx) => (
                  <a
                    key={idx}
                    className="display-block-xs"
                    // href={action.url}
                    // onClick={() => ProductPageEventTrack("ViewGemstones", "")}
                    // style={{
                    //   display: "block",
                    //   textDecoration: "none",
                    //   marginLeft: "0",
                    //   textDecorationLine: "underline",
                    //   textDecorationColor: "inherit",
                    //   textDecorationThickness: "from-font",
                    // //   color: "#555",
                    // }}
                  >
                    {action.label}
                  </a>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
