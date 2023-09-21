import React from 'react'
import Recipe from './Recipe'

export default function LatestRecipes() {

    const latestPath = "/latest/latest_"

  return (
    <section className='bg-white py-8'>
        <div className='container mx-auto p-4'>
            <h2 className='text-3xl w-full text-center pb-8'>Latest recipes</h2>
            <div className='flex gap-4 justify-center w-full'>
                <Recipe src={`${latestPath}1.jpg`} text="French croissant with butter and peach jam"/>
                <Recipe src={`${latestPath}2.jpg`} text="Creamy tomato soup"/>
                <Recipe src={`${latestPath}3.jpg`} text="Grilled chicken breast with cooked rice and string-peas"/>
                <Recipe src={`${latestPath}4.jpg`} text="Raspberry jam and vanilla cream cake"/>
            </div>
        </div>
    </section>
  )
}
