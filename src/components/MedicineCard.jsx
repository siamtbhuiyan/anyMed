const MedicineCard = ({ medicine }) => {
  return (
    <div>
        <div className="h-56 xs:h-64 sm:h-96 md:h-72">
            <img src={medicine.image} alt="" class="h-full w-full rounded-3xl" />
        </div>
        <div className="text-lg font-semibold mt-4 mb-1">{medicine.name}</div>
        <div className="text-gray-500 text-sm mb-4">
        {medicine.type} - {medicine.dosage}
        </div>
        <div className="text-lg font-semibold">Tk. {medicine.price}</div>
    </div>
  )
}

export default MedicineCard