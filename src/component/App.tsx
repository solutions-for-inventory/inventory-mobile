import React from 'react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import {
    IonApp,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton
} from '@ionic/react';
import logo from '../assets/logo.svg';
import './App.css';
import {UsersComp} from "./User";


const App: React.FC = () => {
  return (
          <IonApp>
              <IonHeader>
                  <IonToolbar color="primary">
                      <IonTitle>News App v1.0</IonTitle>
                  </IonToolbar>
              </IonHeader>
              <IonContent>
                  <img src={logo} className="App-logo" alt="logo" />
                  <IonButton >Read</IonButton>
                  <UsersComp/>
              </IonContent>
          </IonApp>
  );
};

export default App;
