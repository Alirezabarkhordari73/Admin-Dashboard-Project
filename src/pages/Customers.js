import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { Header } from "../components";
import { customersData, customersGrid } from "../data/data";

const Customers = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Customers" />
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <div className="flex justify-center items-center gap-3 text-lg">
                    <input
                      type="text"
                      placeholder="Search name"
                      className="bg-gray-100 w-56 h-8 rounded-md p-2 border-gray-50 focus:outline-none"
                    />
                  </div>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableHead>
              <TableRow>
                {customersGrid.map((item, index) => (
                  <TableCell className="bg-gray-100 cursor-pointer" key={index}>
                    {item.headerName}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {customersData.map((item) => (
                <TableRow
                  key={item.CustomerID}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    <img
                      src={item.CustomerImage}
                      width={80}
                      height={80}
                      alt={item.CustomerName}
                      className="rounded-full"
                    />
                  </TableCell>
                  <TableCell>{item.CustomerName}</TableCell>
                  <TableCell>{item.ProjectName}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          (item.Status === "Pending" && "bg-yellow-600") ||
                          (item.Status === "Completed" && "bg-green-600") ||
                          (item.Status === "Active" && "bg-blue-600") ||
                          (item.Status === "Cancel" && "bg-purple-600") ||
                          (item.Status === "Reject" && "bg-red-600")
                        }`}
                        Status
                      />
                      {item.Status}
                    </div>
                  </TableCell>
                  <TableCell>{item.Weeks}</TableCell>
                  <TableCell>{item.Budget}</TableCell>
                  <TableCell>{item.Location}</TableCell>
                  <TableCell>{item.CustomerID}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Customers;
