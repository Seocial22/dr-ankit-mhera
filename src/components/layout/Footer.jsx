import Image from "next/image";
import Link from "next/link";
import React from "react";
import
  {
    FaFacebookF,
    FaInstagram,
    
    FaPhoneAlt,
  } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Footer()
{
  return (
    <footer className="bg-[#b97a57] text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Left Logo & Description */}
        <div  >
          <div className="flex items-center gap-2 ">
            <Image
              src="/images/logo.webp"   // path in your /public folder
              alt="Dr. Ankit Mehra Logo"
              width={80}
              height={80}
              className="bg-white rounded-xl"
            />
            <p className="text-2xl font-serif  font-medium  ">
              Dr. Ankit Mehra
            </p>
          </div>

          <p className="text-sm mt-5 leading-relaxed text-justify">
            Best Dermatologist in Ajmer. Dr. Ankit Mehra brings 12+ years of expertise in advanced skin, hair, and laser treatments—helping you achieve healthy, glowing skin.


          </p>
        </div>

        {/* Contact Us */}
        <div className="text-sm">
          <h3 className="text-lg font-semibold mb-3">Our Services</h3>
<div className="flex flex-col gap-2">
          <Link href={'/skin-treatments'}> <p>Skin Treatments</p></Link>
          <Link href={'/hair-treatments-2'}>   <p>Hair Treatments</p></Link>
            <Link href={'/laser-treatments'}>  <p>Laser Treatments</p></Link></div>
        </div>

        {/* Get In Touch */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Get In Touch</h3>
          <div className="flex items-center space-x-3">
            <div className="bg-white text-[#b97a57] p-2 rounded-lg">
              <FaPhoneAlt />
            </div>
            <div>
              <a
                href="tel:+919697041111"
                className="text-sm text-white hover:underline"
              >
                +91 96970 41111
              </a>


            </div>
          </div>
         
         
          <div className="flex mt-5 items-center space-x-3">
            <div className="bg-white text-[#b97a57] p-2 rounded-lg">
              <MdEmail />
            </div>
            <div>
              <Link
                href="mailto:ankit456.mehra@gmail.com"
                className="text-sm text-white hover:underline"
              >
                ankit456.mehra@gmail.com
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <div className="bg-white text-[#b97a57] p-2 rounded-lg">
              <FaLocationDot />
            </div>
            <div>

              <Link
                href="https://www.google.com/maps/place/Dr+Ankit+Mehra(MD+Skin+%26+VD)+%E0%A4%9A%E0%A4%B0%E0%A5%8D%E0%A4%AE%E0%A4%B0%E0%A5%8B%E0%A4%97,%E0%A4%AF%E0%A5%8C%E0%A4%A8%E0%A4%B0%E0%A5%8B%E0%A4%97+%E0%A4%8F%E0%A4%B5%E0%A4%82+%E0%A4%B8%E0%A5%8C%E0%A4%A8%E0%A5%8D%E0%A4%A6%E0%A4%B0%E0%A5%8D%E0%A4%AF%E0%A4%B0%E0%A5%8B%E0%A4%97+%E0%A4%B5%E0%A4%BF%E0%A4%B6%E0%A5%87%E0%A4%B7%E0%A4%9C%E0%A5%8D%E0%A4%9E(Senior+Skin+Specialist+Dermatologist+%26+Cosmetologist)/@26.4715859,74.6335588,17.91z/data=!4m6!3m5!1s0x396be7ec6b89ce17:0x9014bae9b1d9ff78!8m2!3d26.4715641!4d74.6352111!16s%2Fg%2F11mn889n60?entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm pt-2 text-white hover:underline text-justify"
              >
                62, Lane no 2, opp. Hotel Ambassador, Nagina Bagh,
                Muslim Mochi Mohalla, Ajmer, Rajasthan 305001
              </Link>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Link</h3>
          <ul className="flex flex-col gap-3 text-sm">
           <Link href={'/'} ><li>Home</li> </Link>
            <Link href={'/about-us'}>  <li>About Us</li></Link>
            <Link href={'/blogs'}> <li>Blog</li></Link>
            <Link href={'/gallery-2'}> <li>Gallery</li></Link >
            <Link href={'/contact-us'} ><li>Contact Us</li></Link >
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-white/30 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6">
        <p className="text-sm order-1 text-center md:text-left">
          Copyright © {new Date().getFullYear()} All Rights Reserved.
        </p>

        <div>Powered by <Link target="_blank" href={'https://seocialmedia.in/'} > <span className="hover:underline cursor-pointer">SEOcial Media Solutions</span></Link>

</div>
        <div className="flex items-center space-x-3 mt-4 md:mt-0">
          <p className="text-sm">Follow Us On Social</p>
          <div className="flex space-x-3">
            <Link
              href="https://www.facebook.com/drankitmeherda"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#b97a57] p-2 rounded"
            >
              <FaFacebookF />
            </Link>
            <a
              href="https://www.instagram.com/drankitmehra/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#b97a57] p-2 rounded"
            >
              <FaInstagram />
            </a>

            
          </div>
        </div>
      </div>
    </footer>
  );
}
