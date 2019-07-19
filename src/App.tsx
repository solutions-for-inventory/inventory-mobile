import React from 'react';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import {
    IonApp,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonButton
} from '@ionic/react';



import logo from './logo.svg';
import './App.css';

const App: React.FC = () => {
  return (
      <IonApp>
          <IonHeader>
              <IonToolbar color="primary">
                  <IonTitle>News App v1.0</IonTitle>
              </IonToolbar>
          </IonHeader>
          <IonContent>
              <IonCard>
                  <IonCardHeader>
                      <IonCardTitle>
                          News title
                      </IonCardTitle>
                      <IonCardSubtitle>
                          News subtitle
                      </IonCardSubtitle>

                  </IonCardHeader>
                  <IonCardContent>
                      <img src={logo} className="App-logo" alt="logo" />
                      <IonButton >Read</IonButton>
                  </IonCardContent>
              </IonCard>
          </IonContent>
      </IonApp>
  );
};

export default App;
