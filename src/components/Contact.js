// src/components/Contact.js
import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-16 px-4 bg-gray-800 text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p className="text-lg mb-4">Feel free to connect with me:</p>
        <ul className="flex justify-center space-x-6">
          <li><a href="https://github.com/akshayvaghela27" className="text-blue-600 hover:underline">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/akshay-vaghela-126b36227/" className="text-blue-600 hover:underline">LinkedIn</a></li>
          <li><a href="https://www.codechef.com/users/akshayvaghela" className="text-blue-600 hover:underline">CodeChef</a></li>
          <li><a href="https://codeforces.com/profile/Akshay_vaghela27" className="text-blue-600 hover:underline">Codeforces</a></li>
          <li><a href="https://leetcode.com/AkshayVaghela" className="text-blue-600 hover:underline">LeetCode</a></li>
          <li><a href='mailto:akshayvaghela2763@gmail.com' className="text-blue-600 hover:underline">E-mail</a></li>
        </ul>
      </div>
    </section>
  );
}

export default Contact;
