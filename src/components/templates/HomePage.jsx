import React, { useEffect, useState } from "react";
import TableCoin from "../modules/TableCoin";
import { getCoinList } from "../../services/cryptoApi";
import Pagination from "../modules/Pagination";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setIsLoading(true)
    const gatData = async () => {
      const res = await fetch(getCoinList(page));
      const json = await res.json();
      setCoins(json);
      setIsLoading(false);
    };
    gatData();
  }, [page]);

  return (
    <>
      <div>
        <TableCoin coins={coins} isLoding={isLoading} />
        <Pagination page={page} setPage={setPage}/> 
      </div>
    </>
  );
}

export default HomePage;
