"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-1">
             <Image
                src="/logo.png"
                alt="VNB Logo"
                width={120}
                height={40}
                className="h-10 w-auto brightness-0 invert mb-6"
              />
            <p className="text-gray-400 text-sm leading-relaxed">
              VNB Group is a certified IT-Business service firm and leading solar energy provider dedicated to driving excellence and sustainability.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="#home" className="hover:text-vnb-blue transition-colors">Home</Link></li>
              <li><Link href="#solar" className="hover:text-vnb-green transition-colors">Solar Solutions</Link></li>
              <li><Link href="#tech" className="hover:text-vnb-blue transition-colors">IT Services</Link></li>
              <li><Link href="#interactive" className="hover:text-vnb-blue transition-colors">Interactive Tech</Link></li>
            </ul>
          </div>

          <div>
             <h4 className="text-lg font-bold mb-6">Support</h4>
              <ul className="space-y-4 text-gray-400">
                <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="#contact" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="#about" className="hover:text-white transition-colors">Our History</Link></li>
              </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Stay updated with our latest news and energy insights.</p>
            <div className="flex">
              <input type="email" placeholder="email@company.com" className="bg-gray-800 border-none rounded-l-lg px-4 py-2 w-full focus:ring-1 focus:ring-vnb-blue outline-none" />
              <button className="bg-vnb-blue px-4 py-2 rounded-r-lg hover:bg-blue-700 transition-all font-bold text-sm">Join</button>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left">
            © {new Date().getFullYear()} VNB Group (VNB Technologies Pvt Ltd / VNB Solar). All rights reserved.
          </p>
          <div className="flex gap-6">
             <a href="#" className="text-gray-500 hover:text-white transition-colors text-xs">Facebook</a>
             <a href="#" className="text-gray-500 hover:text-white transition-colors text-xs">LinkedIn</a>
             <a href="#" className="text-gray-500 hover:text-white transition-colors text-xs">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
