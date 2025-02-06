import { FaFacebookF, FaLinkedinIn, FaXTwitter, FaYoutube, FaInstagram } from "react-icons/fa6";
import { AiFillApple } from "react-icons/ai";
import { BsGooglePlay } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="font-semibold mb-2">For Clients</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>How to hire</li>
            <li>Talent Marketplace</li>
            <li>Project Catalog</li>
            <li>Hire an agency</li>
            <li>Enterprise</li>
            <li>Business Plus</li>
            <li>Any Hire</li>
            <li>Contract-to-hire</li>
            <li>Direct Contracts</li>
            <li>Hire worldwide</li>
            <li>Hire in the USA</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">For Talent</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>How to find work</li>
            <li>Direct Contracts</li>
            <li>Find freelance jobs worldwide</li>
            <li>Find freelance jobs in the USA</li>
            <li>Win work with ads</li>
            <li>Exclusive resources with Freelancer Plus</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Resources</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>Help & support</li>
            <li>Success stories</li>
            <li>Upwork reviews</li>
            <li>Resources</li>
            <li>Blog</li>
            <li>Affiliate programme</li>
            <li>Free Business Tools</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Company</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>About us</li>
            <li>Leadership</li>
            <li>Investor relations</li>
            <li>Careers</li>
            <li>Our impact</li>
            <li>Press</li>
            <li>Contact us</li>
            <li>Partners</li>
            <li>Trust, safety & security</li>
            <li>Modern slavery statement</li>
          </ul>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-between items-center mt-10 border-t border-gray-700 pt-6">
        <div className="flex space-x-4">
          <span className="font-semibold">Follow us</span>
          <FaFacebookF className="cursor-pointer" />
          <FaLinkedinIn className="cursor-pointer" />
          <FaXTwitter className="cursor-pointer" />
          <FaYoutube className="cursor-pointer" />
          <FaInstagram className="cursor-pointer" />
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <span className="font-semibold">Mobile app</span>
          <AiFillApple className="cursor-pointer" />
          <BsGooglePlay className="cursor-pointer" />
        </div>
      </div>
      
      <div className="text-center text-gray-400 text-sm mt-6">
  &copy; 2015 - 2025 Micro-Sonics. | 
  <a href="/" className="hover:underline"> About </a> | 
  <a href="/Services" className="hover:underline"> Services </a>|
  <a href="/contact" className="hover:underline"> Contact </a>|
  <a href="/term" className="hover:underline"> Terms of Service </a> | 
  <a href="/privacy" className="hover:underline"> Privacy  </a> | 
  <a href="/policy" className="hover:underline"> Policy </a> | 
  <a href="/disclaimer" className="hover:underline"> Disclaimer </a> | 
  
</div>

    </footer>
  );
}

