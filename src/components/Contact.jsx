const Contact = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100 px-6">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-lg w-full">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">Contact Us</h1>

        <p className="text-gray-600 mb-4">Feel free to send message anytime.</p>

        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border rounded-lg mb-4"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border rounded-lg mb-4"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-3 border rounded-lg mb-4 h-32"
        />

        <button className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Contact;
