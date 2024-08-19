import React from "react";

function Card({ title, description}) {
  return (
      <div className="bg-[#e5e5e5] w-full border-2 rounded-lg border-slate-300 min-h-64 ">
        <h1 className="font-[Roboto Mono] border-b-2 rounded-lg border-slate-300 p-3 pl-10 text-2xl font-medium">{title}</h1>
        {/* <textarea name="" id="" disabled  className="font-mono text-lg m-2 w-full h-full ">{description}</textarea> */}
        <input type="checkbox" className=" float-right before:content-['More..'] checked:before:content-['less..'] text-blue-600 appearance-none cursor-pointer mt-4 mr-4 peer"/>
        <p className="font-mono text-lg m-2 text-pretty whitespace-normal line-clamp-6 peer-checked:line-clamp-none">{description}</p>
      </div>
  );
}

export default Card;