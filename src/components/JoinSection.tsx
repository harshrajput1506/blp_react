import React from 'react'
import { Link } from 'react-router-dom';

function JoinSection() {
    return (
        <div className="mt-16 max-w-7xl mx-auto flex justify-center items-center">
          <div className="space-y-5 flex flex-col justify-center items-center">
            <h1 className=" text-5xl font-bold text-center">JOIN US</h1>
            <p className=" text-lg max-w-4xl text-center opacity-80">
            Bharatiya Liberal Party is a Delhi focused political party gearing up to contest the upcoming Delhi Assembly Election in 2025. Our mission is to bring significant reforms to Delhi and promote clean, transparent politics that serve the best interests of people of Delhi.
            </p>
            <Link
            className="mt-8 py-3 px-6 bg-mehroon text-white rounded-full font-medium text-sm"
            to="https://forms.gle/jmqQB4dVsJBV4SQz7"
          >
            Fill The Form
          </Link>       
          </div>
        </div>
      );
}

export default JoinSection