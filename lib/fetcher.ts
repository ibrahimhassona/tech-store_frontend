import { useEffect, useState } from "react";

const Fetcher = (fetchUrl: string) => {
  const urllocal = process.env.NEXT_PUBLIC_NEXT_URL;

  const [result, setResult] = useState<{ data: any[] } | null>(null);

  let myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Bearer 04207846e0f4857c0e198faa34ab465629bef42403581b96076d0c7aa5ad432b7f5f54244fb2cc76e9eb41c79637b2f10f4934b98d4874559145ba861ad2c1be0adc4264f15762d986b6439febb2a05eecd910dd4c29cbb96dd6f49e8d6cebd79a63f794a8e075ca015bc86da6e723aa1082b8ad957f1a7e9596bbc99a488919"
  );

  let requestOptions:any = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  useEffect(() => {
    const fetcher = async () => {
      try {
        const response = await fetch(`${urllocal}${fetchUrl}`,requestOptions);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setResult(data);
      } catch (error) {
        console.log("Error fetching the data");
      }
    };
    fetcher();
  }, [fetchUrl]);
  return result;
};

export default Fetcher;
