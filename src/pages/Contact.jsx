import Button from "../components/Button"

function Contact() {
  return (
    <section className="flex justify-center m-10 p-2">
        <div className="flex flex-col justify-center gap-1 border-2 bg-gray-contact border-gray-800 rounded-lg p-6 w-full max-w-md">

            <div>
            <h1 className="text-3xl font-bold text-cyan-300">Contact Us</h1>
            <p className="text-gray-400 text-[16px] mt-4">Send a transmission to our orbital station.</p>
            </div>

            <form className="flex flex-col gap-2 mt-5" w-full>
                <label className="text-cyan-300 font-logo-spline text-[12px]">IDENTIFIER</label>
                <input type="text" placeholder="Full Name" className="p-3 rounded-lg text-white border border-gray-700 bg-bg-blue-card focus:outline-none focus:ring-2 focus:ring-cyan-300 mb-3" />
                <label className="text-cyan-300 font-logo-spline text-[12px]">E-MAIL</label>
                <input type="email" placeholder="Email Adress" className="p-3 rounded-lg text-white border border-gray-700 bg-bg-blue-card focus:outline-none focus:ring-2 focus:ring-cyan-300 mb-3" />

                <label className="text-cyan-300 font-logo-spline text-[12px]">MESSAGE</label>
                <textarea placeholder="Your Message..." className="p-5 rounded-lg text-white border border-gray-700 bg-bg-blue-card focus:outline-none focus:ring-2 focus:ring-cyan-300 h-32 resize-none mb-3"></textarea>
                <Button text="Send"/>
            </form>
        </div>
    </section>
  )
}

export default Contact