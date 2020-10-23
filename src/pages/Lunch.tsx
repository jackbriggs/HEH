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


const Lunch: React.FC<RouteComponentProps> = (props) => {
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
                    <IonTitle>Lunch Recipes</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>

                <br />

                <IonCard>
                    <IonItem>
                        <IonLabel>Chickpea and Couscous Salad</IonLabel>
                    </IonItem>
                    <IonCardContent>
                        <IonThumbnail>
                            <img src="https://3221xl3vpab03jf3z32nv5wy-wpengine.netdna-ssl.com/wp-content/uploads/2020/06/IMG_4707.jpg" />
                        </IonThumbnail><br />
                        <b>Ingredients</b><br />
                        <ul>
                            <li>170 g chickpeas, canned (1 cup) drained and rinsed</li>
                            <li>50 g couscous, wholemeal, dry</li>
                            <li>quarter avocado cubed</li>
                            <li>half lemon juice + zest</li>
                            <li>half cup tomato, cherry halved</li>
                            <li>quarter tsp stock, powder, vegetable</li>
                            <li>1 cup spinach, baby finely shredded</li>
                            <li>20 g cheese, feta optional</li>
                            <li>half bunch chives finely chopped, or dried</li>
                        </ul>
                        <b>Instructions</b><br />
                        <ol>
                            <li>Combine the couscous, stock powder, chives, lemon juice and zest in a heat proof bowl. Cover with boiling water and stir until stock dissolves. Allow to sit until all the water has been absorbed. Fluff up with a fork.</li>
                            <li>Combine the couscous mixture, chickpeas, avocado, baby spinach, tomatoes and feta in a bowl and toss to combine. Serve immediately. Enjoy!</li>
                        </ol>

                        <b>Nutrition</b><br />
                        Calories: 520kcal | Carbohydrates: 61g | Protein: 24g | Fat: 15g | Saturated Fat: 4g | Sodium: 883mg | Fiber: 18g | Sugar: 4g | Calcium: 212mg
                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonItem>
                        <IonLabel>Tuna and Avacado Sandwich</IonLabel>
                    </IonItem>
                    <IonCardContent>
                        <IonThumbnail slot="start">
                            <img src="https://3221xl3vpab03jf3z32nv5wy-wpengine.netdna-ssl.com/wp-content/uploads/2016/01/IMG_4844.jpg" />
                        </IonThumbnail><br />
                        <b>Ingredients</b><br />
                        <ul>
                            <li>90 g tuna, canned, in spring water drained</li>
                            <li>1 carrot (small)</li>
                            <li>half tbsp mayonnaise, whole egg</li>
                            <li>quarter avocado mashed</li>
                            <li>3-4 leaf lettuce, oak leaf</li>
                            <li>2 slice bread, wholemeal (or sourdough)</li>
                        </ul>
                        <b>Instructions</b>
                        <ol>
                            <li>Combine the tuna, mayonnaise and carrot in a small bowl and mix until well-combined.</li>
                            <li>Spread the mashed avocado onto one slice of bread and top with a thick layer of the tuna mixture.</li>
                            <li>Top with a few oak lettuce leaves and the remaining slice of bread. Serve and enjoy.</li>
                        </ol>

                        <b>Nutrition</b><br />
                           Calories: 491kcal | Carbohydrates: 34g | Protein: 32g | Fat: 24g | Saturated Fat: 4g | Sodium: 767mg | Fiber: 7g | Sugar: 5g

                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonItem>
                        <IonLabel>Vegetable Fritters</IonLabel>
                    </IonItem>
                    <IonCardContent>
                        <IonThumbnail slot="start">
                            <img src="https://3221xl3vpab03jf3z32nv5wy-wpengine.netdna-ssl.com/wp-content/uploads/2020/05/IMG_3530.jpg" />
                        </IonThumbnail><br />
                        <b>Ingredients</b><br />
                        <ul>
                            <li>1 zucchini grated</li>
                            <li>250 g potato, large grated</li>
                            <li>400 g potato, sweet grated</li>
                            <li>1 carrot grated</li>
                            <li>1 onion, any finely diced</li>
                            <li>quarter bunch parsley, flat leaf, fresh finely diced</li>
                            <li>2 egg</li>
                            <li>quarter cup flour, wholemeal, plain</li>
                            <li>1 tsp cumin, spice</li>
                            <li>half tsp salt, table</li>
                            <li>2 tbsp oil, olive</li>
                        </ul>
                        <b>Instructions</b>
                        <ol>
                            <li>Combine the zucchini, potato, sweet potato, carrot, onion, parsley, egg, flour, cumin and salt in a large bowl. Mix well.</li>
                            <li>Heat a non-stick frying pan over high heat. Add 1 tsp of the oil. Measure out ¼ cup sized portions of fritter mixture and and fry for 3-4 minutes or until golden on each side.</li>
                            <li>Repeat with the remaining oil and fritter mixture until all the fritters have been made.</li>
                            <li>Serve with a protein of your choice and a side salad. Enjoy!</li>
                            <li>Reheat any leftovers in a sandwich press. </li>
                        </ol>

                        <b>Nutrition</b><br />
                           Calories: 306kcal | Carbohydrates: 34g | Protein: 10g | Fat: 12g | Saturated Fat: 2g | Sodium: 374mg | Fiber: 8g | Sugar: 13g | Calcium: 102mg

                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );


};

export default Lunch;