import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./productDetailsTable.css";
import { fetchSingleProduct } from "../../slices/singleProductSlice";
export default function ProductDetailsTableContainer({ productDetailsTableData }) {
  const singleProduct = useSelector((state) => state.singleProduct.singleProduct);
  const Weight = singleProduct && singleProduct?.data?.Products[0].Weight;
  const Specs = singleProduct && singleProduct?.data?.Products[0].Specifications;

  let Specifications = [{
    "label": "Weight",
    "value": Weight
  },];

  {
    if (Specs) {
      for (let i = 0; i < Specs.length; i++) {
        Specifications.push({
          label: Specs[i].Name,
          value: Specs[i].Value
        });
      }
    }
  }

  console.log("Specs", Specifications);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSingleProduct());
  }, []);

  return (
    <table className="detailsTable">
      <tbody>
        <p
          style={{
            margin: "1rem 0",
            fontSize: "1.1rem",
            fontWeight: "bold",
            color: "#555"
          }}
        >
          Specifications
        </p>
        {Specifications && Specifications?.map((item, index) => (
          <tr key={index}>
            <td>{item.label}:</td>
            <td>{item.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
