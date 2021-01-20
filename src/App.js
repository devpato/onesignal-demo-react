import { useEffect } from 'react';
import './App.css';
import Category from './Category/Category';
import categories from './Data/data';


function App() {
  window.OneSignal = window.OneSignal || [];
  const OneSignal = window.OneSignal;
  useEffect(() => {
    OneSignal.push(function () {
      OneSignal.init(
        {
          appId: "1a9bbed2-9294-4192-a736-01b461cb389a",
          promptOptions: {
            slidedown: {
              enabled: true,
              actionMessage: "We'd like to show you notifications for the latest news and updates.",
              acceptButtonText: "OMG YEEEEESS!",
              cancelButtonText: "NAHHH",
              categories: {
                  tags: [
                      {
                          tag: "New Version",
                          label: "New App Version",
                      },
                      {
                        tag: "SDK Updates",
                        label: "SDK Updates",
                    }
                  ]
              }     
          } 
        },
        welcomeNotification: {
          "title": "One Signal",
          "message": "Thanks for subscribing!",
        } 
      });
      OneSignal.setEmail("devpatovg@gmail.com");
    });
  }, []);


   const subscriptionHandler = (label, tag) => {
    OneSignal.sendTags({ category: tag });
    alert(`Thanks for subscribing to ${label}`)
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
