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
  IonLoading,
} from "@ionic/react";
import { arrowForwardOutline, nutrition } from "ionicons/icons";
import React, { useState } from "react";
import { RouteComponentProps } from "react-router";

const Loading: React.FC<RouteComponentProps> = (props) => {
  const [showLoading, setShowLoading] = useState(true);

  setTimeout(() => {
    setShowLoading(false);
  }, 2000);

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
          Thank you! <br /> We're just setting up your account! <br />
          <br />
        </h1>

        <IonLoading
          cssClass="my-custom-class"
          isOpen={showLoading}
          onDidDismiss={() => setShowLoading(false)}
          message={"Please wait..."}
          duration={5000}
        />
        <IonButton className="ion-padding" onClick={()=> props.history.push('/custom1')}>
            <IonIcon slot="start" icon={arrowForwardOutline}/>
            Let's Go!
          </IonButton>
      </IonContent>
    </IonPage>
  );
};
export default Loading;
