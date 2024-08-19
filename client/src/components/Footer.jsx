import React from 'react'

function Footer() {
  return (
    <footer className=' grid grid-cols-2 justify-around bg-black text-white font-mono antialiased min-h-50 p-2 pb-0 gap-1 sm:flex'>
      <div>
        <h2 className=' p-1 text-lg font-bold'>Abstract</h2>
        <h3 className=' p-1 rounded-md text-sm hover:bg-slate-700 cursor-pointer'>Branch</h3>
      </div>
      <div>
        <h2 className=' p-1 text-lg font-bold' >Resources</h2>
        <h3 className=' p-1 rounded-md text-sm hover:bg-slate-700 cursor-pointer'>Blog</h3>
        <h3 className=' p-1 rounded-md text-sm hover:bg-slate-700 cursor-pointer'>Help Center</h3>
        <h3 className=' p-1 rounded-md text-sm hover:bg-slate-700 cursor-pointer'>Release Notes</h3>
        <h3 className=' p-1 rounded-md text-sm hover:bg-slate-700 cursor-pointer'>Status</h3>
      </div>
      <div>
        <h2 className=' p-1 text-lg font-bold' >Community</h2>
        <h3 className=' p-1 rounded-md text-sm hover:bg-slate-700 cursor-pointer' >Twitter</h3>
        <h3 className=' p-1 rounded-md text-sm hover:bg-slate-700 cursor-pointer' >Facebook</h3>
        <h3 className=' p-1 rounded-md text-sm hover:bg-slate-700 cursor-pointer' >Dribble</h3>
        <h3 className=' p-1 rounded-md text-sm hover:bg-slate-700 cursor-pointer' >Podcast</h3>
      </div>
      <div>
        <h2 className=' p-1 text-lg font-bold' >Company</h2>
        <h3 className=' p-1 rounded-md text-sm hover:bg-slate-700 cursor-pointer' >About Us</h3>
        <h3 className=' p-1 rounded-md text-sm hover:bg-slate-700 cursor-pointer' >Careers</h3>
        <h3 className=' p-1 rounded-md text-sm hover:bg-slate-700 cursor-pointer' >Legal</h3>
        <h2 className=' p-1 text-lg font-bold' >Contact Us</h2>
        <h3 className=' p-1 rounded-md text-sm hover:bg-slate-700 cursor-pointer' >info@abstract.com</h3>
      </div>
    </footer>
  )
}

export default Footer