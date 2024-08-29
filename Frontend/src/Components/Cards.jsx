import React from 'react'

function Cards({ item }) {
  return (
    <>
    <div className=" mt-8 mb-10 p-3">
    <div className="card bg-base-100 w-93 shadow-xl hover:scale-105 duration-300 dark:bg-slate-900 dark:text-white dark:border">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions justify-between">
      <div className="px-2 py-1 rounded-full border-[1px]  border-black text-red-500 ">₹{item.price}</div>
      <div className="cursor-pointer px-2 py-1 rounded-full border-[1px] hover:bg-green-500 hover:text-white text-green-300 ">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Cards
