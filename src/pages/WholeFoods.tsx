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
    IonModal,
    IonThumbnail,
    IonImg,
    IonSlides,
    IonSlide,
} from "@ionic/react";
import { add, arrowForwardOutline, nutrition, star, home, personCircle, search, ellipsisHorizontal, ellipsisVertical, analytics, fastFood, chatbubbleEllipses, list, arrowForwardCircle, walk, warning, wine, wifi, pin, restaurant, arrowForward, school, arrowBack } from 'ionicons/icons';
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


const WholeFoods: React.FC<RouteComponentProps> = (props) => {
    const [showLearn, setShowLearn] = useState(false);
    const [showApply, setShowApply] = useState(false);
    const slideOpts = {
        initialSlide: 1,
        speed: 400
    };


    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="secondary">
                        <IonButton onClick={() => props.history.push('/moduleshome')} >
                            Back to modules
                            <IonIcon slot="start" icon={arrowBack} />
                        </IonButton>
                        <IonButton onClick={() => props.history.push('/homepage')} >
                            <IonIcon slot="icon-only" icon={home} />
                        </IonButton>
                        <IonButton>
                            <IonIcon slot="icon-only" icon={personCircle} />
                        </IonButton>
                    </IonButtons>
                    <IonTitle>Explore Whole Foods</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-text-center">
                <h1>
                    Whole Foods <br /><br /></h1>
                <IonSlides pager={true} options={slideOpts}>
                    <IonSlide>
                        <img src="https://3221xl3vpab03jf3z32nv5wy-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/HUB_website-tiles6.jpg" />
                    </IonSlide>
                </IonSlides>


                <IonModal isOpen={showLearn}>
                    <IonCard>
                        <IonCardHeader>
                            <IonCardTitle className="ion-text-center">Learn</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            <h1>The Whole Foods Module is all about developing healthy eating habits so you can maximise your diet quality.
                            <br /><br />
                            Feel great as you start to nourish your body from the inside out by adding whole foods in, rather than being restrictive!
                            <br /><br />
                            When you build your diet out of whole foods first, you will automatically do a number of things...
                            <br />
                                <ol>
                                    <li>Increase your intake of nutrients, vitamins and minerals</li>
                                    <li>Decrease your energy intake, making weight management much easier</li>
                                    <li>Feel full and satisfied on less energy</li>
                                    <li>Eat a larger volume of food without consuming too much energy</li>
                                </ol>
                            </h1>
                        </IonCardContent>
                    </IonCard>
                    <IonButton onClick={() => setShowLearn(false)}>Close</IonButton>
                </IonModal>
                <IonButton expand="block" onClick={() => setShowLearn(true)}>Learn</IonButton>

                <IonModal isOpen={showApply}>
                    <IonCard>
                        <IonCardHeader>
                            <IonCardTitle className="ion-text-center">Apply</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            <h1>Breakfast is a great opportunity for nourishment. Here are some key ways you can increase your whole foods consumption at breakfast:
                        <br /><br />
                                <ul>
                                    <li>Swaps</li>
                                    <li>Additions</li>
                                    <li>Recipes</li>
                                    <li>Meal Plans</li>
                                </ul>
                                <br /><br />
                            </h1>
                        </IonCardContent>
                    </IonCard>
                    <IonButton onClick={() => setShowApply(false)}>Close</IonButton>
                </IonModal>
                <IonButton expand="block" onClick={() => setShowApply(true)}>Apply</IonButton>


                <IonButton expand="block" onClick={() => props.history.push('/habittracker')}>Practice </IonButton>
                <IonButton expand="block" onClick={() => props.history.push('/recipeshome')}>Recipes </IonButton>
            </IonContent>
        </IonPage >
    );
};

export default WholeFoods;