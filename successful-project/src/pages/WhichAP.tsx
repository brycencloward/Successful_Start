import { IonButton, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonSelectOption, IonToolbar, IonSelect, useIonRouter } from '@ionic/react';
import { arrowForward } from 'ionicons/icons';
import { useContext, useState } from 'react';
import { MyGlobalContext, updateData } from '../App';
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
        var newData = { equiv: parsed[0], credits: Number(parsed[1]), core: core };
        //prevent duplicates
        if(!(currentContext.data.data.includes(newData))) {
          setData(updateData(currentContext, parsed[0], Number(parsed[1]), core));
        }
      });
    });
    console.log(currentContext.data);
    if(currentContext.data.pages.includes("WhichCLEP")){
      router.push("WhichCLEP", "forward", "push");
    }
    else if(currentContext.data.pages.includes("WhichDSST")){
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
          <IonLabel className="ion-text-wrap">Please select all the subjects in which you have passed AP examinations</IonLabel>
        </IonToolbar>
      </IonHeader>
          <IonContent fullscreen class="scroll_content">

          <IonItem class="ion-text-left" lines="none">
            <IonLabel>Arts (Humanities)</IonLabel>
            <IonSelect interface="popover" interfaceOptions={options} multiple={true} onIonChange={e => setArts(e.detail.value)}>
              <IonSelectOption value="ART-100, 3, Yes">Art History</IonSelectOption>
              <IonSelectOption value="ART-111, 3, No">Studio Art-Drawing</IonSelectOption>
              <IonSelectOption value="MUS-142, 3, No">Music Theory</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem class="ion-text-left" lines="none">
            <IonLabel>English (Humanities)</IonLabel>
            <IonSelect interface="popover" interfaceOptions={options} multiple={true} onIonChange={e => setEnglish(e.detail.value)}>
              <IonSelectOption value="ENGL-101, 3, Yes">English Lang/Comp</IonSelectOption>
              <IonSelectOption value="ENGL-102, 3, Yes">English Lang/Comp 2</IonSelectOption>
              <IonSelectOption value="ENGL-175, 3, Yes">English Lit/Comp</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem class="ion-text-left" lines="none">
            <IonLabel>History and Social Sciences</IonLabel>
            <IonSelect interface="popover" interfaceOptions={options} multiple={true} onIonChange={e => setHistorySocial(e.detail.value)}>
              <IonSelectOption value="POLS-285, 3, Yes">Comparative Gov't/Politics</IonSelectOption>
              <IonSelectOption value="HIST-Elective, 3, No">European History</IonSelectOption>
              <IonSelectOption value="SS-Elective, 3, No">Human Geography</IonSelectOption>
              <IonSelectOption value="ECON-201, 3, Yes">Macroeconomics I</IonSelectOption>
              <IonSelectOption value="ECON-202, 3, Yes">Microeconomics II</IonSelectOption>
              <IonSelectOption value="PSYC-101, 3, Yes">Psychology</IonSelectOption>
              <IonSelectOption value="POLS-101, 3, Yes">U.S Gov't/Politics</IonSelectOption>
              <IonSelectOption value="HIST-111/HIST-112, 6, Yes">United States History</IonSelectOption>
              <IonSelectOption value="HIST-101/HIST-102, 6, Yes">World History</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem class="ion-text-left" lines="none">
            <IonLabel>Math & Computer Science</IonLabel>
            <IonSelect interface="popover" interfaceOptions={options} multiple={true} onIonChange={e => setMathCompsci(e.detail.value)}>
              <IonSelectOption value="MATH-170, 4, Yes">Calculus AB</IonSelectOption>
              <IonSelectOption value="MATH-170, 4, Yes">Calculus BC</IonSelectOption>
              <IonSelectOption value="CS-111, 4, No">Computer Science A</IonSelectOption>
              <IonSelectOption value="Principles, CS-108, 4, Yes">Computer Science Principles</IonSelectOption>
              <IonSelectOption value="MATH-153, 3, Yes">Statistics</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem class="ion-text-left" lines="none">
            <IonLabel>Sciences</IonLabel>
            <IonSelect interface="popover" interfaceOptions={options} multiple={true} onIonChange={e => setSciences(e.detail.value)}>
              <IonSelectOption value="BIOL-100, 4, Yes">Biology</IonSelectOption>
              <IonSelectOption value="CHEM-111, 4, Yes">Chemistry</IonSelectOption>
              <IonSelectOption value="NS-150, 3, Yes">Environmental Science</IonSelectOption>
              <IonSelectOption value="PHYS-111, 4, Yes">Physics I</IonSelectOption>
              <IonSelectOption value="PHYS-112, 4, No">Physics II</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem class="ion-text-left" lines="none">
            <IonLabel>World Languages & Culture</IonLabel>
            <IonSelect interface="popover" interfaceOptions={options} multiple={true} onIonChange={e => setLanguageCulture(e.detail.value)}>
              <IonSelectOption value="SPAN-101/SPAN-102, 8, Yes">Spanish Language & Culture I</IonSelectOption>
              <IonSelectOption value="SPAN-101/SPAN-102/SPAN-201, 12, Yes">Spanish Language & Culture II</IonSelectOption>
              <IonSelectOption value="SPAN-101/SPAN-102/SPAN-201/SPAN-202, 16, Yes">Spanish Language & Culture III</IonSelectOption>
              <IonSelectOption value="FL1/FL2, 8, Yes">Foreign Language I</IonSelectOption>
              <IonSelectOption value="FL1/FL2/FL3, 12, Yes">Foreign Language II</IonSelectOption>
              <IonSelectOption value="FL1/FL2/FL3/FL4, 16, Yes">Foreign Language III</IonSelectOption>
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
