import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const deadline = new Date('2024-01-20T16:00:00+07:00').getTime(); // Waktu batas akhir (20 Januari 2024 jam 16.00 WIB)
    const now = new Date().getTime();
    const difference = deadline - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeRemaining(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="time-container">
      <p className="hitung-mundur" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1200">Menuju Acara</p>
      <div className="time-wrapper">
        <div className="timer-box" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1400">
          <p>{timeRemaining.days}</p>
          <span className="timer">Hari</span>
        </div>
        <div className="timer-box" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1600">
          <p>{timeRemaining.hours}</p>
          <span className="timer">Jam</span>
        </div>
        <div className="timer-box" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1800">
          <p>{timeRemaining.minutes}</p>
          <span className="timer">Menit</span>
        </div>
        <div className="timer-box" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="2000">
          <p>{timeRemaining.seconds}</p>
          <span className="timer">Detik</span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
