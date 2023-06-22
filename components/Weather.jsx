import React from 'react'
import Image from 'next/image';

const Weather = ({data}) => {
  console.log(data.weather);
  return (
    <div className='relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto p-4 text-gray-300 z-10'>
      {/* Top */}
      <div className='relative flex justify-between pt-12'>
        <div className='flex flex-col items-center'>
          <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt='/'
            width='140'
            height='100'
          />
          <p className='text-2xl'>{data.weather[0].main}</p>
        </div>
        <p className='text-9xl'>{data.main.temp.toFixed(0)}&#176;</p>


      </div>

      <div className='bg-black/50 relative p-8 pr-3 pl-3 rounded-md'>
      <p className='text-2xl text-center pb-10'>Weather in {data.name}</p>

      <div className='flex justify-evenly text-center'>
        <div>
            <p className='font-bold text-2xl'>{data.main.feels_like.toFixed(0)}&#176;</p>
            <p className='text-xl'>Feels Like</p>
        </div>
        <div>
            <p className='font-bold text-2xl'>{data.main.humidity}%</p>
            <p className='text-xl'>Humidity</p>
        </div>

        <div>
            <p className='font-bold text-2xl'>{data.wind.speed.toFixed(0)} MPH</p>
            <p className='text-xl'>Winds</p>
        </div>

        <div>
          <p className='font-bold text-2xl'>{data.clouds.all}%</p>
          <p className='text-xl'>Clouds</p>
        </div>

    
      </div>
     
      </div>
  

      <p className='text-2xl text-center pb-[13rem]'></p>
      
     
   </div>

  )
}

export default Weather