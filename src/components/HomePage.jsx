import PharmacyList from "./PharmacyList"
import Navbar from "./Navbar"

const HomePage = ({ pharmacies, searchPharmacies, inputRef }) => {
  return (
    <div>
        <Navbar name="Pharmacies" searchPharmacies={searchPharmacies} inputRef={inputRef} />
        <div className="mx-5 my-14">
            <div className="font-bold text-2xl mb-5">Pharmacies</div>
            <PharmacyList pharmacies={pharmacies}  />
        </div>
    </div>
  )
}

export default HomePage