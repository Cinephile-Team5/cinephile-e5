import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

function Cards({ category, title, price, features, categoryColor }) {
  return (
    <div className="flex flex-col gap-1 border-2 bg-bg-blue-card border-gray-800 rounded-lg p-4 w-full">

    <span className={`text-soft-pink/50 text-xs tracking-wider ${categoryColor}`}>
    {category}
    </span>
        <h2 className=" text-3xl font-bold text-soft-pink">{title}</h2>
        <p className="font-logo-spline text-4xl text-cyan-300 font-bold py-4">{price}
            <span className="text-gray-400 font-light text-sm flex-row ml-1">
                /mo
            </span>
        </p>
        
        <ul className="text-gray-400 font-light text-sm flex flex-col gap-3"> 
            {features.map((feature, index) => (
                <li 
                key={index} className="flex items-center gap-2">
                <FontAwesomeIcon icon={faCircleCheck} size="lg" style={{ color: '#00FFFF' }} />
                {feature}
                </li>
            ))}

        </ul>
        


        
    </div>
        )
}

export default Cards