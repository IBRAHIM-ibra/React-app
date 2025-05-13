import { useState } from 'react'
import '../styles/app.css'
import Hero from '../Smains/Hero';
import Desc from '../Smains/Desc';
import Statis from '../Smains/Statis';
import Team from '../Smains/Team';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Hero/>
    <Desc/>
    <Statis/>
    <Team/>
    </>
  );
}

export default App
