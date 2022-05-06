import { IonButton, IonCheckbox, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonSelectOption, IonToolbar, IonSelect, useIonRouter } from '@ionic/react';
import { arrowForward } from 'ionicons/icons';
import { useContext, useState } from 'react';
import { MyGlobalContext, updateData } from '../App';
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
        var newData = { equiv: parsed[0], credits: Number(parsed[1]), core: core };
        //prevent duplicates
        if(!(currentContext.data.data.includes(newData))) {
          setData(updateData(currentContext, parsed[0], Number(parsed[1]), core));
        }
      });
    });
    console.log(currentContext.data);
    if(currentContext.data.pages.includes("WhichDSST")){
      router.push("WhichDSST", "forward", "push");
    }
    else if(currentContext.data.pages.includes("WhichIB")){
      router.push("WhichIB", "forward", "push");
    }
    else{
      if(currentContext.data.pages.includes("TypeWorkExp")){
        router.push("TypeWorkExp", "forward", "push");
      }
      else{
        router.push("CreditResults", "forward", "push");
      }
    }
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
              <IonSelectOption value="AC Elective, 3, No">Financial Accounting</IonSelectOption>
              <IonSelectOption value="BUS-221, 3, No">Information Systems</IonSelectOption>
              <IonSelectOption value="BUS-365, 3, No">Introductory Business Law</IonSelectOption>
              <IonSelectOption value="BUS-311, 3, No">Principles of Management</IonSelectOption>
              <IonSelectOption value="BUS-321, 3, No">Principles of Marketing</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem class="ion-text-left" lines="none">
            <IonLabel>Composition & Literature</IonLabel>
            <IonSelect interface="popover" interfaceOptions={options} multiple={true} onIonChange={e => setLiterature(e.detail.value)}>
              <IonSelectOption value="Core Literature, 3, Yes">American Literature</IonSelectOption>
              <IonSelectOption value="ENGL-175, 3, Yes">Analyzing and Interpreting Literature</IonSelectOption>
              <IonSelectOption value="ENGL-101, 3, Yes">College Composition</IonSelectOption>
              <IonSelectOption value="Core Literature, 3, Yes">English Literature</IonSelectOption>
              <IonSelectOption value="ENGL-101, 3, Yes">Freshman College Composition</IonSelectOption>
              <IonSelectOption value="Core Humanities, 3, Yes">Humanities General Exam</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem class="ion-text-left" lines="none">
            <IonLabel>World Languages</IonLabel>
            <IonSelect interface="popover" interfaceOptions={options} multiple={true} onIonChange={e => setWorldLanguages(e.detail.value)}>
              <IonSelectOption value="SPAN-101/SPAN-102, 8, Yes">Spanish Language - Level I</IonSelectOption>
              <IonSelectOption value="SPAN-101/SPAN-102/SPAN-201, 12, Yes">Spanish Language - Level II</IonSelectOption>
              <IonSelectOption value="SPAN-101/SPAN-102, 8, Yes">Spanish with Writing - Level I</IonSelectOption>
              <IonSelectOption value="SPAN-101/SPAN-102/SPAN-201/SPAN-202, 16, Yes">Spanish with Writing - Level II</IonSelectOption>
              <IonSelectOption value="FREN-102/FREN-102, 8, Yes">French Language - Level I</IonSelectOption>
              <IonSelectOption value="FREN-102/FREN-102/FREN-201, 12, Yes">French Language - Level II</IonSelectOption>
              <IonSelectOption value="GERM-101/GERM-102, 8, Yes">German Language - Level I</IonSelectOption>
              <IonSelectOption value="GERM-101/GERM-102/GERM-201, 12, Yes">German Language - Level II</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem class="ion-text-left" lines="none">
            <IonLabel>Science & Mathematics</IonLabel>
            <IonSelect interface="popover" interfaceOptions={options} multiple={true} onIonChange={e => setScienceMath(e.detail.value)}>
              <IonSelectOption value="BIOL-100, 4, No">Biology</IonSelectOption>
              <IonSelectOption value="MATH-170, 4, Yes">Calculus</IonSelectOption>
              <IonSelectOption value="CHEM-111/CHEM-112, 8, Yes">Chemistry</IonSelectOption>
              <IonSelectOption value="MATH-143, 3, Yes">College Algebra</IonSelectOption>
              <IonSelectOption value="MATH-123, 3, Yes">College Mathematics</IonSelectOption>
              <IonSelectOption value="NS-150, 3, Yes">Natural Sciences General Exam</IonSelectOption>
              <IonSelectOption value="MATH-147, 5, Yes">Pre Calculus</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem class="ion-text-left" lines="none">
            <IonLabel>History & Social Sciences</IonLabel>
            <IonSelect interface="popover" interfaceOptions={options} multiple={true} onIonChange={e => setHistorySocial(e.detail.value)}>
              <IonSelectOption value="POLS-101, 3, Yes">American Government</IonSelectOption>
              <IonSelectOption value="HIST-111, 3, Yes">History of the United States I: Early Colonization to 1877</IonSelectOption>
              <IonSelectOption value="HIST-112, 3, Yes">History of the United States II: 1865 to the Present</IonSelectOption>
              <IonSelectOption value="PSYC-205, 3, Yes">Human Growth & Development</IonSelectOption>
              <IonSelectOption value="PSYC-321, 3, No">Intro to Educational Psychology</IonSelectOption>
              <IonSelectOption value="PSYC-101, 3, Yes">Intro to Psychology</IonSelectOption>
              <IonSelectOption value="SOC-101, 3, Yes">Intro to Sociology</IonSelectOption>
              <IonSelectOption value="ECON-201, 3, Yes">Macroeconomics</IonSelectOption>
              <IonSelectOption value="ECON-202, 3, Yes">Microeconomics</IonSelectOption>
              <IonSelectOption value="HIST-101, 3, Yes">Western Civilization I: Ancient Near East to 1648</IonSelectOption>
              <IonSelectOption value="HIST-102, 3, Yes">Western Civilivation II: 1648 to the Present</IonSelectOption>
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
