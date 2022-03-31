import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


function App() {
  const [audio] = useState(new Audio('./alrem.wav'));
  const [audio2] = useState(new Audio('./aggresive.wav'));
  const [audio3] = useState(new Audio('./clasic.wav'));
  const [audio4] = useState(new Audio('./sond.wav'));
  const [playing, setPlaying] = useState(false);
  const [playing2, setPlaying2] = useState(false);
  const [playing3, setPlaying3] = useState(false);
  const [playing4, setPlaying4] = useState(false);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
    playing2 ? audio2.play() : audio2.pause();
    playing3 ? audio3.play() : audio3.pause();
    playing4 ? audio4.play() : audio4.pause();
  },
  [playing,playing2,playing3,playing4]
);

const handleChange = () => {
  setPlaying(!playing);
  setPlaying2(false)
  setPlaying3(false)
  setPlaying4(false)
}
const handleChange2 = () => {
  setPlaying(false);
  setPlaying2(!playing2)
  setPlaying3(false)
  setPlaying4(false)
}
const handleChange3 = () => {
  setPlaying(false);
  setPlaying2(false)
  setPlaying3(!playing3)
  setPlaying4(false)
}
const handleChange4= () => {
  setPlaying(false);
  setPlaying2(false)
  setPlaying3(false)
  setPlaying4(!playing4)
}


  return (
   <div>
      <button className='btn' onClick={handleChange}>Alarm</button>
     <button className='btn' onClick={handleChange2} >Aggresive</button>
     <button className='btn' onClick={handleChange3}>Classic</button>
     <button className='btn' onClick={handleChange4}>Sound</button>
   </div>
   
  );
}

export default App;
