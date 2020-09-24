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

const HomePage: React.FC<RouteComponentProps> = (props) => {

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
                    <IonTitle>HEH App</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-text-center">
                <h1>Hello! <br />
                    Let's get started!</h1>

                <IonButton expand="block" size="large" color="success" className="ion-padding" onClick={() => props.history.push('/moduleshome')}>
                    <IonIcon slot="start" icon={arrowForwardCircle} />
                    Explore Modules
          </IonButton>
                <IonGrid>
                    <IonRow className="ion-align-items-center">
                        <IonCol>
                            <IonButton expand="block" size="large" onClick={() => props.history.push('/habittracker')}>
                                <IonIcon slot="start" icon={analytics} />
                                    Habit Tracker
                                </IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton expand="full" size="large" onClick={() => props.history.push('/mealplanner')}>
                                <IonIcon slot="start" icon={restaurant} />
                                    Meal Planner
                                </IonButton>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonButton expand="full" size="large" onClick={() => props.history.push('/shoppinglist')}>
                                <IonIcon slot="start" icon={list} />
                                    Shopping List
                                </IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton expand="full" size="large" onClick={() => props.history.push('/recipeshome')}>
                                <IonIcon slot="start" icon={search} />
                                    Browse Recipes
                                </IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
                <br />
                <h1> Today's Meals:</h1>

                <IonCard>
                    <IonItem>
                        <IonIcon icon={restaurant} slot="start" />
                        <IonLabel>Breakfast</IonLabel>
                        <IonButton fill="outline" slot="end" onClick={() => props.history.push('/breakfast')}>Browse</IonButton>
                    </IonItem>

                    <IonCardContent>
                        Enter your breakfast for today or browse recipes
                        <IonItem>
                            <IonIcon slot="start" icon={arrowForward} />
                            <IonInput value={breakfast} placeholder="What's for breakfast today?" onIonChange={e => setBreakfast(e.detail.value!)}></IonInput>
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
                        Enter your lunch for today or browse recipes
                        <IonItem>
                            <IonIcon slot="start" icon={arrowForward} />
                            <IonInput value={lunch} placeholder="What's for lunch today?" onIonChange={e => setLunch(e.detail.value!)}></IonInput>
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
                        Enter your dinner for tonight or browse recipes
                        <IonItem>
                            <IonIcon slot="start" icon={arrowForward} />
                            <IonInput value={dinner} placeholder="What's for dinner tonight?" onIonChange={e => setDinner(e.detail.value!)}></IonInput>
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
                        Enter your snacks for today or browse recipes
                        <IonItem>
                            <IonIcon slot="start" icon={arrowForward} />
                            <IonInput value={snacks} placeholder="What's are today's snacks?" onIonChange={e => setSnacks(e.detail.value!)}></IonInput>
                        </IonItem>
                    </IonCardContent>
                </IonCard>

            </IonContent >
        </IonPage >
    );
};

export default HomePage;