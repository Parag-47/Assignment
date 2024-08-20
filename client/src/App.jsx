import axios from "axios";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Create from "./Create";

function App() {
  const [show, setShow] = useState(0);
  const [data, setData] = useState([]);
  const [page, setPage] = useState({
    page: 1,
    limit: 10,
    searchQuery: "",
  });
  
  useEffect(() => {
    fetch();  
  }, [page]);

  async function fetch() {
    try {
      const res = await axios.get("http://localhost:3000/cards/", {
        params: {
          page: page.page,
          limit: page.limit,
          searchQuery: page.searchQuery,
        },
      });
      setData(res.data.data);
    } catch (error) {
      alert("Something Went Wrong While Feting Data!");
      console.log(error);
    }
  }

  function showCreateForm(value) {
    setShow(value);
  }

  function changePage(newPage) {
    setPage(newPage);
  }

  if (show) {
    return (
      <>
        <div className="container flex flex-col min-h-screen min-w-full">
          <Create show={showCreateForm} />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="container flex flex-col min-h-screen min-w-full">
        <Header show={showCreateForm} />
        <Main data={data} changePage={changePage} />
        <Footer />
      </div>
    </>
  );
}

export default App;