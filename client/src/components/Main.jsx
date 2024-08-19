import React from "react";
import { useState } from "react";
import Card from "./Card";
import { IoSearchOutline } from "react-icons/io5";

function Main({data, changePage}) {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const hPage = e => setPage(e.target.innerText);
  const hSearch = e => setSearchQuery(e.target.value);

  function nextPage() {
    if(page >= data.totalPages) return;
    changePage({
      page: page+1,
      limit: 10,
      searchQuery: searchQuery,
    });
    setPage(page+1);
  }

  function previousPage() {
    if(page <= 1) return;
    changePage({
      page: page-1,
      limit: 10,
      searchQuery: searchQuery,
    });
    setPage(page-1);
  }

  function search() {
    changePage({
      page: 1,
      limit: 10,
      searchQuery: searchQuery,
    });
  }

  return (
    <main className="flex-1">
      <div className=" grid place-items-center bg-[#dadbf0] min-h-36 p-5">
        <h1 className="font-[Roboto Mono] text-4xl font-medium">
          How Can We Help?
        </h1>
        <div className=" grid grid-flow-col bg-white rounded-full shadow-lg border-1 border-black border-solid focus:border-orange-300">
          <input
            className="w-full px-3 py-1 border-none outline-none bg-transparent"
            type="text"
            placeholder="Search"
            onChange={hSearch}
            value={searchQuery}
          />
          <button onClick={search} className="text-2xl pl-0 pr-2">
            <IoSearchOutline />
          </button>
        </div>
      </div>
      <div className="h-full grid grid-cols place-items-center gap-4 m-10 sm:grid-cols-2 antialiased">
        {data.docs && data.docs.map((item) => (
          <React.Fragment key={item._id}>
            <Card title={item.title} key={item._id} description={item.description} />
          </React.Fragment>
        ))}
      </div>
      <div className="grid grid-flow-col place-content-center gap-2 mb-1">
        <button onClick={previousPage}>Pervious</button>
        <h1 onChange={hPage} className="border-2 bg-white px-1">{data.page}</h1>
        <button onClick={nextPage}>Next</button>
        <h1 className="border-2 bg-white px-1" >Total: {data.totalPages}</h1>
      </div>
    </main>
  );
}

export default Main;
