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


const SmartCarbs: React.FC<RouteComponentProps> = (props) => {
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
                    <IonTitle>Explore Smart Carbs</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-text-center">
                <h1>
                    Smart Carbs <br /><br /></h1>
                <IonSlides pager={true} options={slideOpts}>
                    <IonSlide>
                        <img src="https://3221xl3vpab03jf3z32nv5wy-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/HUB_website-tiles2.jpg" />
                    </IonSlide>
                </IonSlides>

                <IonModal isOpen={showLearn}>
                    <IonCard>
                        <IonCardHeader>
                            <IonCardTitle className="ion-text-center">Learn</IonCardTitle>
                        </IonCardHeader>
                        <IonCardContent>
                            <h1>Carbohydrates are the most misunderstood nutrients and this confusion results in lots of stress when it comes to weight management and creating long term healthy eating patterns. <br />
                            We don't take a low carb or a high carb approach. We take a "what's right for you" carb approach!
                            <br /><br />
                             Learn the key fundamentals of carbohydrates and more specifically learn WHAT and HOW much carbohydrate YOU need to eat to achieve your goal.
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
                            <h1>The best way to choose QUALITY. The foods below are carbohydrate-rich foods, that are minimally processed and contain
                            an adequate amount of firbe. Choose foods from:</h1>
                            <br /><br />
                            <IonGrid>
                                <IonRow>
                                    <IonCol>
                                        <b>Legumes and beans</b><br />
                                        <ul>
                                            <li>Mixed beans</li>
                                            <li>Baked beans</li>
                                            <li>Cannellini beans</li>
                                            <li>Black beans</li>
                                            <li>Chickpeas</li>
                                            <li>Lentils</li>
                                        </ul>
                                    </IonCol>
                                    <IonCol>
                                        <b>Whole Grains</b><br />
                                        <ul>
                                            <li>Pearled barley</li>
                                            <li>Buckwheat</li>
                                            <li>Bulgar</li>
                                            <li>Quinoa</li>
                                            <li>Millet</li>
                                            <li>Rye</li>
                                        </ul>
                                    </IonCol>
                                    <IonCol>
                                        <b>Bread</b><br />
                                        <ul>
                                            <li>Whole meal bread</li>
                                            <li>Whole meal, multigrain bread</li>
                                            <li>Soy and linseed bread</li>
                                            <li>Whole grain or whole meaal wrap</li>
                                            <li>Rye bread</li>
                                            <li>Whole meal muffin</li>
                                        </ul>
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                            
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

export default SmartCarbs;