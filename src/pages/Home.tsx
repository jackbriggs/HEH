import {
  IonBadge,
  IonButton,
  IonCheckbox,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {add, arrowForwardOutline, nutrition, star} from 'ionicons/icons';
import React from "react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";
import { format } from "path";
import { RouteComponentProps } from "react-router";


const Home: React.FC<RouteComponentProps> = (props) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar> 
          <IonTitle> HEH App</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-text-center">
        <h1>Welcome to the Healthy Eating Hub App!<br/> Create an account or login to an existing account. </h1>
        <IonButton size="large" expand="block" className="ion-padding" onClick={()=> props.history.push('/get-started')}>
          <IonIcon slot="start" icon={arrowForwardOutline}/>
          Get Started!
        </IonButton>
              <br /><br/><br/><br/>
              <h4>Already have an account?</h4>
              <IonButton className="ion-padding" onClick={() => props.history.push('/login')}>
                  <IonIcon slot="start" icon={arrowForwardOutline} />
          Login
        </IonButton>

      </IonContent>
    </IonPage>
  );
};

export default Home;
