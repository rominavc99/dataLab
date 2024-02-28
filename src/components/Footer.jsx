import React from 'react'
import {FaDribbbleSquare, FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaTwitterSquare} from 'react-icons/fa'

function Footer() {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT</h1>
        <p className="py-4">
          Exercitation deserunt exercitation cillum elit ullamco nulla commodo
          aliqua ullamco excepteur aliqua. Mollit velit et labore do sunt cillum
          eiusmod laboris officia dolor labore. Eu velit mollit deserunt
          deserunt mollit excepteur sint nulla id nostrud officia. Enim anim est
          voluptate aliquip Lorem ea.
        </p>
        <div className="flex justify-between md:w-[75%] my-6">
          <FaFacebookSquare size={30} />
          <FaDribbbleSquare size={30} />
          <FaGithubSquare size={30} />
          <FaTwitterSquare size={30} />
          <FaInstagramSquare size={30} />
        </div>
      </div>

      <div className="lg:col-span-2 flex justify-between">
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <li className="py-2 text-sm"> Marketing</li>
            <li className="py-2 text-sm"> Commerce</li>
            <li className="py-2 text-sm"> Insights</li>
            <li className="py-2 text-sm"> Analytics</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="py-2 text-sm"> Pricing</li>
            <li className="py-2 text-sm"> Documentation</li>
            <li className="py-2 text-sm"> Guides</li>
            <li className="py-2 text-sm"> API Status</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li className="py-2 text-sm"> About</li>
            <li className="py-2 text-sm"> Blogs</li>
            <li className="py-2 text-sm"> Jobs</li>
            <li className="py-2 text-sm"> Press</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <li className="py-2 text-sm"> About</li>
            <li className="py-2 text-sm"> Blogs</li>
            <li className="py-2 text-sm"> Jobs</li>
            <li className="py-2 text-sm"> Press</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer