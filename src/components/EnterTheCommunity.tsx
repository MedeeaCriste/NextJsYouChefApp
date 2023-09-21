import React from 'react'
import CommunityElement from './CommunityElement'

export default function EnterTheCommunity() {

    const communityPath = "/community_"

  return (
    <section className='bg-white/80 py-16 pb-32'>
        <div className='container mx-auto p-4'>
            <h2 className='text-3xl w-full text-center pb-16'>Enter the community!</h2>
            <div className='flex items-center justify-center'>
                <CommunityElement src={`${communityPath}1.png`} title="Find recipes" text="Explore the recipes selected by our stuff uploaded by our community."/>
                <CommunityElement src={`${communityPath}2.png`} title="Review recipes" text="Evaluate and comment on the dishes proposed by others."/>
                <CommunityElement src={`${communityPath}3.png`} title="Add recipes" text="Pass on your know-how by proposing your recipes."/>
            </div>
        </div>
    </section>
  )
}
