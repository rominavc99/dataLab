import React from 'react'
import Laptop from '../assets/laptop.jpg'

function Analytics() {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img
          className="w-[500px] mx-auto my-4"
          src={Laptop}
          alt="A laptop image with some graphics popping out the screen"
        />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] uppercase font-bold">
            DATA ANALYTICS DASHBOARD
          </p>
          <h1 className="md-text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage data analytics centrally
          </h1>
          <p>
            Quis aliquip excepteur culpa laboris. Eu culpa laboris reprehenderit
            enim id ullamco officia sit sint anim nisi mollit eu. Fugiat mollit
            eu excepteur laborum elit. Amet qui magna laboris deserunt laborum
            nisi exercitation est officia enim consequat cillum. Tempor minim
            excepteur labore commodo laboris. Ullamco in anim duis non cupidatat
            quis officia irure quis ut.
          </p>
          <button className="bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Analytics