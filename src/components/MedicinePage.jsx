import { useParams, Link } from "react-router-dom"
import Navbar from "./Navbar"
import { useState } from "react"

const MedicinePage = ({ logout, medicine, addToCart }) => {
    const id = Number(useParams().id)
    const currentMedicine = medicine.find(m => m.id === id)  
    const [quantity, setQuantity] = useState(0)
    const increaseQuantity = () => {
        if (quantity < currentMedicine.quantity) {
            setQuantity(quantity + 1)
        } 
    }
    const decreaseQuantity = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1)
        } 
    }
    return (
        <div>
            <Navbar logout={logout} />
            <div className="flex flex-col md:flex-row md:pt-36">
                <div className="flex-1 flex md:justify-end">
                    <div className="w-full md:w-auto md:h-96 md:mx-0 mx-5">
                        <img className="h-full text-center" src={`http://127.0.0.1:8000/storage/images/medicines/${currentMedicine.image}`} alt="" />
                    </div>
                </div>
                <div className="flex-1 px-5 md:pl-10 md:py-0 py-12">
                    <div className="text-4xl font-bold">{currentMedicine.name}</div>
                    <div className="py-4 text-gray-500">{currentMedicine.type} - {currentMedicine.dosage}</div>
                    <div className="text-2xl font-bold">Tk. {currentMedicine.price}</div>
                    <div className="py-6">
                        <div className="text-gray-500 text-sm">Medicine Group</div>
                        <div>{currentMedicine.group}</div>
                    </div>
                    <div className="pb-6">
                        <div className="text-gray-500 text-sm">Manufacturer</div>
                        <div>{currentMedicine.manufacturer}</div>
                    </div>
                    <div className="pb-6">
                        <div className="text-gray-500 text-sm">In Stock</div>
                        <div>{currentMedicine.quantity}</div>
                    </div>
                    <div className="flex">
                        <div className="bg-gray-200 md:flex-none flex-[3] rounded flex justify-between items-center text-lg">
                            <button className="p-3 hover:cursor-pointer hover:bg-gray-300" onClick={() => decreaseQuantity()}>-</button>
                            <span className="p-3">{`${quantity}`}</span>
                            <button className="p-3 hover:cursor-pointer hover:bg-gray-300" onClick={() => increaseQuantity()}>+</button>
                        </div>
                        <button className="bg-[#139c95] md:flex-none flex-[7] rounded md:px-6 py-2 text-white mx-3 hover:bg-[#00a59f] disabled:cursor-not-allowed disabled:hover:bg-[#139c95]" disabled={quantity === 0 ? true : false} onClick={() => addToCart(currentMedicine, quantity)}>Add To Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MedicinePage