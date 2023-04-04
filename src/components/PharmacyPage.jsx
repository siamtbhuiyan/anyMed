import { useParams } from "react-router-dom"
import Navbar from "./Navbar"
import MedicineList from "./MedicineList"

const PharmacyPage = ({ pharmacies, medicine, searchMedicine, medicineRef }) => {
    const id = Number(useParams().id)
    const pharmacy = pharmacies.find(pharmacy => pharmacy.id === id)  
    return (
        <div>
            <Navbar name="Medicine" searchMedicine={searchMedicine} medicineRef={medicineRef}/>
            <div className="mx-5 my-14">
                <div className="font-bold text-2xl mb-5">Welcome to {pharmacy.name}!</div>
                <MedicineList medicine={medicine} />
            </div>
        </div>
    )
}

export default PharmacyPage