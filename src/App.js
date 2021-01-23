import { useEffect } from 'react';
import './App.css';
import Category from './Category/Category';
import categories from './Data/data';


function App() {
  
  useEffect(() => {
    /**
     * YOUR ONE SIGNAL CONFIGURATION GOES HERE
     */
  }, []);


   const subscriptionHandler = (tag) => {
    /**
     * HERE WE ARE GOING TO SUBSCRIBE TO THE SELECTED CATEGORY (TAG)
     */
   }

  return (
    <div className="grid-container">
      {
         categories.map((category, index) => <Category key={index} {...category} onSubscribe={subscriptionHandler}/>)
      }
    </div>
  );
}

export default App;
