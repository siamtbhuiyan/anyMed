import useIcon from "../hooks"
import { Link } from "react-router-dom"

const PharmacyCard = ({ pharmacy }) => {
    const StarIcon = useIcon("Star")
    return (
        <Link to={`/pharmacies/${pharmacy.id}`}>
            <div>
                <div className="h-56 xs:h-64 sm:h-96 md:h-72">
                    <img src={`http://127.0.0.1:8000/storage/images/pharmacies/${pharmacy.image}`} alt="" className="h-full w-full rounded-3xl" />
                </div>
                <div className="mt-4 mb-2 flex justify-between">
                    <div className="inline-block text-gray-500 text-sm pr-1 pt-1">
                    {pharmacy.location}, Dhaka
                    </div>
                    <span className="text-sm pl-2 align-text-bottom text-gray-700">
                    <StarIcon className="text-red-500 px-1 mb-1"/>
                    {pharmacy.rating}
                    </span>
                </div>
                <div className="text-base font-semibold">{pharmacy.name}</div>
            </div>
        </Link>
    )
}

export default PharmacyCard