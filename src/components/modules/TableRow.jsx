import React from "react";
import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";

function TableRow({
  coin: {
    name,
    image,
    symbol,
    current_price,
    total_volume,
    price_change_percentage_24h: price_change,
  },
}) {
  return (
    <>
      <tr>
        <td>
          <img src={image} alt={name} />
          <span>{symbol.toUpperCase()}</span>
        </td>
        <td>{name}</td>
        <td>${current_price.toLocaleString()}</td>
        <td>{price_change.toFixed(2)}%</td>
        <td>{total_volume.toLocaleString()}</td>
        <td>
          <img src={price_change > 0 ? chartUp : chartDown} alt={name} />
        </td>
      </tr>
    </>
  );
}

export default TableRow;
