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
    IonItemSliding,
    IonItemOptions,
    IonItemOption,
    IonRadio,
    IonToggle,
    IonItemDivider,
    IonTextarea,
} from "@ionic/react";
import { add, arrowForwardOutline, nutrition, star, home, personCircle, search, ellipsisHorizontal, ellipsisVertical, analytics, fastFood, chatbubbleEllipses, list, arrowForwardCircle, walk, warning, wine, wifi, pin, restaurant, arrowForward } from 'ionicons/icons';
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

const ShoppingList: React.FC<RouteComponentProps> = (props) => {

    const [text, setText] = useState<string>('');
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
                    <IonTitle>Shopping List</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-text-center">
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonItem>
                                <IonTextarea rows={20} placeholder="Enter shopping items here..." value={text} onIonChange={e => setText(e.detail.value!)}>
                                </IonTextarea>
                            </IonItem>
                        </IonCol>
                        
                    </IonRow>
                </IonGrid>

                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonButton size="small" onClick={() => props.history.push('/habittracker')}>
                                <IonIcon slot="start" icon={analytics} />
                                    Habit Tracker
                                </IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton size="small" onClick={() => props.history.push('/mealplanner')}>
                                <IonIcon slot="start" icon={restaurant} />
                                    Meal Planner
                                </IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton size="small" onClick={() => props.history.push('/recipeshome')}>
                                <IonIcon slot="start" icon={search} />
                                    Browse recipes
                                </IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>

            </IonContent>

        </IonPage>
    );


};

export default ShoppingList;