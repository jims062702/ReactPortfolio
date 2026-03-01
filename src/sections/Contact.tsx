export default function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center px-20">
      <div>
        <h2 className="text-5xl font-bold mb-8 text-white">Contact</h2>

        <p className="text-lg text-gray-300 mb-8">
          Let’s build something amazing together.
        </p>

        <button className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition">
          Send Email
        </button>
      </div>
    </section>
  )
}