import CartItem from "./CartItem"
const CartList = ({ cart }) => {
  return (
    <div className="flex-[1]">
        {cart.map((c) => {
            return (
                <CartItem item={c} key={c.id} />
            )
        })
        }
    </div>
  )
}

export default CartList