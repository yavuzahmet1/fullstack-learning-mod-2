import React from 'react'

const Typography = () => {
    return (
        <div >
            <p className='text-sm'>Typograph</p>
            <p className='text-xl'>Typograph</p>
            <p className='text-lg'>Typograph</p>
            <p className='text-3xl'>Typograph</p>
            <p className='text-[5rem]'>Typograph</p>
            {/* Line Clamp */}
            <article>
                <p className='line-clamp-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores fuga corporis quam blanditiis officia impedit voluptate eaque a, voluptas expedita, soluta iste odit ratione illo inventore, neque consectetur? Suscipit error maiores, in harum tempore amet nisi ratione adipisci temporibus quo, expedita non quis numquam aspernatur provident ex? Possimus tempora quasi.</p>
                <hr />
                <p className='font-bold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima rerum reprehenderit eum omnis iusto! Expedita eius, nulla commodi adipisci neque dolore blanditiis modi repudiandae omnis asperiores culpa cumque, voluptatem beatae fugit sunt. Debitis dolor ab commodi cum dolore libero nam odit, officia optio unde quod inventore ullam suscipit harum explicabo.</p>
                <hr />
                <p className='uppercase'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda magnam aperiam officia nulla delectus illo alias esse voluptate sit quos.</p>
                <hr />
                <p className='text-red-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores non dolor sequi est beatae repudiandae tempora. Illum amet reiciendis dolores!</p>
                <hr />
                <p className='bg-slate-200'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam accusamus neque optio eaque aut, eius sed sint, tempore eos temporibus qui dolor, earum enim consequatur voluptates quaerat consequuntur repudiandae! Ex.</p>
            </article>
        </div>
    )
}

export default Typography