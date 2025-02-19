import React, { useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_3c67w2c',  // Replace with your EmailJS service ID
        'template_ado4l0t', // Replace with your EmailJS template ID
        {
          user_name: formData.name,
          user_email: formData.email,
          user_message: formData.message
        },
        'YN8MpwRdsAY95GlVk' // Replace with your EmailJS public key
      )
      .then(() => {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch(() => {
        setStatus('Failed to send message. Try again later.');
      });

      
  };

  return (
    <div className="flex flex-wrap p-6 bg-blue-300">
      <div className="w-full p-6">
        <h2 className="text-3xl font-bold text-center text-violet-500 mb-6">Contact Me</h2>

        {status && <p className="text-center text-lg text-gray-700 mb-4">{status}</p>}

        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
          <div className="w-full p-6 flex items-center justify-center">
            <DotLottieReact
              src="https://lottie.host/ee3a14b9-08af-45b9-9d4a-5022c421829b/bgmtfuzV0a.lottie"
              loop
              autoplay
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-lg font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your message"
              rows="4"
              required
            ></textarea>
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
