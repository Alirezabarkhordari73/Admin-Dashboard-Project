import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ordersData, contextMenuItems, ordersGrid } from "../data/data";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { Header } from "../components";

const Orders = () => {
  const [orderDataList, setOrderDataList] = useState(ordersData);
  const [clickSort, setClickSort] = useState(true);

  const sortClickHandler = (sortType) => {
    if (clickSort === true) {
      let ordersDataCopy = ordersData.reduce((newArray, element) => {
        newArray.push(element);
        return newArray;
      }, []);

      ordersDataCopy.sort((a, b) => {
        let nameA;
        if (sortType === "Items") {
          nameA = a.OrderItems.toUpperCase();
        } else if (sortType === "TotalAmount") {
          nameA = a.TotalAmount;
        } else if (sortType === "OrderID") {
          nameA = a.OrderID;
        }

        let nameB;
        if (sortType === "Items") {
          nameB = b.OrderItems.toUpperCase();
        } else if (sortType === "TotalAmount") {
          nameB = b.TotalAmount;
        } else if (sortType === "OrderID") {
          nameB = b.OrderID;
        }

        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
        if (typeof nameA === "number" && typeof nameB === "number") {
          return a - b;
        }
        // names must be equal
        return 0;
      });

      setOrderDataList(ordersDataCopy);
    } else {
      setOrderDataList(ordersData);
    }
    setClickSort((prevState) => !prevState);
  };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-zinc-700 rounded-3xl">
      <Header category="Page" title="Orders" />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {ordersGrid.map((item) => {
                if (item.clickable === true)
                  return (
                    <TableCell
                      className="bg-gray-100 cursor-pointer"
                      onClick={() => sortClickHandler(item.headerText)}
                      key={item.headerText}>
                      {item.headerText}
                    </TableCell>
                  );

                return (
                  <TableCell className="bg-gray-100" key={item.headerText}>
                    {item.headerText}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {orderDataList.map((item, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell component="th" scope="row">
                  <img
                    src={item.ProductImage}
                    width={100}
                    height={100}
                    alt={item.CustomerName}
                  />
                </TableCell>
                <TableCell>{item.OrderItems}</TableCell>
                <TableCell>{item.CustomerName}</TableCell>
                <TableCell>{item.TotalAmount}</TableCell>
                <TableCell>
                  <Stack spacing={1} alignItems="center">
                    <Stack direction="row" spacing={1}>
                      <Chip
                        label={item.Status}
                        color={
                          (item.Status === "pending" && "primary") ||
                          (item.Status === "complete" && "success") ||
                          (item.Status === "active" && "secondary") ||
                          (item.Status === "canceled" && "warning") ||
                          (item.Status === "rejected" && "error")
                        }
                      />
                    </Stack>
                  </Stack>
                </TableCell>
                <TableCell>{item.OrderID}</TableCell>
                <TableCell>{item.Location}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Orders;
