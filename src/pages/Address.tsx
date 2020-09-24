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
  import React from "react";
  import { RouteComponentProps } from "react-router";
  
  const Address: React.FC<RouteComponentProps> = (props) => {
  
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
            Great! <br /> Now we need your address <br />
            <br />
          </h1>
  
          <IonItem className="marign">
            <IonLabel position="floating">Address</IonLabel>
            <IonInput></IonInput>
          </IonItem>
          <IonItem className="marign">
            <IonLabel position="floating">City, postcode</IonLabel>
            <IonInput></IonInput>
          </IonItem>
          <IonButton className="ion-padding" onClick={()=> props.history.push('/dob')}>
            <IonIcon slot="start" icon={arrowForwardOutline}/>
            Next
          </IonButton>
  
        </IonContent>
      </IonPage>
    );
  };
  export default Address;