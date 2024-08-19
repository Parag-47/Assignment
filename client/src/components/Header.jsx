import React from "react";

function Header({show}) {
  
  return (
    <header className="flex flex-row justify-between place-items-center bg-black text-white min-h-[4.2rem] font-mono antialiased z-10">
      <h1 className="p-2 mx-4">Abstract | Help Center</h1>
      <div className="p-2 mx-4">
        <button onClick={()=>{show(1);}} className="border hover:bg-stone-600 cursor-pointer text-slate-200 border-white rounded px-1">Submit An Entry</button>
      </div>
    </header>
  );
}

export default Header;