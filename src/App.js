import { useEffect } from 'react';
import './App.css';

function App() {
  window.OneSignal = window.OneSignal || [];
  const OneSignal = window.OneSignal;
  useEffect(() => {
    OneSignal.push(()=> {
      OneSignal.init(
        {
          appId: "1a9bbed2-9294-4192-a736-01b461cb389a", //STEP 9
          promptOptions: {
            slidedown: {
              enabled: true,
              actionMessage: "We'd like to show you notifications for the latest news and updates about the following categories.",
              acceptButtonText: "OMG YEEEEESS!",
              cancelButtonText: "NAHHH",
              categories: {
                  tags: [
                      {
                          tag: "react",
                          label: "ReactJS",
                      },
                      {
                        tag: "angular",
                        label: "Angular",
                      },
                      {
                        tag: "vue",
                        label: "VueJS",
                      },
                      {
                        tag: "js",
                        label: "JavaScript",
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

      /**Automatically subscribe to the new_app_version tag */
      OneSignal.sendTag("new_app_version", "new_app_version", tagsSent => {
        // Callback called when tag has finished sending
        console.log('new_app_version TAG SENT', tagsSent);
      });
    });
  }, []);

  return (
    <>
      <h1>One Signal - React DEMO</h1>
    </>
  );
}

export default App;
