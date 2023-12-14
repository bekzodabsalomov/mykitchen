import { useEffect, useState } from "react";

export function useFetch(url, method = "GET") {
  const [data, setData] = useState(null);
  const [isPending, setIspending] = useState(false);
  const [error, setError] = useState(null);
  const [postData, setPostData] = useState(null);

  const newData = (newRecipe) => {
    setPostData({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRecipe),
    });
  };
  useEffect(() => {
    const fetchData = async (fetchConfig) => {
      setIspending(true);
      try {
        const req = await fetch(url, { ...fetchConfig });
        if (!req.ok) {
          throw new Error(req.statusText);
        }
        const data = await req.json();
        setData(data);
        setIspending(false);
      } catch (err) {
        console.log(err.message);
        setError(error.message);
        setIspending(false);
      }
    };

    if (method === "POST") {
      fetchData(postData);
    }
    if (method === "GET") {
      fetchData();
    }
  }, [url, method, postData]);
  return { data, isPending, error, newData };
}
