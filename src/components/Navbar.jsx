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
                <ShoppingCartOutlinedIcon className="hover:cursor-pointer"/>
            </div>
        </div>
    )
}

export default Navbar