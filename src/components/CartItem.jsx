import React from 'react'

const CartItem = ({ item }) => {
  return (
    <div className="bg-white my-8 p-1 md:p-3 shadow rounded">
          <div className="flex">
            <div className="h-20 w-20 sm:h-24 sm:w-24 mr-4"><img className="h-full w-full rounded" src={`http://127.0.0.1:8000/storage/images/medicines/${item.image}`} alt="" /></div>
            <div className="">
              <div className="font-bold text-xs">{item.name}</div>
              <div className="sm:pt-2 pb-1 sm:pb-3">Tk. {item.price}</div>
              <div className=''>x {item.quantity}</div>
            </div>
          </div>
      </div>
  )
}

export default CartItem