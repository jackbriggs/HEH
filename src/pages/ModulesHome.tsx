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
import { add, arrowForwardOutline, nutrition, star, home, personCircle, search, ellipsisHorizontal, ellipsisVertical, analytics, fastFood, chatbubbleEllipses, list, arrowForwardCircle, walk, warning, wine, wifi, pin, restaurant, arrowForward, school } from 'ionicons/icons';
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

const ModulesHome: React.FC<RouteComponentProps> = (props) => {

   
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
                    <IonTitle>Explore Modules</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-text-center">
                <h1>
                    Modules <br /><br /></h1>

                <IonGrid>
                    <IonRow className="ion-align-items-center">
                        <IonCol>
                            <IonButton expand="block" size="large" onClick={() => props.history.push('/wholefoods')}>
                                    Whole Foods
                                </IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton expand="block" size="large" onClick={() => props.history.push('/smartcarbs')}>
                                    Smart Carbs
                                </IonButton>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonButton expand="block" size="large" onClick={() => props.history.push('/shoppinglist')}>
                                    The Plate Model
                                </IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton expand="block" size="large" onClick={() => props.history.push('/homepage')}>
                                    Energy Balance
                                </IonButton>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonButton expand="block" size="large" onClick={() => props.history.push('/shoppinglist')}>
                                    Protein
                                </IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton expand="block" size="large" onClick={() => props.history.push('/homepage')}>
                                    Veg Goals
                                </IonButton>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonButton expand="block" size="large" onClick={() => props.history.push('/shoppinglist')}>
                                    Snacks
                                </IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton expand="block" size="large" onClick={() => props.history.push('/homepage')}>
                                    Hyrdation
                                </IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                
            </IonContent >
        </IonPage >
    );
};

export default ModulesHome;