import React from 'react'

const CartItem = () => {
  return (
    <div className="bg-white my-8 p-1 md:p-3 shadow rounded">
          <div className="flex">
            <div className="h-20 w-20 sm:h-24 sm:w-24 mr-4"><img className="h-full w-full rounded" src="" alt="" /></div>
            <div className="w-full">
              <div className="font-bold text-xs text-blue-900">name</div>
              <div className="sm:pt-2 pb-1 sm:pb-3 sm:text-lg">title</div>
            </div>
          </div>
      </div>
  )
}

export default CartItem