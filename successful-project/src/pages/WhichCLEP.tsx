import { IonButton, IonCheckbox, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonSelectOption, IonToolbar, IonSelect, useIonRouter } from '@ionic/react';
import { arrowForward } from 'ionicons/icons';
import { useContext, useState } from 'react';
import { MyGlobalContext, updateContext } from '../App';
import MainHeader from '../components/MainHeader';

//custom popover interface options
const options = {
  cssClass: 'custom-interface'
};

const WhichCLEP: React.FC = () => {

  const [business, setBusiness] = useState<string[]>([]);
  const [literature, setLiterature] = useState<string[]>([]);
  const [worldLanguages, setWorldLanguages] = useState<string[]>([]);
  const [scienceMath, setScienceMath] = useState<string[]>([]);
  const [historySocial, setHistorySocial] = useState<string[]>([]);

  const currentContext = useContext(MyGlobalContext);
  const { data, setData } = useContext(MyGlobalContext);
  const router = useIonRouter(); //needed to route programmatically


  const nextPage = () => {
    //loop for each state
    let states = [business, literature, worldLanguages, scienceMath, historySocial];
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
          <IonLabel className="ion-text-wrap">Please select all the subjects in which you have passed CLEP examinations</IonLabel>
        </IonToolbar>
      </IonHeader>
          <IonContent fullscreen class="scroll_content">
          <IonItem class="ion-text-left" lines="none">
            <IonLabel>Business</IonLabel>
            <IonSelect interface="popover" interfaceOptions={options} multiple={true} onIonChange={e => setBusiness(e.detail.value)}>
              <IonSelectOption value="Financial Accounting, AC Elective, 3, No">Financial Accounting</IonSelectOption>
              <IonSelectOption value="Information Systems, BUS-221, 3, No">Information Systems</IonSelectOption>
              <IonSelectOption value="Introductory Business Law, BUS-365, 3, No">Introductory Business Law</IonSelectOption>
              <IonSelectOption value="Principles of Management, BUS-311, 3, No">Principles of Management</IonSelectOption>
              <IonSelectOption value="Principles of Marketing, BUS-321, 3, No">Principles of Marketing</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem class="ion-text-left" lines="none">
            <IonLabel>Composition & Literature</IonLabel>
            <IonSelect interface="popover" interfaceOptions={options} multiple={true} onIonChange={e => setLiterature(e.detail.value)}>
              <IonSelectOption value="American Literature, Core Literature, 3, Yes">American Literature</IonSelectOption>
              <IonSelectOption value="Analyzing and Interpreting Literature, ENGL-175, 3, Yes">Analyzing and Interpreting Literature</IonSelectOption>
              <IonSelectOption value="College Composition, ENGL-101, 3, Yes">College Composition</IonSelectOption>
              <IonSelectOption value="English Literature, Core Literature, 3, Yes">English Literature</IonSelectOption>
              <IonSelectOption value="Freshman College Composition, ENGL-101, 3, Yes">Freshman College Composition</IonSelectOption>
              <IonSelectOption value="Humanities General Exam, Core Humanities, 3, Yes">Humanities General Exam</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem class="ion-text-left" lines="none">
            <IonLabel>World Languages</IonLabel>
            <IonSelect interface="popover" interfaceOptions={options} multiple={true} onIonChange={e => setWorldLanguages(e.detail.value)}>
              <IonSelectOption value="Spanish Language - Level I, SPAN-101/SPAN-102, 8, Yes">Spanish Language - Level I</IonSelectOption>
              <IonSelectOption value="Spanish Language - Level II, SPAN-101/SPAN-102/SPAN-201, 12, Yes">Spanish Language - Level II</IonSelectOption>
              <IonSelectOption value="Spanish with Writing - Level I, SPAN-101/SPAN-102, 8, Yes">Spanish with Writing - Level I</IonSelectOption>
              <IonSelectOption value="Spanish with Writing - Level II, SPAN-101/SPAN-102/SPAN-201/SPAN-202, 16, Yes">Spanish with Writing - Level II</IonSelectOption>
              <IonSelectOption value="French Language - Level I, FREN-102/FREN-102, 8, Yes">French Language - Level I</IonSelectOption>
              <IonSelectOption value="French Language - Level II, FREN-102/FREN-102/FREN-201, 12, Yes">French Language - Level II</IonSelectOption>
              <IonSelectOption value="German Language - Level I, GERM-101/GERM-102, 8, Yes">German Language - Level I</IonSelectOption>
              <IonSelectOption value="German Language - Level II, GERM-101/GERM-102/GERM-201, 12, Yes">German Language - Level II</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem class="ion-text-left" lines="none">
            <IonLabel>Science & Mathematics</IonLabel>
            <IonSelect interface="popover" interfaceOptions={options} multiple={true} onIonChange={e => setScienceMath(e.detail.value)}>
              <IonSelectOption value="Biology, BIOL-100, 4, No">Biology</IonSelectOption>
              <IonSelectOption value="Calculus, MATH-170, 4, Yes">Calculus</IonSelectOption>
              <IonSelectOption value="Chemistry, CHEM-111/CHEM-112, 8, Yes">Chemistry</IonSelectOption>
              <IonSelectOption value="College Algebra, MATH-143, 3, Yes">College Algebra</IonSelectOption>
              <IonSelectOption value="College Mathematics, MATH-123, 3, Yes">College Mathematics</IonSelectOption>
              <IonSelectOption value="Natural Sciences General Exam, NS-150, 3, Yes">Natural Sciences General Exam</IonSelectOption>
              <IonSelectOption value="Pre Calculus, MATH-147, 5, Yes">Pre Calculus</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem class="ion-text-left" lines="none">
            <IonLabel>History & Social Sciences</IonLabel>
            <IonSelect interface="popover" interfaceOptions={options} multiple={true} onIonChange={e => setHistorySocial(e.detail.value)}>
              <IonSelectOption value="American Government, POLS-101, 3, Yes">American Government</IonSelectOption>
              <IonSelectOption value="History of the United States I: Early Colonization to 1877, HIST-111, 3, Yes">History of the United States I: Early Colonization to 1877</IonSelectOption>
              <IonSelectOption value="History of the United States II: 1865 to the Present, HIST-112, 3, Yes">History of the United States II: 1865 to the Present</IonSelectOption>
              <IonSelectOption value="Human Growth & Development, PSYC-205, 3, Yes">Human Growth & Development</IonSelectOption>
              <IonSelectOption value="Intro to Educational Psychology, PSYC-321, 3, No">Intro to Educational Psychology</IonSelectOption>
              <IonSelectOption value="Intro to Psychology, PSYC-101, 3, Yes">Intro to Psychology</IonSelectOption>
              <IonSelectOption value="Intro to Sociology, SOC-101, 3, Yes">Intro to Sociology</IonSelectOption>
              <IonSelectOption value="Macroeconomics, ECON-201, 3, Yes">Macroeconomics</IonSelectOption>
              <IonSelectOption value="Microeconomics, ECON-202, 3, Yes">Microeconomics</IonSelectOption>
              <IonSelectOption value="Western Civilization I: Ancient Near East to 1648, HIST-101, 3, Yes">Western Civilization I: Ancient Near East to 1648</IonSelectOption>
              <IonSelectOption value="Western Civilivation II: 1648 to the Present, HIST-102, 3, Yes">Western Civilivation II: 1648 to the Present</IonSelectOption>
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

export default WhichCLEP;
