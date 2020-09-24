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


const Dinner: React.FC<RouteComponentProps> = (props) => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="secondary">
                        <IonBackButton defaultHref="/home" />
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
                    <IonTitle>Dinner Recipes</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>

                <br />

                <IonCard>
                    <IonItem>
                        <IonLabel>Honey Mustard Chicken</IonLabel>
                    </IonItem>
                    <IonCardContent>
                        <IonThumbnail>
                            <img src="https://3221xl3vpab03jf3z32nv5wy-wpengine.netdna-ssl.com/wp-content/uploads/2020/06/IMG_4707.jpg" />
                        </IonThumbnail><br />
                        <b>Ingredients</b><br />
                        <ul>
                            <li>250 g potato, sweet peeled and cut into chunks</li>
                            <li>2 potato, small peeled and cut into chunks</li>
                            <li>2 carrot peeled and chopped</li>
                            <li>600 g chicken, breast or thigh</li>
                            <li>third cup honey</li>
                            <li> third cup rice wine vinegar</li>
                            <li>2 tbsp soy sauce</li>
                            <li>2 tbsp mustard, wholegrain</li>
                            <li>2 tbsp milk, any</li>
                            <li>half tsp thyme, dried</li>
                            <li>salt and pepper</li>
                            <li>2 cups beans, green or other green vegetables</li>
                        </ul>
                        <b>Instructions</b><br />
                        <ol>
                            <li>To make the marinade mix honey, vinegar, soy sauce and mustard together.</li>
                            <li>Cut chicken into tenderloins.</li>
                            <li>Pour over chicken and marinate for 3 hours or overnight, or not at all if you're making it at 5:30pm.</li>
                            <li>Roast for 10-15 mins or until cooked through, careful not to let the chicken overcook as it will dry out. Let the cooked chicken rest covered for at least 5 minutes.</li>
                            <li>Meanwhile boil potato, sweet potato and carrot for 20 minutes.</li>
                            <li>Mash vegetables with milk, salt, pepper and thyme.</li>
                            <li>Serve chicken over mashed potato with side of steamed greens.</li>
                        </ol>

                        <b>Nutrition</b><br />
                        Calories: 520kcal | Carbohydrates: 61g | Protein: 24g | Fat: 15g | Saturated Fat: 4g | Sodium: 883mg | Fiber: 18g | Sugar: 4g | Calcium: 212mg
                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonItem>
                        <IonLabel>Vegetarian Quesadillas</IonLabel>
                    </IonItem>
                    <IonCardContent>
                        <IonThumbnail slot="start">
                            <img src="https://3221xl3vpab03jf3z32nv5wy-wpengine.netdna-ssl.com/wp-content/uploads/2020/05/vegetarian-quesadillas.jpg" />
                        </IonThumbnail><br />
                        <b>Ingredients</b><br />
                        <ul>
                            <li>1 corn, cob canned corn kernels also work</li>
                            <li>1 zucchini medium, diced</li>
                            <li>1 capsicum, red diced</li>
                            <li>2 mushroom, portobello large, diced</li>
                            <li>4 tomato, common diced</li>
                            <li>420 g beans, black, canned drained and rinsed</li>
                            <li>250 g rice, brown, instant Mexican style</li>
                            <li>3 tbsp chipotle Mexican style</li>
                            <li>1 cup parsley, flat leaf, fresh finely chopped</li>
                            <li>6 wrap, wholemeal mountain bread brand</li>
                            <li>1 cup cheese, tasty, low fat grated</li>
                            <li>three quarters cup yoghurt, greek</li>
                            <li>1 lime juiced</li>
                        </ul>
                        <b>Instructions</b>
                        <ol>
                            <li>Pre-heat oven to 200 degrees celsius. Line two trays with baking paper.</li>
                            <li>Chop and prepare all the ingredients before starting.</li>
                            <li>Lightly spray corn, zucchini and mushrooms with oil and season with salt and pepper.</li>
                            <li>Preheat a BBQ or grill pan on high heat. Cook corn, zucchini, capsicum and mushrooms turning often until tender.</li>
                            <li>Cool corn, cut off kernels and place in a bowl with cooked zucchini, capsicum and mushrooms.</li>
                            <li>Add the tomato, beans, rice, chipotle sauce and three-quarters of the parsley. Stir to combine.</li>
                            <li>Lay wraps, one at a time, on oven trays.</li>
                            <li>Spread 1 cup of vegetable mixture over one half of each wrap. Top with cheese and fold over. Repeat to make 6 quesadillas in total.</li>
                            <li>Grill in oven until slightly brown on top.</li>
                        </ol>

                        <b>Nutrition</b><br />
                           Calories: 532kcal | Carbohydrates: 70.5g | Protein: 24.2g | Fat: 13.5g | Saturated Fat: 5.1g | Sodium: 1006mg | Fiber: 12g | Sugar: 18.5g | Calcium: 495mg

                    </IonCardContent>
                </IonCard>

                <IonCard>
                    <IonItem>
                        <IonLabel>Tuna, Rice and Vegetables</IonLabel>
                    </IonItem>
                    <IonCardContent>
                        <IonThumbnail slot="start">
                            <img src="https://3221xl3vpab03jf3z32nv5wy-wpengine.netdna-ssl.com/wp-content/uploads/2020/05/IMG_3965.jpg" />
                        </IonThumbnail><br />
                        <b>Ingredients</b><br />
                        <ul>
                            <li>195 g tuna, canned, in spring water drained, choose flavoured if you like</li>
                            <li>1 cup rice, brown, instant</li>
                            <li>1 bag steam fresh vegetables</li>
                        </ul>
                        <b>Instructions</b>
                        <ol>
                            <li>Cook the bag of steam fresh vegetables and instant rice in the microwave as per packet instructions.</li>
                            <li>Combine drained tuna, cooked rice and vegetables for a quick lunch. Add your favourite sauce or flavours.</li>
                        </ol>

                        <b>Nutrition</b><br />
                           Serving: 1g | Calories: 462kcal | Carbohydrates: 47g | Protein: 48g | Fat: 7g | Saturated Fat: 2g | Sodium: 772mg | Fiber: 6g | Sugar: 5g | Calcium: 65mg

                    </IonCardContent>
                </IonCard>
            </IonContent>
        </IonPage>
    );


};

export default Dinner;