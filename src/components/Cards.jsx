import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ButtonCards from "./ButtonCards";


function Cards({ category, title, price, features, categoryColor, icon, iconColor, customIcon, buttonText, ribbon}) {
  return (
  
  <div className="relative overflow-hidden flex flex-col gap-1 border-2 bg-bg-blue-card border-gray-800 hover:border-cyan-400 rounded-lg p-5 w-full flex-1 items-center">

    {ribbon && (
        <div className="absolute top-5 -right-10 rotate-45 bg-fuchsia text-white text-[10px] tracking-wide font-bold w-40 p-1 text-center" >
        {ribbon}
        </div>
    )}

    <span className={`text-xs tracking-wider ${categoryColor}`}>
    {category}
    </span>

        <h2 className=" text-3xl font-bold text-soft-pink">{title}</h2>
        <p className="font-logo-spline text-4xl text-cyan-300 font-bold py-4">{price}

            <span className="text-gray-400 font-light text-sm flex-row ml-1">
                /mo
            </span>
        </p>
        
        <ul className="text-gray-400 text-sm flex flex-col gap-3 hover:font-bold">
            {features.map((feature, index) => (
                <li 
                key={index} className="flex items-center gap-2">
                {customIcon ? (
                    <img src={customIcon} alt="Premium Icon" className="w-4 h-4" />
                ) : (
                    <FontAwesomeIcon icon={icon} size="lg" className={iconColor}/>
                )}
                {feature}
                </li>
            ))}

        </ul>

        <br />
        <div className="mt-auto pt-6">
            <ButtonCards text={buttonText} />
        </div>
        


        
    </div>
        )
}

export default Cards