import React from "react";
import TableRow from "./TableRow";

function TableCoin({ coins }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Coin</th>
            <th>Name</th>
            <th>Price</th>
            <th>24h</th>
            <th>Total Volume</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <TableRow coin={coin} key={coin.id} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default TableCoin;