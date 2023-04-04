import PharmacyCard from "./PharmacyCard"

const PharmacyList = ({ pharmacies }) => {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pharmacies.map((pharmacy) => {
            return (
              <PharmacyCard pharmacy={pharmacy} key={pharmacy.id} />
            )
          })
          }
    </div>
  )
}

export default PharmacyList