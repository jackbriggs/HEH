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
    IonThumbnail,
} from "@ionic/react";
import { add, arrowForwardOutline, nutrition, star, home, personCircle, search, ellipsisHorizontal, ellipsisVertical, analytics, fastFood, chatbubbleEllipses, list, arrowForwardCircle, walk, warning, wine, wifi, pin, restaurant, arrowForward, calendarOutline } from 'ionicons/icons';
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


const MealPlanner: React.FC<RouteComponentProps> = (props) => {
    
    const [selectedDate, setSelectedDate] = useState<string>('');
    const [breakfast, setBreakfast] = useState<string>('');
    const [lunch, setLunch] = useState<string>('');
    const [dinner, setDinner] = useState<string>('');
    const [snacks, setSnacks] = useState<string>('');


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
                    <IonTitle>Meal Planner</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-text-center">
                <IonItem>
                    <IonIcon slot="start" icon={calendarOutline}/>
                    <IonLabel>
                        Select which day you would like to plan for: </IonLabel>
                    <IonDatetime displayFormat="DDDD MMM D" min="2020" max="2020" value={selectedDate} onIonChange={e => setSelectedDate(e.detail.value!)}></IonDatetime>
                </IonItem>
                <br />

                <IonCard>
                    <IonItem>
                        <IonIcon icon={restaurant} slot="start" />
                        <IonLabel>Breakfast</IonLabel>
                        <IonButton fill="outline" slot="end" onClick={() => props.history.push('/breakfast')}>Browse</IonButton>
                    </IonItem>

                    <IonCardContent>
                        Enter your breakfast for the selected day
                        <IonItem>
                            <IonIcon slot="start" icon={arrowForward} />
                            <IonInput value={breakfast} placeholder="Breakfast?" onIonChange={e => setBreakfast(e.detail.value!)}></IonInput>
                        </IonItem>
                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonItem>
                        <IonIcon icon={restaurant} slot="start" />
                        <IonLabel>Lunch</IonLabel>
                        <IonButton fill="outline" slot="end" onClick={() => props.history.push('/lunch')}>Browse</IonButton>
                    </IonItem>
                    <IonCardContent>
                        Enter your lunch for for the selected day
                        <IonItem>
                            <IonIcon slot="start" icon={arrowForward} />
                            <IonInput value={lunch} placeholder="Lunch?" onIonChange={e => setLunch(e.detail.value!)}></IonInput>
                        </IonItem>
                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonItem>
                        <IonIcon icon={restaurant} slot="start" />
                        <IonLabel>Dinner</IonLabel>
                        <IonButton fill="outline" slot="end" onClick={() => props.history.push('/dinner')}>Browse</IonButton>
                    </IonItem>
                    <IonCardContent>
                        Enter your dinner for for the selected day
                        <IonItem>
                            <IonIcon slot="start" icon={arrowForward} />
                            <IonInput value={dinner} placeholder="Dinner?" onIonChange={e => setDinner(e.detail.value!)}></IonInput>
                        </IonItem>
                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonItem>
                        <IonIcon icon={restaurant} slot="start" />
                        <IonLabel>Snacks</IonLabel>
                        <IonButton fill="outline" slot="end" onClick={() => props.history.push('/snacks')}>Browse</IonButton>
                    </IonItem>

                    <IonCardContent>
                        Enter your snacks for for the selected day
                        <IonItem>
                            <IonIcon slot="start" icon={arrowForward} />
                            <IonInput value={snacks} placeholder="Snacks?" onIonChange={e => setSnacks(e.detail.value!)}></IonInput>
                        </IonItem>
                    </IonCardContent>
                </IonCard>
                <IonGrid>
                    <IonRow className="ion-align-items-center">
                        <IonCol>
                            <IonButton expand="block" size="small" onClick={() => props.history.push('/habittracker')}>
                                <IonIcon slot="start" icon={analytics} />
                                    Habit Tracker
                                </IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton expand="full" size="small" onClick={() => props.history.push('/mealplanner')}>
                                <IonIcon slot="start" icon={restaurant} />
                                    Edit Meal Plan
                                </IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton expand="full" size="small" onClick={() => props.history.push('/shoppinglist')}>
                                <IonIcon slot="start" icon={list} />
                                    Shopping List
                                </IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton expand="full" size="small" onClick={() => props.history.push('/mealplanner')}>
                                <IonIcon slot="start" icon={search} />
                                    Live Chat 
                                </IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );


};

export default MealPlanner;