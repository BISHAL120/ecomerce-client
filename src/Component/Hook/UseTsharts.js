import { useEffect, useState } from "react";

const useTsharts = () => {
  const [tsharts, setTsharts] = useState([]);

  useEffect(() => {
    fetch(`https://ecomerve-app-server.vercel.app/tsharts`)
      .then((res) => res.json())
      .then((data) => setTsharts(data));
  }, []);
  return [tsharts, setTsharts];
};

export default useTsharts;
