import React from 'react'
import FeatureCard from './FeatureCard'
import { LuHandshake } from "react-icons/lu";
import { GoRocket } from "react-icons/go";
import { IoCreateOutline } from "react-icons/io5";
import ProfileCard from './ProfileCard';
import { motion } from "framer-motion";
const LandingPage = () => {
  return (
    <>
      <div className='pt-50'>
        <section>
          <div className='mt-20 flex flex-col justify-center items-center'>
            <h2 className='text-5xl font-bold'>Tired of Hustling Alone?</h2>
            <h2 className='text-5xl font-bold'>Find your perfect partner within  </h2>
            <h2 className='text-5xl mt-3 font-bold bg-[#1b7ec5] text-white rounded-full pb-4 px-4 '> Swipes</h2>
          </div>
        </section>

        <section>
          {/*How it works */}
          <div className=' flex gap-5 flex-col justify-center items-center mb-20'>
            <h2 className='text-5xl font-bold mt-20'>How it Works?</h2>
            <div className=''>
              <FeatureCard
                icon={<IoCreateOutline />}
                title="Create"
                description="Create your profile within minutes."
              />
              <FeatureCard
                icon={<LuHandshake />}
                title="Match"
                description="Swipe and match 130+ dedicated profiles like you would on Tinder."
              />
              <FeatureCard
                icon={<GoRocket />}
                title="Start"
                description="Start working together&#x1f91d;"
              />
            </div>
          </div>
        </section>

        {/* Profile Card*/}
        <section className='mb-10'>
          <div className='flex flex-col justify-center items-center mb-5'>
            <h1 className='text-4xl font-bold '>Your Perfect Match is Waiting...</h1>
            <span className='text-4xl'>&#128071;</span>
          </div>
          <div className="relative w-full overflow-hidden py-4">
            <motion.div
              className="flex gap-8"
              animate={{
                x: ["0%", "-100%"]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  duration: 20,
                  ease: "linear",
                },
              }}
            >
              {[...Array(15)].map((_, i) => (
                <div key={i} className="flex-shrink-0">
                  <ProfileCard />
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        <section>
          <div className='flex justify-center'>
            hiii
          </div>
        </section>
      </div>
    </>
  )
}

export default LandingPage