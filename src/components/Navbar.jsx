import useIcon from "../hooks"
import { Link } from "react-router-dom"

const Navbar = ({ logout }) => {
    const ShoppingCartOutlinedIcon = useIcon("ShoppingCartOutlined")
    const LogoutIcon = useIcon("Logout")
    return (
        <div className="mx-5">
            <div className="flex my-8 justify-between">
            <Link to="/">
                <div className="font-bold text-2xl">AnyMed</div>
            </Link>
            <div>
                <Link to="/cart/checkout">
                    <ShoppingCartOutlinedIcon className="hover:cursor-pointer mx-2"/>
                </Link>
               <button onClick={() => logout()}>
                    <LogoutIcon className="hover:cursor-pointer mx-2" />
               </button>
            </div>
            
            </div>
        </div>
    )
}

export default Navbar