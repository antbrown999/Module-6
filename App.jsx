// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg' //
import './App.css'
{/* import React from 'React'
 import PropsDisplayer from './components/Propsdisplayer' */}
import Greeting from './components/Greeting'
import Adress from './components/Address'

export default app 

{/* function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>

     // Slide 16 //


//  )
// }

// const spiderman = {
//  name: 'Spiderman',
//  alterEgo: 'Peter Parker',
//  catchPhrase: 'With great power comes great responsibility'
// }

// Single parent fragment

// const spideyJSXFragment = (<>
//  <h3>{spiderman.name}</h3>
//    <blockquote>{spiderman.catchPhrase}</blockquote>
//    <cite>{spiderman.alterEgo}</cite>
//    </div>
//    </>);

{/* function ExampleComponent() { 
  return ( 
    <div className="ExampleComponent componentBox">
 <h1>My Example Component</h1>
  <p>My first React Component!</p>
 </div> 
 ) } */}


 function App(){
  return (
    <div className="App">
       {/* <PropDisplayer reactLogo={reactLogo} buttonCount={count}/> */} 
      {/* {spideyJSX}
      {spideyJSXFragment} */}
      {/* <ExampleComponent/> */}
      {/* <Welcome name="students">
    <p>Children of Welcome Componenet</p> */}
    {/*</Wecome>
     <PropDisplayer />
      <PropDisplayer myProp="first prop"/>
      <PropDisplayer myProp= "first" prop2="second" prop3={3}/> */}   {/* <PropDisplayer myprop="Harry Styles" age={29}/>
    <PropsDisplayer pets={["cat", "dog", "goldfish"]}/> */}
    {/* <City name="Sydney" /> */}
    {/* <City name="Melbourne" state="VIC" /> */}
    {/* <City name="Chicago" state="Illinois" country="USA" */}
    {/* <Address street="360 Random" zipcode="12" /> */}
    {/* <City name="Chicago" state="Illinois" */}
    {/* <City name="Newcastle">
    <div>Newcastle is a harbour city in the 
    <div><strong>Population:</strong>332, 27</div>
    <div><strong>Random:</strong>HELOOOO!</div> */}
  </City>
   </div>
  )
 } /*}

{/* function Welcome(props) { // custome Wecome component
  return (
    <div className="Welcome">
      {/* if the 'name prop exists, render it on the screen */}
      {/* <h3>Welcome {props.name}!</h3> */}
      {/* if this component has children, render them here */}
      {/* {props.children} */}
      {/* </div> */}
{/*  ) } */}