
function Cards({ category, title, price, Feature1, Feature2, Feature3, Feature4 }) {
  return (
    <div className="flex flex-col gap-1 border-2 border-gray-800 rounded-lg p-4 w-full">
        <span className="text-soft-pink/50">{category}</span>
        <h2 className=" text-3xl font-bold text-soft-pink">{title}</h2>
        <p className="font-logo-spline text-4xl text-cyan-300 font-bold ">{price}</p>
        <li>{Feature1}</li>
        <li>{Feature2}</li>
        <li>{Feature3}</li>
        <li>{Feature4}</li>


        
    </div>
  )
}

export default Cards