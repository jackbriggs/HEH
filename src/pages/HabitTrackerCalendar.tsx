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
    IonFooter,
} from "@ionic/react";
import { add, arrowForwardOutline, nutrition, star, home, personCircle, search, ellipsisHorizontal, ellipsisVertical, analytics, fastFood, chatbubbleEllipses, list, arrowForwardCircle, walk, warning, wine, wifi, pin, restaurant, arrowForward, todayOutline } from 'ionicons/icons';
import React, { useState, Component } from "react";
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
import { render } from "react-dom"; 
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const HabitTrackerCalendar: React.FC<RouteComponentProps> = (props) => {

    const [text, setText] = useState<string>('');
    const [selectedDate, setSelectedDate] = useState<string>('');
    const [breakfast, setBreakfast] = useState<string>('');
    const [lunch, setLunch] = useState<string>('');
    const [dinner, setDinner] = useState<string>('');
    const [snacks, setSnacks] = useState<string>('');


    const ReactCalendar = () => {
        const [date, setDate] = useState(new Date());

        const onChange = (date: any) => {
            setDate(date);
        };

        return (
            <div>
                <Calendar showWeekNumbers onChange={onChange} value={date} /> <br />
            </div>
        );
    };
    

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/mealplanner" />
                        </IonButtons>
                    <IonButtons slot="secondary">
                        <IonButton onClick={() => props.history.push('/homepage')} >
                            <IonIcon slot="icon-only" icon={home} />
                        </IonButton>
                        <IonButton>
                            <IonIcon slot="icon-only" icon={personCircle} />
                        </IonButton>
                    </IonButtons>
                    <IonTitle>Meal Plan Calendar</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonButton expand="block" size="large" color="success" className="ion-padding" onClick={() => props.history.push('/mealplanner')}>
                <IonIcon slot="start" icon={todayOutline} />
                    Switch to Daily View
                </IonButton>

            <IonGrid>
                <IonRow>
                    <IonCol>
                        <ReactCalendar />
                        </IonCol>
                </IonRow>
                </IonGrid>



            <IonContent className="ion-text-center">
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
                    <IonRow>
                        <IonCol>
                            <IonButton expand="block" size="small" onClick={() => props.history.push('/shoppinglist')}>
                                <IonIcon slot="start" icon={list} />
                                    Shopping List
                                </IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton expand="block" size="small" onClick={() => props.history.push('/habittracker')}>
                                <IonIcon slot="start" icon={restaurant} />
                                    Habit Tracker
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

export default HabitTrackerCalendar;