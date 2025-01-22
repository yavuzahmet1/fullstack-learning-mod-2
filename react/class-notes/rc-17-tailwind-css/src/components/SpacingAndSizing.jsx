import React from 'react'

const SpacingAndSizing = () => {
    return (
        <div>
            <h3 className='text-2xl'>Spacing And Sizing</h3>
            {/* //px-> sağden soldan padding
            //py->alt üst padding */}
            <button className='bg-blue-200 text-white rounded-xl px-3 m-3 '>Click</button>
            <button className=" border-green-800 border-[3px] rounded-md bg-green-300 p-3" >Click</button>
            <div>
                <button className='bg-amber-500 w-20 rounded-full m-5 p-2 text-blue-800'>Save</button>

            </div>
        </div>
    )
}

export default SpacingAndSizing