import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Start';
import WhichCLEP from './pages/WhichCLEP';
import CalendarSetup from './pages/CalendarSetup';
import CreditResults from './pages/CreditResults';
import TypeWorkExp from './pages/TypeWorkExp';
import WhichBusinessCLEP from './pages/WhichBusinessCLEP';
import WhichTests from './pages/WhichTests';
import WorkExpCreditResults from './pages/WorkExpCreditResults';
import WorkExpStart from './pages/WorkExpStart';

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
import WhichAP from './pages/WhichAP';
import WhichDSST from './pages/WhichDSST';
import WhichIB from './pages/WhichIB';


setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>

        <Route exact path="/CalendarSetup">
          <CalendarSetup />
        </Route>

        <Route exact path="/CreditResults">
          <CreditResults />
        </Route>

        <Route exact path="/TypeWorkExp">
          <TypeWorkExp />
        </Route>

        <Route exact path="/WhichBusinessCLEP">
          <WhichBusinessCLEP />
        </Route>

        <Route exact path="/WhichCLEP">
          <WhichCLEP />
        </Route>

        <Route exact path="/WhichAP">
          <WhichAP />
        </Route>

        <Route exact path="/WhichDSST">
          <WhichDSST />
        </Route>

        <Route exact path="/WhichIB">
          <WhichIB />
        </Route>

        <Route exact path="/WhichTests">
          <WhichTests />
        </Route>

        <Route exact path="/WorkExpCreditResults">
          <WorkExpCreditResults />
        </Route>
        
        <Route exact path="/WorkExpStart">
          <WorkExpStart />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
