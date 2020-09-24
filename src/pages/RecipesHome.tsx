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
    IonCol,
    IonRow,
    IonGrid,
    IonInput,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonDatetime,
} from "@ionic/react";
import { add, arrowForwardOutline, nutrition, star, home, personCircle, search, ellipsisHorizontal, ellipsisVertical, analytics, fastFood, chatbubbleEllipses, list, arrowForwardCircle, walk, warning, wine, wifi, pin, restaurant, arrowForward, school, partlySunny, sunny, moon, cafe } from 'ionicons/icons';
import React, { useState } from "react";
import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";
import { format } from "path";
import { RouteComponentProps } from "react-router";
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

const RecipesHome: React.FC<RouteComponentProps> = (props) => {


    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="secondary">
                        <IonButton onClick={() => props.history.push('/homepage')} >
                            <IonIcon slot="icon-only" icon={home} />
                        </IonButton>
                        <IonButton>
                            <IonIcon slot="icon-only" icon={personCircle} />
                        </IonButton>
                    </IonButtons>
                    <IonTitle>Browse Recipes</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-text-center">
                <IonButton expand="block" size="large"className="ion-padding" onClick={() => props.history.push('/breakfast')}>
                    <IonIcon slot="start" icon={partlySunny} />
                    Breakfast
                </IonButton>

                <IonButton expand="block" color="success"size="large" className="ion-padding" onClick={() => props.history.push('/lunch')}>
                    <IonIcon slot="start" icon={sunny} />
                    Lunch
                </IonButton>

                <IonButton expand="block" color="danger" size="large" className="ion-padding" onClick={() => props.history.push('/dinner')}>
                    <IonIcon slot="start" icon={moon} />
                    Dinner
                </IonButton>

                <IonButton expand="block" color="warning" size="large" className="ion-padding" onClick={() => props.history.push('/snacks')}>
                    <IonIcon slot="start" icon={cafe} />
                    Snacks
                </IonButton>

            </IonContent >
        </IonPage >
    );
};

export default RecipesHome;