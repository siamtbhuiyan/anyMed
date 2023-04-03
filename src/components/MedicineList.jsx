import MedicineCard from "./MedicineCard"

const MedicineList = ({ medicine }) => {
  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
          {medicine.map((medicine) => {
            return (
              <MedicineCard medicine={medicine} />
            )
          })
          }
    </div>
  )
}

export default MedicineList