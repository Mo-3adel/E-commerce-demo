import React from 'react';

const Contact = () => (
  <div className="flex items-center justify-center h-screen bg-blue-100">
    <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md text-center">
      <h1 className="text-2xl font-bold mb-4 text-sky-900">Contact Us</h1>
      <p className="mb-6 text-gray-700">
        We'd love to hear from you! Fill out the form below and we'll get back to you soon.
      </p>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="border rounded p-2"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border rounded p-2"
        />
        <textarea
          placeholder="Your Message"
          className="border rounded p-2 h-24"
        />
        <button
          type="submit"
          className="bg-sky-900 text-amber-100 rounded p-2 font-semibold hover:bg-sky-700"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
);

export default Contact;