import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Start';
import WhichCLEP from './pages/WhichCLEP';
import CreditResults from './pages/CreditResults';
import TypeWorkExp from './pages/TypeWorkExp';
import WhichTests from './pages/WhichTests';

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

import { createContext, useContext, useMemo, useState } from 'react';
import { runInNewContext } from 'vm';

setupIonicReact();

export interface ContextInterface {
  pages: string[],
  data: {equiv: string, credits: number, core: boolean}[] 
}

//var testData: DataInterface = {page: "Start", courses: {course: "", equiv: null, credits: null, core: null}};

//set an empty object as default state
export var Context = createContext<ContextInterface | null>(null);
  
//Provider in your app

var start:ContextInterface = {
  pages: [],
  data: []
}

export type GlobalData = {
  data: ContextInterface
  setData:(c: ContextInterface) => void
  //pages: string[]
  //setPages:(c: string[]) => void
}
export const MyGlobalContext = createContext<GlobalData>({
  data: start,
  setData: () => {}
})

//update function
export const updateData = (newContext: GlobalData, newEquiv: string, newCredits: number, newCore: boolean) => {
  var check = {
    equiv: newEquiv,
    credits: newCredits,
    core: newCore
  }

  newContext.data.data.push(check);
  return(newContext.data);
}

export const updatePage = (newContext: GlobalData, newPage: string) => {
  newContext.data.pages.push(newPage);
  return(newContext.data);
}

const App: React.FC = () => {
  //const [data, updateData] = useState({userData: "Test data"});

  const [data, setData] = useState(start);
  const value = useMemo(() => ({ data, setData }), [data]);

  const appContext = useContext(MyGlobalContext);

  return (
    <MyGlobalContext.Provider value={{ data, setData }}>
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>

          <Route exact path="/CreditResults">
            <CreditResults />
          </Route>

          <Route exact path="/TypeWorkExp">
            <TypeWorkExp />
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

        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
    </MyGlobalContext.Provider>
  );
};

export default App;
