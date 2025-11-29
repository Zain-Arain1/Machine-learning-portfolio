export function ContactSection() {
  return (
    <section className="h-screen w-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
      <div className="text-center text-white px-8">
        <h2 className="mb-4">Let's Connect</h2>
        <p className="text-xl">Ready to work together? Get in touch!</p>
        <button className="mt-8 px-8 py-3 bg-white text-teal-600 rounded-lg hover:bg-gray-100 transition-colors">
          Contact Me
        </button>
      </div>
    </section>
  );
}
