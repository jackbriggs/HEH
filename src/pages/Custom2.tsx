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
    IonItemDivider,
    IonLabel,
    IonList,
    IonListHeader,
    IonNote,
    IonPage,
    IonRadio,
    IonRadioGroup,
    IonTitle,
    IonToolbar,
  } from "@ionic/react";
  import {add, arrowForwardOutline, nutrition} from 'ionicons/icons';
  import React, {useState} from "react";
  import ExploreContainer from "../components/ExploreContainer";
  import "./Home.css";
  import { format } from "path";
  import { RouteComponentProps } from "react-router";
  
  
  const Custom2: React.FC<RouteComponentProps> = (props) => {

    const [selected, setSelected] = useState<string>('');

    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>HEH App</IonTitle>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/custom1" />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-text-center">
          <h1>How many people are you <br />
          planning/prepping food for?
          </h1>
          <IonList>
          <IonRadioGroup value={selected} onIonChange={e => setSelected(e.detail.value)}>

            <IonItem>
              <IonLabel>Just me</IonLabel>
              <IonRadio slot="start" value="Just me" />
            </IonItem>

            <IonItem>
              <IonLabel>A couple (2)</IonLabel>
              <IonRadio slot="start" value="A couple" />
            </IonItem>

            <IonItem>
              <IonLabel>Family</IonLabel>
              <IonRadio slot="start" value="Family" />
            </IonItem>
          </IonRadioGroup>
          <IonItemDivider>You have selected</IonItemDivider>
          <IonItem>{selected ?? '(none selected'}</IonItem>
        </IonList>


          <IonButton className="ion-padding" onClick={()=> props.history.push('/custom3')}>
            <IonIcon slot="start" icon={arrowForwardOutline}/>
            Next
          </IonButton>
  
        </IonContent>
      </IonPage>
    );
  };
  
  export default Custom2;