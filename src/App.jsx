import Navbar from "./components/Navbar"
import data from "./data/db.json"
import { useState, useRef } from "react"
import PharmacyList from "./components/PharmacyList"

const App = () => {
  const [pharmacies, setPharmacies] = useState(data.pharmacies)
  const [medicine, setMedicine] = useState(data.medicine)

  const inputRef = useRef(null)

  const searchPharmacies = async (searchField) => {
    const filteredPharmacies = data.pharmacies.filter(
      p => {
        return (
          p
          .name
          .toLowerCase()
          .includes(searchField.toLowerCase())
        );
      }
    );
    setPharmacies(filteredPharmacies)
  }
  return (
    <div className="container mx-auto">
      <Navbar searchPharmacies={searchPharmacies} inputRef={inputRef} />
      <div className="mx-5 my-14">
        <div className="font-bold text-2xl mb-5">Pharmacies</div>
        <PharmacyList pharmacies={pharmacies}  />
      </div>
    </div>
  )
}

export default App