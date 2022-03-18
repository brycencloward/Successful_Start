import { IonButton, IonCheckbox, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { arrowForward } from 'ionicons/icons';
import { useState } from 'react';
import MainHeader from '../components/MainHeader';
import './WhichTests.css';

const WhichTests: React.FC = () => {

  const router = useIonRouter(); //needed to route programmatically

  const [AP, APexam] = useState(false);
  const [CLEP, CLEPexam] = useState(false);
  const [DSST, DantesDSST] = useState(false);
  const [IB, IBExam] = useState(false);

  const checkboxList = [
    { val: "AP Exam", isChecked: false },
    { val: "CLEP Exam", isChecked: true },
    { val: "Dantes/DSST", isChecked: false },
    { val: "IB Exam(s)", isChecked: false }
  ];

  const checkBoxChange = (event: any) => {
    if(event.target.value == "AP Exam"){
      APexam(event.target.checked);
    }
    else if(event.target.value == "CLEP Exam"){
      CLEPexam(event.target.checked);
    }
    else if(event.target.value == "Dantes/DSST"){
      DantesDSST(event.target.checked);
    }
    else if(event.target.value == "IB Exam(s)"){
      IBExam(event.target.checked);
    }
  }
  const experienceCheck = (event: any) => {
    //console.log("This is working!");
    //console.log(noExp, workExp, testsPassed);
    if(AP){
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
  };

  return (
    <IonPage>
  <MainHeader/>
      <IonHeader class= "ion-text-center">
        <IonToolbar>
          <IonLabel className= "ion-text-wrap"> Please select the type of test(s) you have completed and passed</IonLabel>
          {checkboxList.map(({ val, isChecked }, i) => (
          <IonItem class="ion-text-center" lines="none" key={i}>
            <IonLabel>{val}</IonLabel>
            <IonCheckbox slot="end" value={val} color="tertiary" onIonChange={(e) => checkBoxChange(e)}/>
          </IonItem>
        ))}
        </IonToolbar>
        <IonButton color="tertiary" expand="block" onClick={(e) => experienceCheck(e)}>
          <IonLabel>Next</IonLabel>
          <IonIcon icon={arrowForward} />
        </IonButton>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default WhichTests;
