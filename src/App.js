import React, { useState, useEffect } from 'react';



function App() {

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);

  
const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const countdownToValentines = () => {
      // Get the current date and time in UTC
      const now = new
 
Date();
      const nowUTC = new
 
Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours(), now.getUTCMinutes(), now.getUTCSeconds());

      // Set the target date and time for Valentine's Day in UTC (adjust for UK time zone)
      const targetDate = new Date(2024, 1, 14, 1, 0, 0); // 1 AM UTC to account for UK time zone

      // Calculate the difference in milliseconds between now and Valentine's Day
      const difference = targetDate.getTime() - nowUTC.getTime();

      // If the difference is negative, Valentine's Day has already passed
      if (difference <= 0) {
        // Update the state to display a message
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        return;
      }

      // Calculate the days, hours, minutes, and seconds remaining
      setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      setMinutes(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)));
      setSeconds(Math.floor((difference % (1000 * 60)) / 1000));

      // Update the countdown every second
      setTimeout(countdownToValentines, 1000);
    };

    countdownToValentines();
  }, []);

  return (
    <div class="flex min-h-screen bg-pink-100">
    <main class="flex-1 flex flex-col">
      <header class="p-4 bg-red-500 shadow-md">
        <h1 class="text-2xl font-semibold text-white">Valentine's Countdown :3</h1>
      </header>
      <section class="flex-1 p-4 flex justify-center items-center">
        <div class="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-md" data-v0-t="card">
          <div class="flex flex-col space-y-1.5 p-6">
            <h3 class="font-semibold tracking-tight text-xl text-red-700">Countdown <br></br> to mine and beccas Valentine's Day</h3>
          </div>
          <div class="p-6 space-y-4 text-center">
            <div class="text-6xl font-bold text-red-600">{days}</div>
            <div class="text-2xl text-red-500">Days</div>
            <div class="text-4xl font-bold text-red-600">{hours}</div>
            <div class="text-2xl text-red-500">Hours</div>
            <div class="text-4xl font-bold text-red-600">{minutes}</div>
            <div class="text-2xl text-red-500">Minutes</div>
            <div class="text-4xl font-bold text-red-600">{seconds}</div>
            <div class="text-2xl text-red-500">Seconds</div>
          </div>
        </div>
      </section>
      <div>
        <p className='text-sm text-red-500'>
          a Grandmasponge site made with love for becca 💗
        </p>
      </div>
    </main>
  </div>
  );
}

export default App;
