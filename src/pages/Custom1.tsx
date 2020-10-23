import {
    IonBackButton,
    IonBadge,
    IonButton,
    IonButtons,
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
  import {add, arrowForwardOutline, nutrition} from 'ionicons/icons';
  import React from "react";
  import ExploreContainer from "../components/ExploreContainer";
  import "./Home.css";
  import { format } from "path";
  import { RouteComponentProps } from "react-router";
  
  
  const Custom1: React.FC<RouteComponentProps> = (props) => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>HEH App</IonTitle>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/dob" />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-text-center">
          <h1>Woo Hoo! <br /> <br/>
          So we can customise the program to your life, let's get to know your food preferences a little better!
          </h1>
          <IonButton expand="block" className="ion-padding" onClick={()=> props.history.push('/custom2')}>
            <IonIcon slot="start" icon={arrowForwardOutline}/>
            Get Started!
          </IonButton>
  
        </IonContent>
      </IonPage>
    );
  };
  
  export default Custom1;