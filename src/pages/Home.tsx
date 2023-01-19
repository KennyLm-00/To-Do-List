import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonButton,IonIcon, IonToolbar } from '@ionic/react';
import { IonItem, IonLabel, IonList } from '@ionic/react';
import { star } from 'ionicons/icons';

import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">To-Do List</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer />
        <IonList>
        {Array(10).fill(0).map((_, i) =>(
          <IonItem key = {i}>
          <IonLabel>Item {i}</IonLabel>
        </IonItem>
        ))}
      </IonList>
        <IonButton fill = "solid" size = "small">
        <IonIcon slot="start" icon={star}></IonIcon>
        Submit
        </IonButton>
      {/* <IonButton disabled={true}>Disabled</IonButton> */}
      </IonContent>
    </IonPage>
  );
};

export default Home;
