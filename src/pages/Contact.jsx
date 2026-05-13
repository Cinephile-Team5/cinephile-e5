import Button from "../components/Button"

function Contact() {
  return (
    <section className="flex justify-center m-10 p-2">
        <div className="flex flex-col justify-center gap-1 border-2 bg-gray-contact border-gray-800 rounded-lg p-6 w-full max-w-md">

            <div>
            <h1 className="text-3xl font-bold text-cyan-300">Contact Us</h1>
            <p className="text-gray-400 font-light text-sm mt-4">Send a transmission to our orbital station.</p>
            </div>

            <form className="flex flex-col gap-4 mt-6" w-full>
                <input type="text" placeholder="Full Name" className="p-3 rounded-lg text-white border border-gray-700 bg-bg-blue-card focus:outline-none focus:ring-2 focus:ring-cyan-300" />
                <input type="email" placeholder="Email Adress" className="p-3 rounded-lg text-white border border-gray-700 bg-bg-blue-card focus:outline-none focus:ring-2 focus:ring-cyan-300" />
                <textarea placeholder="Your Message..." className="p-3 rounded-lg text-white border border-gray-700 bg-bg-blue-card focus:outline-none focus:ring-2 focus:ring-cyan-300 h-32 resize-none"></textarea>
                <Button text="Send"/>
            </form>
        </div>
    </section>
  )
}

export default Contact