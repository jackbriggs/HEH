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
    IonSlides,
    IonSlide,
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
import src from "*.png";
import { url } from "inspector";


const Snacks: React.FC<RouteComponentProps> = (props) => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/recipeshome" />
                    </IonButtons>
                    <IonButtons slot="secondary">
                        <IonButton onClick={() => props.history.push('/shoppinglist')} >
                            Go to shopping list
                            <IonIcon slot="start" icon={list} />
                        </IonButton>
                        <IonButton onClick={() => props.history.push('/homepage')} >
                            <IonIcon slot="icon-only" icon={home} />
                        </IonButton>
                        <IonButton>
                            <IonIcon slot="icon-only" icon={personCircle} />
                        </IonButton>
                    </IonButtons>
                    <IonTitle>Snacks</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>

                <br />

                <IonCard>
                    <IonItem>
                        <IonLabel>Carrot Sticks and Beetroot Dip</IonLabel>
                    </IonItem>
                    <IonCardContent>
                        <IonThumbnail>
                            <img src="https://3221xl3vpab03jf3z32nv5wy-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/IMG_8383.jpg" />
                        </IonThumbnail><br />
                        <b>Ingredients</b><br />
                        <ul>
                            <li>1 carrot medium size, sliced into sticks</li>
                            <li>1 tbsp dip, beetroot</li>
                        </ul>
                        <b>Instructions</b><br />
                        <ol>
                            <li>Serve carrot sticks with beetroot dip.</li>
                        </ol>

                        <b>Nutrition</b><br />
                        Calories: 78kcal | Carbohydrates: 10g | Protein: 1g | Fat: 2g | Saturated Fat: 1g | Sodium: 121mg | Fiber: 5g | Sugar: 9g | Calcium: 42mg
                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonItem>
                        <IonLabel>Nutella and Banana Crumpets</IonLabel>
                    </IonItem>
                    <IonCardContent>
                        <IonThumbnail slot="start">
                            <img src="https://3221xl3vpab03jf3z32nv5wy-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/IMG_1148-scaled.jpg" />
                        </IonThumbnail><br />
                        <b>Ingredients</b><br />
                        <ul>
                            <li>1 crumpet, wholemeal</li>
                            <li>1 banana</li>
                            <li>1 tbsp Nutella</li>
                        </ul>
                        <b>Instructions</b>
                        <ol>
                            <li>Place the crumpet in the toaster.</li>
                            <li>While the crumpet is toasting, peel and thinly slice the banana.</li>
                            <li>Spread Nutella onto toasted crumpet and top with thin banana slices. Enjoy!</li>
                        </ol>

                        <b>Nutrition</b><br />
                           Calories: 254kcal | Carbohydrates: 44g | Protein: 5g | Fat: 5g | Saturated Fat: 2g | Sodium: 417mg | Fiber: 4g | Sugar: 21g | Calcium: 59mg

                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonItem>
                        <IonLabel>Rice Crackers and Tzatziki Dip</IonLabel>
                    </IonItem>
                    <IonCardContent>
                        <IonThumbnail slot="start">
                            <img src="https://3221xl3vpab03jf3z32nv5wy-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/IMG_1900-scaled.jpg" />
                        </IonThumbnail><br />
                        <b>Ingredients</b><br />
                        <ul>
                            <li>10 crackers, brown rice</li>
                            <li>3 tbsp dip, tzatziki</li>
                        </ul>
                        <b>Instructions</b>
                        <ol>
                            <li>Dip crackers into tzatziki dip and enjoy!</li>
                        </ol>

                        <b>Nutrition</b><br />
                           Calories: 157kcal | Carbohydrates: 22g | Protein: 5g | Fat: 5g | Saturated Fat: 2g | Sodium: 372mg | Fiber: 1g | Sugar: 2g | Calcium: 71mg

                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );


};

export default Snacks;