import { useEffect, useState } from "react";

const useTsharts = () => {
  const [tsharts, setTsharts] = useState([]);

  useEffect( () => {
    fetch(`http://localhost:5000/tsharts`)
    .then(res => res.json())
    .then(data => setTsharts(data));
  },[])
  return [tsharts, setTsharts]
};

export default useTsharts;
