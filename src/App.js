import { useEffect } from 'react';
import './App.css';

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


   const onSubscribe = () => {
    OneSignal.sendTags({ category: 'ReactJS' });
    alert('Thanks for subscribing to ReactJS')
   }

  return (
    <div className="App">
     <button onClick={onSubscribe}>Subscribe to REACT JS</button>
    </div>
  );
}

export default App;
