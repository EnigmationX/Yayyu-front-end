'use client';

import { useState } from 'react';
import Banner from './banner';
export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [enquiry, setEnquiry] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !enquiry) {
      setError(true);
    } else {
      setError(false);
      console.log('Form Submitted:', { name, email, enquiry});
    }
  };

  return (
    <>
      <Banner imageUrl='/clothes.jpeg' text="CONTACT US" alt='Contact Us Banner'/>
      <div className="flex m-auto justify-center py-20">
      <div className="max-w-4xl w-[80%] grid md:grid-cols-2 gap-6 items-start">
        {/* Form Section */}
        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          <div>
            <label className="block text-black text-sm font-medium">Name</label>
            <input
              type="text"
              className={`w-full p-3 border text-black  ${error && !name ? 'border-red-500' : 'border-gray-300'} rounded-md`}
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm text-black  font-medium">Email</label>
            <input
              type="email"
              className={`w-full p-3 border text-black  ${error && !email ? 'border-red-500' : 'border-gray-300'} rounded-md`}
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-sm text-black  font-medium">Enquiry</label>
            <textarea
              className={`w-full p-3 border text-black  ${error && !enquiry ? 'border-red-500' : 'border-gray-300'} rounded-md`}
              placeholder="Enquiry"
              value={enquiry}
              onChange={(e) => setEnquiry(e.target.value)}
            ></textarea>
          </div>

          <button type="submit" className="w-full bg-black text-white py-3 rounded-md">Send</button>
        </form>

        {/* Contact Details */}
        <div className="space-y-2 text-gray-700">
          <p className="text-lg font-medium">Gbagada</p>
          <p>+234 812 0000 0000</p>
          <p>info@yayyuLifestyle.com</p>
        </div>
      </div>
    </div>
    </>
  );
}
