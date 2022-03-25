import { IonButton, IonCheckbox, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonSelectOption, IonTitle, IonToolbar, IonSelect, useIonRouter } from '@ionic/react';
import { arrowForward } from 'ionicons/icons';
import { useState } from 'react';
import MainHeader from '../components/MainHeader';
import './WhichIB.css';

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
    { val: "Biology", isChecked: false },
    { val: "Business Management", isChecked: true },
    { val: "Chemistry", isChecked: false },
    { val: "Computer Science", isChecked: false },
    { val: "Economics", isChecked: false },
    { val: "Environmental Systems & Societies", isChecked: false },
    { val: "Geography", isChecked: false },
    { val: "Global Politics", isChecked: false },
    { val: "History (Civilization)", isChecked: false },
    { val: "History (US)", isChecked: false },
    { val: "History (Africa)", isChecked: false },
    { val: "History (Europe)", isChecked: false },
    { val: "Information Technology", isChecked: false },
    { val: "Language A: Literature", isChecked: false },
    { val: "Language A: Language & Literature", isChecked: false },
    { val: "Mathematics I", isChecked: false },
    { val: "Mathematics II", isChecked: false },
    { val: "Mathematics III", isChecked: false },
    { val: "Mathematical Studies", isChecked: false },
    { val: "Music", isChecked: false },
    { val: "Philosophy", isChecked: false },
    { val: "Physics", isChecked: false },
    { val: "Psychology", isChecked: false },
    { val: "Social & Cultural Anthropology", isChecked: false },
    { val: "Theater", isChecked: false },
    { val: "Visual Arts", isChecked: false },
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

          {checkboxList.map(({ val, isChecked }, i) => (
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
