import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./productDetailsTable.css";


export default function ProductDetailsTableContainer({ productDetailsTableData}) {
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
        {productDetailsTableData?.map((item, index) => (
          <tr key={index}>
            <td>{item.label}:</td>
            <td>{item.value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
