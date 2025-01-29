"use client";

import { useState } from "react";

export default function NewItem() {
    const [count, setCount] = useState(0);
    const Increment = () => setCount(count + 1);
    const Decrement = () => setCount(count - 1);

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-5 w-64 text-center">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Counter</h2>

                {/* Buttons & Counter in One Row */}
                <div className="flex items-center justify-between">
                    <button 
                        onClick={Decrement} 
                        className="w-12 h-12 bg-red-500 text-white text-xl font-bold rounded-lg hover:bg-red-600"
                    >
                        -
                    </button>

                    <p className="text-3xl font-bold text-gray-800 w-12">{count}</p>

                    <button 
                        onClick={Increment} 
                        className="w-12 h-12 bg-blue-500 text-white text-xl font-bold rounded-lg hover:bg-blue-600"
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    );
}
