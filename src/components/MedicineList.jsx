import MedicineCard from "./MedicineCard"

const MedicineList = ({ medicine }) => {
    const shuffledMedicine = medicine.sort((a, b) => 0.5 - Math.random());
  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
          {shuffledMedicine.map((medicine) => {
            return (
              <MedicineCard medicine={medicine} />
            )
          })
          }
    </div>
  )
}

export default MedicineList