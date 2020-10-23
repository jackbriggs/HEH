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
  
  
  const Start: React.FC<RouteComponentProps> = (props) => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle> HEH App</IonTitle>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/custom4" />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-text-center">
          <h1>Great! <br/> 
          You're ready to get started!</h1>
          <IonButton expand="block" color="success" className="ion-padding" onClick={()=> props.history.push('/homepage')}>
            <IonIcon slot="start" icon={arrowForwardOutline}/>
            Exlpore app
          </IonButton>
  
        </IonContent>
      </IonPage>
    );
  };
  
  export default Start;
  