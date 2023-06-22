
import { Inter } from 'next/font/google'
import Head from 'next/head';
import Image from 'next/image';
import axios from 'axios';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import Weather from '@/components/Weather';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(url).then((response) => {
      setWeather(response.data);
      // console.log(response.data);
    });
    setCity('');
    setLoading(false);
  };

  if (loading) {
    return <Spinner />;
  } else{
  return (
    <main
      className={`flex bg5 min-h-screen flex-col items-center justify-center p-24 ${inter.className}`}
    >
      <div className="container bg1 max-w-[700px] h-[50rem] rounded-2xl">
     
           
         {/* Search */}
        <div className='relative flex justify-between items-center max-w-[500px] w-full m-auto pt-20 px-2 text-white z-10'>
          <form
            onSubmit={fetchWeather}
            className='flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-700 text-black rounded-2xl'
          >
            <div>
              <input
                onChange={(e) => setCity(e.target.value)}
                className='bg-transparent border-none text-white placeholder-neutral-900 focus:outline-none text-2xl'
                type='text'
                placeholder='Search city'
              />
            </div>
            <button onClick={fetchWeather}>
              <BsSearch size={20} />
            </button>
          </form>
        </div> 

        {weather.main && <Weather data={weather}/>}

      </div>
    </main>
  )
}
}
