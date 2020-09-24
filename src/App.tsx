import React, { useRef } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import { add } from 'ionicons/icons';
import GetStarted from './pages/GetStarted';
import Email from './pages/Email';
import Address from './pages/Address';
import DOB from './pages/DOB';
import Custom1 from './pages/Custom1';
import Custom2 from './pages/Custom2';
import Custom3 from './pages/Custom3';
import Custom4 from './pages/Custom4';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import WholeFoods from './pages/WholeFoods';
import HabitTracker from './pages/HabitTracker';
import Breakfast from './pages/Breakfast';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Loading from './pages/Loading';
import Start from './pages/Start';
import MealPlanner from './pages/MealPlanner';
import ShoppingList from './pages/ShoppingList';
import ModulesHome from './pages/ModulesHome';
import RecipesHome from './pages/RecipesHome';
import Lunch from './pages/Lunch';
import Dinner from './pages/Dinner';
import Snacks from './pages/Snacks';
import SmartCarbs from './pages/SmartCarbs';

const App: React.FC = () => {
    const isAuthed = true;
    return (
        <IonApp>
            <IonReactRouter>
                <IonRouterOutlet>
                    <Route path="/home" component={Home} />
                    <Route path="/get-started" component={GetStarted} />
                    <Route path="/email" component={Email} />
                    <Route path="/address" component={Address} />
                    <Route path="/dob" component={DOB} />
                    <Route path="/loading" component={Loading} />
                    <Route path="/custom1" component={Custom1} />
                    <Route path="/custom2" component={Custom2} />
                    <Route path="/custom3" component={Custom3} />
                    <Route path="/custom4" component={Custom4} />
                    <Route path="/start" component={Start} />
                    <Route path="/login" component={Login} />
                    <Route path="/homepage" component={HomePage} />
                    <Route path="/mealplanner" component={MealPlanner} />
                    <Route path="/shoppinglist" component={ShoppingList} />
                    <Route path="/moduleshome" component={ModulesHome} />
                    <Route path="/wholefoods" component={WholeFoods} />
                    <Route path="/habittracker" component={HabitTracker} />
                    <Route path="/recipeshome" component={RecipesHome} />
                    <Route path="/breakfast" component={Breakfast} />
                    <Route path="/lunch" component={Lunch} />
                    <Route path="/dinner" component={Dinner} />
                    <Route path="/snacks" component={Snacks} />
                    <Route path="/smartcarbs" component={SmartCarbs} />
                    <Redirect exact from="/" to="/home" />
                </IonRouterOutlet>
            </IonReactRouter>
        </IonApp>
    );
}
export default App;
