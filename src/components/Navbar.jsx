import useIcon from "../hooks"
import { Link } from "react-router-dom"

const Navbar = () => {
    const ShoppingCartOutlinedIcon = useIcon("ShoppingCartOutlined")
    return (
        <div className="mx-5">
            <div className="flex my-8 justify-between">
            <Link to="/">
                <div className="font-bold text-2xl">AnyMed</div>
            </Link>
            <Link to="/cart/checkout">
                <ShoppingCartOutlinedIcon className="hover:cursor-pointer"/>
            </Link>
            </div>
        </div>
    )
}

export default Navbar