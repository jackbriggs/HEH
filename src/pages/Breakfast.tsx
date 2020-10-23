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


const Breakfast: React.FC<RouteComponentProps> = (props) => {
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
                    <IonTitle>Breakfast Recipes</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>

                <br />

                <IonCard>
                    <IonItem>
                        <IonLabel>Almond Quinoa Porridge</IonLabel>
                    </IonItem>
                    <IonCardContent>
                        <IonThumbnail>
                            <img src="https://3221xl3vpab03jf3z32nv5wy-wpengine.netdna-ssl.com/wp-content/uploads/2020/06/IMG_4990-scaled.jpg" />
                        </IonThumbnail><br />
                        <b>Ingredients</b><br />
                        <ul>
                            <li>Half cup cup quinoa, white</li>
                            <li>1 cup milk, any</li>
                            <li>1 tsp cinnamon ground</li>
                            <li>200 g yoghurt, natural</li>
                            <li>2 tbsp almonds, raw coarsely chopped</li>
                            <li>2 tsp pomegranate seeds, or berries</li>
                            <li> 2 tsp maple syrup, pure</li>
                        </ul>
                        <b>Instructions</b><br />
                        <ol>
                            <li>Place quinoa in a fine sieve, rinse under cold running water.</li>
                            <li>Place drained quinoa in a medium saucepan with milk, half cup water and the cinnamon.</li>
                            <li>Bring to the boil over medium heat.</li>
                            <li>Reduce heat to low; simmer, stirring occasionally for about 15 minutes or until liquid is absorbed.</li>
                            <li>Spoon porridge into two bowls.</li>
                            <li>Top with yoghurt, almonds and pomegranate seeds.</li>
                            <li>Drizzle with maple syrup.</li>
                        </ol>

                        <b>Nutrition</b><br />
                        Calories: 395kcal | Carbohydrates: 45g | Protein: 16g | Fat: 15g | Saturated Fat: 7g | Sodium: 113mg | Fiber: 6g | Sugar: 19g | Calcium: 318mg

                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonItem>
                        <IonLabel>Raisin Toast</IonLabel>
                    </IonItem>
                    <IonCardContent>
                        <IonThumbnail slot="start">
                            <img src="https://3221xl3vpab03jf3z32nv5wy-wpengine.netdna-ssl.com/wp-content/uploads/2020/05/IMG_3961.jpg" />
                        </IonThumbnail><br />
                        <b>Ingredients</b><br />
                        <ul>
                            <li>2 slices raisin bread, wholemeal toasted</li>
                            <li>110 g cheese, ricotta, low fat (half cup)</li>
                            <li>10 g honey (2 tsp)</li>
                        </ul>
                        <b>Instructions</b>
                        <ol>
                            <li>Toast the raisin bread to your liking.</li>
                            <li>Top each piece of toast with ricotta and drizzle with honey.</li>
                        </ol>

                        <b>Nutrition</b><br />
                                Calories: 290kcal | Carbohydrates: 47.2g | Protein: 13g | Fat: 6g | Saturated Fat: 3g | Sodium: 248mg | Fiber: 2g | Calcium: 284mg

                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonItem>
                        <IonLabel>Berry Smoothie</IonLabel>
                    </IonItem>
                    <IonCardContent>
                        <IonThumbnail slot="start">
                            <img src="https://3221xl3vpab03jf3z32nv5wy-wpengine.netdna-ssl.com/wp-content/uploads/2020/02/IMG_3172.jpg" />
                        </IonThumbnail><br />
                        <b>Ingredients</b><br />
                        <ul>
                            <li>1 cup milk, any</li>
                            <li>100 g berries, frozen (1 cup)</li>
                            <li>50 g yoghurt, natural (half cup)</li>
                            <li>10 g chia seeds (2 tsp)</li>
                            <li>20 g oats, rolled (half cup)</li>
                            <li>14 g honey optional (2 tsp)</li>
                        </ul>
                        <b>Instructions</b>
                        <ol>
                            <li>Place all ingredients into a blender. Blend until smooth. Store in the fridge for up to 24 hours or drink immediately..</li>
                        </ol>

                        <b>Nutrition</b><br />
                           Calories: 409kcal | Carbohydrates: 45g | Protein: 16g | Fat: 16g | Saturated Fat: 8g | Sodium: 128mg | Fiber: 8g | Sugar: 35g | Calcium: 451mg

                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );


};

export default Breakfast;