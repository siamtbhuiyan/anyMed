import { useState, useEffect, useRef } from "react"
import pharmacyService from "./services/pharmacy"
import HomePage from "./components/HomePage"
import PharmacyPage from "./components/PharmacyPage"
import MedicinePage from "./components/MedicinePage"
import CheckoutPage from "./components/CheckoutPage"
import Login from "./components/Login"
import Register from "./components/Register"

import {
  BrowserRouter as Router,
  Routes, Route, useNavigate
} from 'react-router-dom'
import medicineService from "./services/medicine"
import authService from "./services/auth"

const App = () => {
  const [allPharmacies, setAllPharmacies] = useState([])
  const [allMedicine, setAllMedicine] = useState([])
  const [pharmacies, setPharmacies] = useState([])
  const [medicine, setMedicine] = useState([])
  const [cart, setCart] = useState([])
  const [user, setUser] = useState(null)

  const inputRef = useRef(null)
  const medicineRef = useRef(null)
  
  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const passwordConfirmRef = useRef(null)
  const navigate = useNavigate()


  const getPharmacies = async () => {
    await pharmacyService.getPharmacies().then(pharmacies =>
      setPharmacies(pharmacies)
    )
    setAllPharmacies(pharmacies);
  }

  const getMedicines = async () => {
    await medicineService.getMedicines().then(medicines => 
      setMedicine(medicines)  
    )
    setAllMedicine(medicine);
  }

  useEffect(() => {
    getPharmacies()
    getMedicines()
  }, [])

  const searchPharmacies = async (searchField) => {
    const filteredPharmacies = allPharmacies.filter(
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
    const filteredMedicine = allMedicine.filter(
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

  const login = async (email, password) => {
    await authService.login(email, password).then(response =>
      setUser(response)
    )
  }

  const register = async (name, email, password, confirmation) => {
    await authService.register(name, email, password, confirmation).then(response =>
      setUser(response)
    )
    navigate('/')
  }

  return (
    <div className="container mx-auto">
        <Routes>
          <Route path="/" element={user ? <HomePage pharmacies={pharmacies} searchPharmacies={searchPharmacies} inputRef={inputRef} /> : <Login emailRef={emailRef} passwordRef={passwordRef} login={login} />}/>
          <Route path="/pharmacies/:id" element={<PharmacyPage pharmacies={pharmacies} medicine={medicine} searchMedicine={searchMedicine} medicineRef={medicineRef} />}/>
          <Route path="/medicine/:id" element={<MedicinePage medicine={medicine} addToCart={addToCart} />}/>
          <Route path="/cart/checkout" element={<CheckoutPage cart={cart} />} />
          <Route path="/register" element={<Register nameRef={nameRef} emailRef={emailRef} passwordRef={passwordRef} passwordConfirmRef={passwordConfirmRef} register={register}/>} />
        </Routes>
    </div>
  )
}

export default App