import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faFacebook, faInstagram, faTwitter, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const FooterSection = () => {
  return (
    <footer className="bg-black text-gray-400 text-sm">
      {/* Upper part with links */}
      <div className="max-w-7xl mx-auto py-10 grid grid-cols-2 md:grid-cols-5 gap-8 2xl:ml-[179px] xl:ml-[133px]">
        {/* First Column */}
        <div>
          <ul>
            <li className="mb-2 text-white font-semibold">About Us</li>
            <li>
          <Link legacyBehavior href="/privacy">
              <a className="mb-5 hover:text-gray-400 cursor-pointer">Privacy of Company</a>

            </Link> 
            <li>
            <Link legacyBehavior href="/policy">
              <a className="mb-2 hover:text-gray-400 cursor-pointer">Policy of company</a>

            </Link> 
            </li>
            </li>
            <li className="mb-2 hover:text-gray-400 cursor-pointer">Contact Printer</li>
            <li className="mb-2 hover:text-gray-400 cursor-pointer">Careers</li>
            <li className="mb-2 hover:text-gray-400 cursor-pointer">Investor relations</li>
            <li className="mb-2 hover:text-gray-400 cursor-pointer">Sustainable impact</li>
            <li className="mb-2 hover:text-gray-400 cursor-pointer">Diversity, Equity and Inclusion</li>
            <li className="mb-2 hover:text-gray-400 cursor-pointer">Press center</li>
            <li className="mb-2 hover:text-gray-400 cursor-pointer">The Garage</li>
            {/* <li className="mb-2 hover:text-gray-400 cursor-pointer">Printer Store Newsletter</li>
            <li className="mb-2 hover:text-gray-400 cursor-pointer">Printer Printables Newsletter</li> */}
          </ul>
        </div>

        {/* Second Column */}
        <div>
          <ul>
            <li className="mb-2 text-white font-semibold">Ways to buy</li>
            <li className="mb-2 hover:text-gray-400 cursor-pointer">Shop online</li>
            <li className="mb-2 hover:text-gray-400 cursor-pointer">Call an Printer rep</li>
            <li className="mb-2 hover:text-gray-400 cursor-pointer">Find a reseller</li>
            <li className="mb-2 hover:text-gray-400 cursor-pointer">Enterprise store</li>
            <li className="mb-2 hover:text-gray-400 cursor-pointer">Public sector purchasing</li>
          </ul>
        </div>

        {/* Third Column */}
        <div>
          <ul>
           
         
          
          
            <Link legacyBehavior href="/term&condition">
              <a className="mb-2 hover:text-gray-400 cursor-pointer">Terms & Conditions</a>
            </Link> 
            <br className='mb-[2px]'/>
          
            <Link legacyBehavior href="/Disclaimer">
              <a className="mb-2 hover:text-gray-400 cursor-pointer">Disclaimer</a>
            </Link> 
            <li className="mb-2 hover:text-gray-400 cursor-pointer">Support & troubleshooting</li>
            <li className="mb-2 hover:text-gray-400 cursor-pointer">Download drivers</li>
            <li className="mb-2 hover:text-gray-400 cursor-pointer">Register your product</li>
            <li className="mb-2 hover:text-gray-400 cursor-pointer">Authorized service providers</li>
            <li className="mb-2 hover:text-gray-400 cursor-pointer">Check repair status</li>
            <li className="mb-2 hover:text-gray-400 cursor-pointer">Fraud alert</li>
            <li className="mb-2 hover:text-gray-400 cursor-pointer">Security Center</li>
          </ul>
        </div>

        {/* Fourth Column */}
        <div>
          <ul>
            <li className="mb-2 text-white font-semibold">Printer Partners</li>
            <li className="mb-2 hover:text-gray-400 cursor-pointer">Printer Amplify Partner Program</li>
            <li className="mb-2 hover:text-gray-400 cursor-pointer">Printer Partner Portal</li>
            <li className="mb-2 hover:text-gray-400 cursor-pointer">Developers</li>
          </ul>
        </div>

        {/* Fifth Column: Stay Connected */}
        <div>
          <ul>
            <li className="mb-2 text-white font-semibold">Stay connected</li>
            <div className="flex space-x-4">
              <a href="/" className="text-white hover:text-gray-400 text-3xl">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="/" className="text-white hover:text-gray-400 text-3xl">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="/" className="text-white hover:text-gray-400 text-3xl">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="/" className="text-white hover:text-gray-400 text-3xl">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="/" className="text-white hover:text-gray-400 text-3xl">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
              <a href="/" className="text-white hover:text-gray-400 text-3xl">
                <FontAwesomeIcon icon={faTiktok} />
              </a>
            </div>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-600 py-4 text-center">
        <p className="text-xs text-gray-400">
        © Copyright, All Rights Reserved by ijstartprinter.online
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;