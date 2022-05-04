import { IonButton, IonCheckbox, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonSelectOption, IonTitle, IonToolbar, IonSelect, useIonRouter } from '@ionic/react';
import { arrowForward } from 'ionicons/icons';
import { useState } from 'react';
import MainHeader from '../components/MainHeader';

//custom popover interface options
const options = {
  cssClass: 'custom-interface'
};

const WhichIB: React.FC = () => {
  const router = useIonRouter(); //needed to route programmatically

  const [Bio, Biol180] = useState(false);
  const [Bus, Bus101] = useState(false);
  const [Chem, Chem111] = useState(false);
  const [Cs, Cs111] = useState(false);
  const [Econ, Econ201] = useState(false);
  const [Env, Biol100] = useState(false);
  const [Geog, Geog102] = useState(false);
  const [Pols, Pols237] = useState(false);
  const [WHist, Hist101] = useState(false);
  const [USHist, Hist111] = useState(false);
  const [AfHist, Hist333] = useState(false);
  const [EuHist, Hist456] = useState(false);
  const [InfT, Bus355] = useState(false);
  const [Lang, Engl175] = useState(false);
  const [Lang2, Engl101] = useState(false);
  const [Math1, Math143] = useState(false);
  const [Math2, Math147] = useState(false);
  const [Math3, Math170] = useState(false);
  const [MathStud, Math137] = useState(false);
  const [Mus, Mus110] = useState(false);
  const [Philo, Phil101] = useState(false);
  const [Phys, Phys111] = useState(false);
  const [Psyc, Psyc101] = useState(false);
  const [Anth, Anth102] = useState(false);
  const [Thea, Thea101] = useState(false);
  const [Art, Art291] = useState(false);

  const checkboxList = [
    { val: "Biology" },
    { val: "Business Management" },
    { val: "Chemistry" },
    { val: "Computer Science" },
    { val: "Economics" },
    { val: "Environmental Systems & Societies" },
    { val: "Geography" },
    { val: "Global Politics" },
    { val: "History (Civilization)" },
    { val: "History (US)" },
    { val: "History (Africa)" },
    { val: "History (Europe)" },
    { val: "Information Technology" },
    { val: "Language A: Literature" },
    { val: "Language A: Language & Literature" },
    { val: "Mathematics I" },
    { val: "Mathematics II" },
    { val: "Mathematics III" },
    { val: "Mathematical Studies" },
    { val: "Music" },
    { val: "Philosophy" },
    { val: "Physics" },
    { val: "Psychology" },
    { val: "Social & Cultural Anthropology" },
    { val: "Theater" },
    { val: "Visual Arts" },
  ];

  const checkBoxChange = (event: any) => {
    if(event.target.value == "Biology"){
      Biol180(event.target.checked);
    }
    else if(event.target.value == "Business Management"){
      Bus101(event.target.checked);
    }
    else if(event.target.value == "Chemistry"){
      Chem111(event.target.checked);
    }
    else if(event.target.value == "Computer Science"){
      Cs111(event.target.checked);
    }
  }
  const experienceCheck = (event: any) => {
    //console.log("This is working!");
    //console.log(noExp, workExp, testsPassed);
    /*if(Biol){
      router.push("WhichAP", "forward", "push");
    }
    else if(CLEP) {
      router.push("WhichCLEP", "forward", "push");
    }
    else if(DSST){
      router.push("WhichDSST", "forward", "push");
    }
    else if(IB){
      router.push("WhichIB", "forward", "push");
    }
    */
  };

  return (
    <IonPage>
    <MainHeader/>
      <IonHeader class= "ion-text-center">
        <IonToolbar>
          <IonLabel className= "ion-text-wrap"> Please select all the subjects in which you have completed IB examinations</IonLabel>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen class= "scroll_content">

          {checkboxList.map(({ val }, i) => (
          <IonItem class="ion-text-left" lines="none" key={i}>
            <IonLabel>{val}</IonLabel>
            <IonCheckbox slot="end" value={val} color="tertiary" onIonChange={(e) => checkBoxChange(e)}/>
          </IonItem>
        ))}
        <IonButton color="tertiary" expand="block" onClick={(e) => experienceCheck(e)}>
          <IonLabel>Next</IonLabel>
          <IonIcon icon={arrowForward} />
        </IonButton>
      
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default WhichIB;
