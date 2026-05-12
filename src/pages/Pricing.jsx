import Tag from "../shared/Tag";
import Cards from "../shared/Cards";

function Pricing() {
  return (
    <section className="flex flex-col mt-20 gap-4 m-3">
        <div>
            <Tag text="PRICING" />
        </div>
        
        <h1 className="text-center text-5xl font-bold font-logo-spline text-soft-pink"> Choose Your Lens</h1>
        <p className="text-center text-sm font-light text-soft-pink mt-4 justify-center">Precision-engineered streaming for the ultimate cinematic experience.</p>

        <div>
            <Cards 
                category="ESSENTIALS"
                title="BASIC"
                price="$3.99"
                Feature1="1080p HD Streaming"
                Feature2="1 Concurrent Screen"
                Feature3="Ad/Supported Library"
            />  
        </div>
    </section>
  );
}

export default Pricing