import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import axios from "axios";
import ImageList from "./components/ImageList";
function App() {
  const [array, setArray] = useState([]);
  const apiCall = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: "Client-ID QrfN1vwSHoXdIlnxdjZ_jIxob4iKUlgy57GoSFVpmp8",
      },
      params: {
        query: term,
      },
    });
    // debugger;
    return response.data.results
  };
  const handleSubmit = async(term) => {
    console.log(term);
    const result=await apiCall(term);
    setArray(result)
  };
  return (
    <>
      <Form search={handleSubmit} />
      <ImageList array={array}/>
    </>
  );
}

export default App;
