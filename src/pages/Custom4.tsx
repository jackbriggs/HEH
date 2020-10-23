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
    IonNote,
    IonPage,
    IonTitle,
    IonToolbar,
  } from "@ionic/react";
  import {add, arrowForwardOutline, nutrition} from 'ionicons/icons';
  import React, {useState} from "react";
  import ExploreContainer from "../components/ExploreContainer";
  import "./Home.css";
  import { format } from "path";
  import { RouteComponentProps } from "react-router";

  const checkboxList = [
    { val: 'Vegan', isChecked: false },
    { val: 'Vegetarian', isChecked: false },
    { val: 'Pescatarian', isChecked: false },
    { val: 'Omnivore', isChecked: false }
  ];
  
  
  const Custom4: React.FC<RouteComponentProps> = (props) => {

    const [checked, setChecked] = useState(false);

    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>HEH App</IonTitle>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/custom2" />
            </IonButtons>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-text-center">
          <h1>Choose your dietary preferences. <br /> <br/>
          Select all that apply!
          </h1>

          <IonList>
          <IonItemDivider>Dietary preferences</IonItemDivider>

          {checkboxList.map(({ val, isChecked }, i) => (
            <IonItem key={i}>
              <IonLabel>{val}</IonLabel>
              <IonCheckbox slot="end" value={val} checked={isChecked} />
            </IonItem>
          ))}
        </IonList>





          <IonButton expand="block" className="ion-padding" onClick={()=> props.history.push('/start')}>
            <IonIcon slot="start" icon={arrowForwardOutline}/>
            Finish
          </IonButton>
  
        </IonContent>
      </IonPage>
    );
  };
  
  export default Custom4;