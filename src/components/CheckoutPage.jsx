import CartList from "./CartList"
import { useNavigate } from "react-router-dom";

const CheckoutPage = ({ cart, emptyCart }) => {
    const subtotalArray = cart.map(c => c.quantity*c.price)
    const subtotal = subtotalArray.reduce((partialSum, a) => partialSum + a, 0);
    const navigate = useNavigate();
    const refreshPage = () => {
        navigate("/");
        emptyCart();
    }
    if (cart.length !== 0) {
        return (
            <div className="my-8 mx-5">
                <div className="font-bold text-2xl">My Cart</div>
                <div className="flex flex-col md:flex-row">
                    <CartList cart={cart} />
                    <div className="flex-[1] md:pl-10 md:pt-10">
                        <div className="flex justify-between items-center">
                            <div className="">
                                <div className="font-bold text-xl pb-3">Delivery Address</div>
                                <div className="">House 86, Road 13, Sector 2</div>
                                <div className="text-gray-500 text-sm">Uttara, Dhaka</div>
                            </div>
                            <span className="text-[#139c95] hover:cursor-pointer">Change</span>
                        </div>
                        <div className="flex justify-between items-center pt-8">
                            <div className="">
                                <div className="font-bold text-xl pb-3">Payment Method</div>
                                <div className="">Cash On Delivery</div>
                            </div>
                            <span className="text-[#139c95] hover:cursor-pointer">Change</span>
                        </div>
                        <div className="font-bold text-xl pt-8 pb-3">Order Info</div>
                        <div className="flex justify-between items-center">
                            <div className="text-gray-500">Subtotal</div>
                            <div>Tk. {subtotal}</div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="text-gray-500">Delivery Charge</div>
                            <div>Tk. 70</div>
                        </div>
                        <div className="flex justify-between items-center text-lg font-semibold pt-3">
                            <div className="">Total</div>
                            <div>Tk. {subtotal + 70}</div>
                        </div>
                        <button className="bg-[#139c95] w-full rounded py-2 text-white mt-8 hover:bg-[#00a59f]" onClick={refreshPage}>Checkout</button>
                    </div>
                </div>
            </div>
          )
    } else {
        return (
            <div className="h-screen flex flex-col justify-center items-center mx-5 md:mx-0">
                <div className="h-56">
                    <img className="h-full w-full" src="../images/empty.png" alt="" />
                </div>
                <div className="text-3xl font-bold py-10">Your Cart is Empty!</div>
                <div className="text-xl">Looks like you haven't added anything to your cart. Go ahead and explore.</div>
            </div>
        )
    }
}

export default CheckoutPage