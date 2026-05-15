import Tag from "../components/Tag";
import Cards from "../components/Cards";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import premiumIcon from "../assets/premium-star-icon.svg";

function Pricing() {
  return (
    <section className="flex flex-col mt-20 gap-4 m-3">
        
        <div className=" flex justify-center items-center">
            <Tag text="PRICING" />
        </div>
        
        <h1 className="text-center text-5xl font-bold font-logo-spline text-soft-pink"> Choose Your Lens</h1>
        <p className="text-center text-sm font-light text-soft-pink mt-4 justify-center">Precision-engineered streaming for the ultimate cinematic experience.</p>



        <div>
            <Cards 
            category="ESSENTIALS"
            categoryColor="text-soft-pink/50"
            icon={faCircleCheck}
            iconColor="text-logo-cyan"
            title="BASIC"
            price="$3.99"
            features={[
                "1080p HD Streaming",
                "1 Concurrent Screen",
                "Ad/Supported Library"
            ]}

            buttonText="Select Basic"

            />

            <br />

            <Cards
            category="MOST POPULAR"
            categoryColor="text-soft-pink/50"
            icon={faCircleCheck}
            iconColor="text-logo-cyan"
            title="SUPERIOR"
            price="$7.99"
            features={[
                "4K Ultra HD + HDR",
                "2 Concurrent Screens",
                "No Commercial Breaks",
                "Spatial Audio Support"
            ]}

            buttonText="Select Superior"
            />

            <br />

            <Cards
            category="ELITE CHOICE"
            ribbon="BEST VALUE"
            categoryColor="text-logo-cyan"
            customIcon={premiumIcon}
            title="PREMIUM"
            price="$10.99"
            features={[
                "8K Streaming Ready",
                "Unlimited Screens",
                "Early Access Premieres",
                "Dolby Atmos Mastering"
            ]}
            buttonText="Select Premium"
            />  

        </div>
    </section>
  );
}

export default Pricing