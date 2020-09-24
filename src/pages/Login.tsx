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
    IonInput,
} from "@ionic/react";
import { add, arrowForwardOutline, nutrition, logIn } from 'ionicons/icons';
import React from "react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";
import { format } from "path";
import { RouteComponentProps } from "react-router";


const Login: React.FC<RouteComponentProps> = (props) => {
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
                <h1>Login</h1>
                <IonItem className="marign">
                    <IonLabel position="floating">Email address</IonLabel>
                    <IonInput></IonInput>
                </IonItem>
          
                <IonButton className="ion-padding" onClick={() => props.history.push('/homepage')}>
                    <IonIcon slot="start" icon={arrowForwardOutline} />
            Go
          </IonButton>

            </IonContent>
        </IonPage>
    );
};

export default Login;
