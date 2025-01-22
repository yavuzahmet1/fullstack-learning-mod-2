import React from 'react'

const HoverAndFocus = () => {
    return (
        <div>
            <h1 className='text-2xl text-center'>Hover And Focus</h1>
            <div>
                <button className='w-40 bg-sky-400 text-white rounded-xl p-2 hover:bg-sky-500 shadow-amber-200' >Save</button>
                <button className='w-40 bg-yellow-400 text-white rounded-xl p-2 hover:bg-sky-500 shadow-amber-200 m-4 focus:ring-3 focus:right-yellow-200' >Save</button>
                <div className='mt-4'>
                    <input type="email" className='border-red-900 border text-gray-900 rounded-lg w-1/2 p-2.5 outline-yellow-600 peer' />
                    <p className='mt-2 text-red-600  hidden peer-focus:block'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, soluta?</p>
                </div>
            </div>
        </div>
    )
}

export default HoverAndFocus