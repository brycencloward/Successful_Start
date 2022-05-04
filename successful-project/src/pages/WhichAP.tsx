import { IonButton, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonSelectOption, IonToolbar, IonSelect, useIonRouter } from '@ionic/react';
import { arrowForward } from 'ionicons/icons';
import { useContext, useState } from 'react';
import { MyGlobalContext, updateContext } from '../App';
import MainHeader from '../components/MainHeader';

//custom popover interface options
const options = {
  cssClass: 'custom-interface'
};

const WhichAP: React.FC = () => {

  const [arts, setArts] = useState<string[]>([]);
  const [english, setEnglish] = useState<string[]>([]);
  const [historySocial, setHistorySocial] = useState<string[]>([]);
  const [mathCompsci, setMathCompsci] = useState<string[]>([]);
  const [sciences, setSciences] = useState<string[]>([]);
  const [languageCulture, setLanguageCulture] = useState<string[]>([]);

  const currentContext = useContext(MyGlobalContext);
  const { data, setData } = useContext(MyGlobalContext);
  const router = useIonRouter(); //needed to route programmatically


  const nextPage = () => {
    //loop for each state
    let states = [arts, english, historySocial, mathCompsci, sciences, languageCulture];
    states.forEach(function (all){
      all.forEach(function (value){
        //parse different values
        var parsed = value.split(", ");
        var core:boolean;
        if(parsed[3] == "Yes"){core = true;}
        else{core = false;}
        //console.log(parsed);
        setData(updateContext(currentContext, parsed[0], parsed[1], Number(parsed[2]), core));
      });
    });
    console.log(currentContext.data);
    router.push("CreditResults", "forward", "push");
  };

  return (
    <IonPage>
    <MainHeader/>
      <IonHeader class="ion-text-center">
        <IonToolbar>
          <IonLabel className="ion-text-wrap">Please select all the subjects in which you have passed AP examinations</IonLabel>
        </IonToolbar>
      </IonHeader>
          <IonContent fullscreen class="scroll_content">

          <IonItem class="ion-text-left" lines="none">
            <IonLabel>Arts (Humanities)</IonLabel>
            <IonSelect interface="popover" interfaceOptions={options} multiple={true} onIonChange={e => setArts(e.detail.value)}>
              <IonSelectOption value="Art History, ART-100, 3, Yes">Art History</IonSelectOption>
              <IonSelectOption value="Studio Art-Drawing, ART-111, 3, No">Studio Art-Drawing</IonSelectOption>
              <IonSelectOption value="Music Theory, MUS-142, 3, No">Music Theory</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem class="ion-text-left" lines="none">
            <IonLabel>English (Humanities)</IonLabel>
            <IonSelect interface="popover" interfaceOptions={options} multiple={true} onIonChange={e => setEnglish(e.detail.value)}>
              <IonSelectOption value="English Lang/Comp, ENGL-101, 3, Yes">English Lang/Comp</IonSelectOption>
              <IonSelectOption value="English Lang/Comp 2, ENGL-102, 3, Yes">English Lang/Comp 2</IonSelectOption>
              <IonSelectOption value="English Lit/Comp, ENGL-175, 3, Yes">English Lit/Comp</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem class="ion-text-left" lines="none">
            <IonLabel>History and Social Sciences</IonLabel>
            <IonSelect interface="popover" interfaceOptions={options} multiple={true} onIonChange={e => setHistorySocial(e.detail.value)}>
              <IonSelectOption value="Comparative Gov't/Politics, POLS-285, 3, Yes">Comparative Gov't/Politics</IonSelectOption>
              <IonSelectOption value="European History, HIST-Elective, 3, No">European History</IonSelectOption>
              <IonSelectOption value="Human Geography, SS-Elective, 3, No">Human Geography</IonSelectOption>
              <IonSelectOption value="Macroeconomics, ECON-201, 3, Yes">Macroeconomics I</IonSelectOption>
              <IonSelectOption value="Microeconomics, ECON-202, 3, Yes">Microeconomics II</IonSelectOption>
              <IonSelectOption value="Psychology, PSYC-101, 3, Yes">Psychology</IonSelectOption>
              <IonSelectOption value="U.S. Gov't/Politics, POLS-101, 3, Yes">U.S Gov't/Politics</IonSelectOption>
              <IonSelectOption value="United States History, HIST-111/HIST-112, 6, Yes">United States History</IonSelectOption>
              <IonSelectOption value="World History, HIST-101/HIST-102, 6, Yes">World History</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem class="ion-text-left" lines="none">
            <IonLabel>Math & Computer Science</IonLabel>
            <IonSelect interface="popover" interfaceOptions={options} multiple={true} onIonChange={e => setMathCompsci(e.detail.value)}>
              <IonSelectOption value="Calculus AB, MATH-170, 4, Yes">Calculus AB</IonSelectOption>
              <IonSelectOption value="Calculus BC, MATH-170, 4, Yes">Calculus BC</IonSelectOption>
              <IonSelectOption value="Computer Science A, CS-111, 4, No">Computer Science A</IonSelectOption>
              <IonSelectOption value="Computer Science Principles, CS-108, 4, Yes">Computer Science Principles</IonSelectOption>
              <IonSelectOption value="Statistics, MATH-153, 3, Yes">Statistics</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem class="ion-text-left" lines="none">
            <IonLabel>Sciences</IonLabel>
            <IonSelect interface="popover" interfaceOptions={options} multiple={true} onIonChange={e => setSciences(e.detail.value)}>
              <IonSelectOption value="Biology, BIOL-100, 4, Yes">Biology</IonSelectOption>
              <IonSelectOption value="Chemistry, CHEM-111, 4, Yes">Chemistry</IonSelectOption>
              <IonSelectOption value="Environmental Science, NS-150, 3, Yes">Environmental Science</IonSelectOption>
              <IonSelectOption value="Physics 1, PHYS-111, 4, Yes">Physics I</IonSelectOption>
              <IonSelectOption value="Physics 2, PHYS-112, 4, No">Physics II</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem class="ion-text-left" lines="none">
            <IonLabel>World Languages & Culture</IonLabel>
            <IonSelect interface="popover" interfaceOptions={options} multiple={true} onIonChange={e => setLanguageCulture(e.detail.value)}>
              <IonSelectOption value="Spanish Language & Culture I, SPAN-101/SPAN-102, 8, Yes">Spanish Language & Culture I</IonSelectOption>
              <IonSelectOption value="Spanish Language & Culture II, SPAN-101/SPAN-102/SPAN-201, 12, Yes">Spanish Language & Culture II</IonSelectOption>
              <IonSelectOption value="Spanish Language & Culture III, SPAN-101/SPAN-102/SPAN-201/SPAN-202, 16, Yes">Spanish Language & Culture III</IonSelectOption>
              <IonSelectOption value="Foreign Language I, FL1/FL2, 8, Yes">Foreign Language I</IonSelectOption>
              <IonSelectOption value="Foreign Language II, FL1/FL2/FL3, 12, Yes">Foreign Language II</IonSelectOption>
              <IonSelectOption value=">Foreign Language III, FL1/FL2/FL3/FL4, 16, Yes">Foreign Language III</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonButton color="tertiary" expand="block" onClick={() => nextPage()}>
          <IonLabel>Next</IonLabel>
          <IonIcon icon={arrowForward} />
        </IonButton>

        <IonHeader collapse="condense">
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default WhichAP;
