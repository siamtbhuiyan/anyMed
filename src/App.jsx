import data from "./data/db.json"
import { useState, useRef } from "react"
import HomePage from "./components/HomePage"
import PharmacyPage from "./components/PharmacyPage"

import {
  BrowserRouter as Router,
  Routes, Route, useMatch
} from 'react-router-dom'

const App = () => {
  const [pharmacies, setPharmacies] = useState(data.pharmacies)
  const [medicine, setMedicine] = useState(data.medicine)

  const inputRef = useRef(null)
  const medicineRef = useRef(null)

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
  const searchMedicine = async (searchField) => {
    const filteredMedicine = data.medicine.filter(
      m => {
        return (
          m
          .name
          .toLowerCase()
          .includes(searchField.toLowerCase())
        );
      }
    );
    setMedicine(filteredMedicine)
  }
  return (
    <div className="container mx-auto">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage pharmacies={pharmacies} searchPharmacies={searchPharmacies} inputRef={inputRef} />}/>
          <Route path="/pharmacies/:id" element={<PharmacyPage pharmacies={pharmacies} medicine={medicine} searchMedicine={searchMedicine} medicineRef={medicineRef} />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App