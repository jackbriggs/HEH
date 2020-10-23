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

const Email: React.FC<RouteComponentProps> = (props) => {

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
                    Excited to have you! <br /> What's your email address? <br />
                    <br />
                </h1>

                <IonItem className="marign">
                    <IonLabel position="floating">Email address</IonLabel>
                    <IonInput required></IonInput>
                </IonItem><br/><br/>

                <h1> And your Date of Birth?</h1>
                <IonItem className="marign">
                    <IonLabel position="floating">DOB</IonLabel>
                    <IonInput placeholder="dd/mm/yyyy"></IonInput>
                </IonItem>

                <IonButton expand="block" className="ion-padding" onClick={() => props.history.push('/loading')}>
                    <IonIcon slot="start" icon={arrowForwardOutline} />
            Next
          </IonButton>

            </IonContent>
        </IonPage>
    );
};
export default Email;