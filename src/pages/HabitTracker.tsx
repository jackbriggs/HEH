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
    IonSegment,
    IonSegmentButton,
    IonDatetime,
} from "@ionic/react";
import { add, arrowForwardOutline, nutrition, star, home, personCircle, search, ellipsisHorizontal, ellipsisVertical, analytics, fastFood, chatbubbleEllipses, list, arrowForwardCircle, walk, warning, wine, wifi, pin, restaurant, arrowForward, bookmark, camera, heart, call, globe, basket, happyOutline, person, calendarOutline } from 'ionicons/icons';
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

const HabitTracker: React.FC<RouteComponentProps> = (props) => {

    const [text, setText] = useState<string>('');
    const [selectedDate, setSelectedDate] = useState<string>('');
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/homepage" />
                    </IonButtons>
                    <IonButtons slot="secondary">
                        <IonButton onClick={() => props.history.push('/homepage')} >
                            <IonIcon slot="icon-only" icon={home} />
                        </IonButton>
                        <IonButton>
                            <IonIcon slot="icon-only" icon={personCircle} />
                        </IonButton>
                    </IonButtons>
                    <IonTitle>Habit Tracker</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-text-center">

                <IonItem>
                    <IonIcon slot="start" icon={calendarOutline} />
                    <IonLabel>
                        Select day for tracking: </IonLabel>
                    <IonDatetime displayFormat="DDDD MMM D" min="2020" max="2020" value={selectedDate} onIonChange={e => setSelectedDate(e.detail.value!)}></IonDatetime>
                </IonItem>
                <br />

                <IonCard>
                    <IonItem>
                        <IonIcon icon={person} slot="start" />
                        <IonLabel>I achieved my Whole Foods goals today</IonLabel>
                    </IonItem>
                    <IonCardContent>
                        <IonLabel>Morning</IonLabel>
                        <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)}>
                            <IonSegmentButton value="yes">
                                <IonLabel>Yes</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="no">
                                <IonLabel>No</IonLabel>
                            </IonSegmentButton>
                        </IonSegment>
                        <IonLabel>Afternoon</IonLabel>
                        <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)}>
                            <IonSegmentButton value="yes">
                                <IonLabel>Yes</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="no">
                                <IonLabel>No</IonLabel>
                            </IonSegmentButton>
                        </IonSegment>
                        <IonLabel>Evening</IonLabel>
                        <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)}>
                            <IonSegmentButton value="yes">
                                <IonLabel>Yes</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="no">
                                <IonLabel>No</IonLabel>
                            </IonSegmentButton>
                        </IonSegment>
                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonItem>
                        <IonIcon icon={person} slot="start" />
                        <IonLabel>I achieved my Smart Carbs goals today</IonLabel>
                    </IonItem>
                    <IonCardContent>
                        <IonLabel>Morning</IonLabel>
                        <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)}>
                            <IonSegmentButton value="yes">
                                <IonLabel>Yes</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="no">
                                <IonLabel>No</IonLabel>
                            </IonSegmentButton>
                        </IonSegment>
                        <IonLabel>Afternoon</IonLabel>
                        <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)}>
                            <IonSegmentButton value="yes">
                                <IonLabel>Yes</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="no">
                                <IonLabel>No</IonLabel>
                            </IonSegmentButton>
                        </IonSegment>
                        <IonLabel>Evening</IonLabel>
                        <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)}>
                            <IonSegmentButton value="yes">
                                <IonLabel>Yes</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="no">
                                <IonLabel>No</IonLabel>
                            </IonSegmentButton>
                        </IonSegment>
                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonItem>
                        <IonIcon icon={person} slot="start" />
                        <IonLabel>I achieved my Protein goals today</IonLabel>
                    </IonItem>
                    <IonCardContent>
                        <IonLabel>Morning</IonLabel>
                        <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)}>
                            <IonSegmentButton value="yes">
                                <IonLabel>Yes</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="no">
                                <IonLabel>No</IonLabel>
                            </IonSegmentButton>
                        </IonSegment>
                        <IonLabel>Afternoon</IonLabel>
                        <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)}>
                            <IonSegmentButton value="yes">
                                <IonLabel>Yes</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="no">
                                <IonLabel>No</IonLabel>
                            </IonSegmentButton>
                        </IonSegment>
                        <IonLabel>Evening</IonLabel>
                        <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)}>
                            <IonSegmentButton value="yes">
                                <IonLabel>Yes</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="no">
                                <IonLabel>No</IonLabel>
                            </IonSegmentButton>
                        </IonSegment>
                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonItem>
                        <IonIcon icon={person} slot="start" />
                        <IonLabel>I achieved my Veg goals today</IonLabel>
                    </IonItem>
                    <IonCardContent>
                        <IonLabel>Morning</IonLabel>
                        <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)}>
                            <IonSegmentButton value="yes">
                                <IonLabel>Yes</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="no">
                                <IonLabel>No</IonLabel>
                            </IonSegmentButton>
                        </IonSegment>
                        <IonLabel>Afternoon</IonLabel>
                        <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)}>
                            <IonSegmentButton value="yes">
                                <IonLabel>Yes</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="no">
                                <IonLabel>No</IonLabel>
                            </IonSegmentButton>
                        </IonSegment>
                        <IonLabel>Evening</IonLabel>
                        <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)}>
                            <IonSegmentButton value="yes">
                                <IonLabel>Yes</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="no">
                                <IonLabel>No</IonLabel>
                            </IonSegmentButton>
                        </IonSegment>
                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonItem>
                        <IonIcon icon={person} slot="start" />
                        <IonLabel>I achieved my Snacks goals today</IonLabel>
                    </IonItem>
                    <IonCardContent>
                        <IonLabel>Morning</IonLabel>
                        <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)}>
                            <IonSegmentButton value="yes">
                                <IonLabel>Yes</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="no">
                                <IonLabel>No</IonLabel>
                            </IonSegmentButton>
                        </IonSegment>
                        <IonLabel>Afternoon</IonLabel>
                        <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)}>
                            <IonSegmentButton value="yes">
                                <IonLabel>Yes</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="no">
                                <IonLabel>No</IonLabel>
                            </IonSegmentButton>
                        </IonSegment>
                        <IonLabel>Evening</IonLabel>
                        <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)}>
                            <IonSegmentButton value="yes">
                                <IonLabel>Yes</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="no">
                                <IonLabel>No</IonLabel>
                            </IonSegmentButton>
                        </IonSegment>
                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonItem>
                        <IonIcon icon={person} slot="start" />
                        <IonLabel>I achieved my Hydration goals today</IonLabel>
                    </IonItem>
                    <IonCardContent>
                        <IonLabel>Morning</IonLabel>
                        <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)}>
                            <IonSegmentButton value="yes">
                                <IonLabel>Yes</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="no">
                                <IonLabel>No</IonLabel>
                            </IonSegmentButton>
                        </IonSegment>
                        <IonLabel>Afternoon</IonLabel>
                        <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)}>
                            <IonSegmentButton value="yes">
                                <IonLabel>Yes</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="no">
                                <IonLabel>No</IonLabel>
                            </IonSegmentButton>
                        </IonSegment>
                        <IonLabel>Evening</IonLabel>
                        <IonSegment onIonChange={e => console.log('Segment selected', e.detail.value)}>
                            <IonSegmentButton value="yes">
                                <IonLabel>Yes</IonLabel>
                            </IonSegmentButton>
                            <IonSegmentButton value="no">
                                <IonLabel>No</IonLabel>
                            </IonSegmentButton>
                        </IonSegment>
                    </IonCardContent>
                </IonCard>

                <IonButton expand="block" size="large" color="success" className="ion-padding" onClick={() => props.history.push('/habittrackercalendar')}>
                    <IonIcon slot="start" icon={arrowForwardCircle} />
                    Switch to Total Module View
                </IonButton>

                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonButton expand="block" size="small" onClick={() => props.history.push('/shoppinglist')}>
                                <IonIcon slot="start" icon={list} />
                                    Shopping List
                                </IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton expand="block" size="small" onClick={() => props.history.push('/mealplanner')}>
                                <IonIcon slot="start" icon={restaurant} />
                                    Meal Planner
                                </IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton expand="block" size="small" onClick={() => props.history.push('/recipeshome')}>
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

export default HabitTracker;