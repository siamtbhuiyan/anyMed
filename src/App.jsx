import data from "./data/db.json"
import { useState, useRef } from "react"
import HomePage from "./components/HomePage"
import PharmacyPage from "./components/PharmacyPage"
import MedicinePage from "./components/MedicinePage"
import CheckoutPage from "./components/CheckoutPage"

import {
  BrowserRouter as Router,
  Routes, Route, useMatch
} from 'react-router-dom'

const App = () => {
  const [pharmacies, setPharmacies] = useState(data.pharmacies)
  const [medicine, setMedicine] = useState(data.medicine)
  const [cart, setCart] = useState([])

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

  const addToCart = (medicine, q) => {
    let currentCart = cart
    let newItem = true
    let currentItem = {}
    if (currentCart.length !== 0) {
      currentCart.map(c => {
        if (c.id === medicine.id) {
          c.quantity = c.quantity + q
          newItem = false
        }
      })
      console.log(newItem)
      if (newItem === true) {
        currentItem = {
          id: medicine.id,
          name: medicine.name,
          quantity: q,
          price: medicine.price,
          image: medicine.image
        }
        currentCart.push(currentItem)
      }
    } else {
      currentItem = {
        id: medicine.id,
        name: medicine.name,
        quantity: q,
        price: medicine.price,
        image: medicine.image
      }
      currentCart.push(currentItem)
    }
    setCart(currentCart)
  }

  return (
    <div className="container mx-auto">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage pharmacies={pharmacies} searchPharmacies={searchPharmacies} inputRef={inputRef} />}/>
          <Route path="/pharmacies/:id" element={<PharmacyPage pharmacies={pharmacies} medicine={medicine} searchMedicine={searchMedicine} medicineRef={medicineRef} />}/>
          <Route path="/medicine/:id" element={<MedicinePage medicine={medicine} addToCart={addToCart} />}/>
          <Route path="/cart/checkout" element={<CheckoutPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App