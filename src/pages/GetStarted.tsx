import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { arrowForwardOutline, nutrition } from "ionicons/icons";
import React, { useRef } from "react";
import { RouteComponentProps } from "react-router";

const GetStarted: React.FC<RouteComponentProps> = (props) => {
  

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>HEH App</IonTitle>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-text-center">
        <h1>
          Hello! <br /> We are the Healthy Eating Hub! <br />
          <br />
          And you are?
        </h1>

        <IonItem className="marign">
          <IonLabel position="floating">First Name</IonLabel>
          <IonInput></IonInput>
        </IonItem>
        <IonItem className="margin">
          <IonLabel position="floating">Last Name</IonLabel>
          <IonInput id="last-name"></IonInput>
        </IonItem>
        <IonButton expand="block" className="ion-padding" onClick={()=> props.history.push('/email')}>
          <IonIcon slot="start" icon={arrowForwardOutline}/>
          Next
        </IonButton>

      </IonContent>
    </IonPage>
  );
};
export default GetStarted;
