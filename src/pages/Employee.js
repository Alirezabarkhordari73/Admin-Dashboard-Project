import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { BiSearch } from "react-icons/bi";

import { employeesData, employeesGrid } from "../data/data";
import { Header } from "../components";

const Employee = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employees" />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <div className="flex justify-center items-center gap-3 text-lg">
                  <BiSearch />
                  <input
                    type="text"
                    onChange={(e) => setSearchValue(e.target.value)}
                    placeholder="Search name"
                    className="bg-gray-100 w-56 h-8 rounded-md p-2 border-gray-50 focus:outline-none"
                  />
                </div>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableHead>
            <TableRow>
              {employeesGrid.map((item) => (
                <TableCell
                  className="bg-gray-100 cursor-pointer"
                  key={item.headerText}>
                  {item.headerText}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {employeesData
              .filter((item) => {
                return searchValue.toLowerCase() === ""
                  ? item
                  : item.Name.toLowerCase().includes(searchValue);
              })
              .map((item, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    <img
                      src={item.EmployeeImage}
                      width={80}
                      height={80}
                      alt={item.Name}
                      className="rounded-full"
                    />
                  </TableCell>
                  <TableCell>{item.Name}</TableCell>
                  <TableCell>{item.Title}</TableCell>
                  <TableCell>{item.Country}</TableCell>
                  <TableCell>{item.HireDate}</TableCell>
                  <TableCell>{item.ReportsTo}</TableCell>
                  <TableCell>{item.EmployeeID}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Employee;
