import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-gray-500 text-sm py-10 px-4 md:px-20">
      {/* Footer Content */}
      <div className="max-w-5xl mx-auto">
        <p className="mb-4">Questions? Call <span className="underline">000-800-919-1694</span></p>
        
        {/* Footer Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="flex flex-col space-y-2">
            <a href="#" className="hover:underline">FAQ</a>
            <a href="#" className="hover:underline">Investor Relations</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Speed Test</a>
          </div>

          <div className="flex flex-col space-y-2">
            <a href="#" className="hover:underline">Help Center</a>
            <a href="#" className="hover:underline">Jobs</a>
            <a href="#" className="hover:underline">Cookie Preferences</a>
            <a href="#" className="hover:underline">Legal Notices</a>
          </div>

          <div className="flex flex-col space-y-2">
            <a href="#" className="hover:underline">Account</a>
            <a href="#" className="hover:underline">Ways to Watch</a>
            <a href="#" className="hover:underline">Corporate Information</a>
            <a href="#" className="hover:underline">Only on Netflix</a>
          </div>

          <div className="flex flex-col space-y-2">
            <a href="#" className="hover:underline">Media Center</a>
            <a href="#" className="hover:underline">Terms of Use</a>
            <a href="#" className="hover:underline">Contact Us</a>
          </div>
        </div>

        {/* Language Selector */}
        <div className="mb-4">
          <select className="bg-black text-gray-500 border border-gray-500 p-2 rounded">
            <option>English</option>
            <option>हिन्दी</option>
          </select>
        </div>

        {/* Netflix Branding */}
        <p>Netflix India</p>
      </div>
    </div>
  );
};

export default Footer;