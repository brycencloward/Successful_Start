import React, { useState } from 'react';
import './Start.css';
import{arrowForward} from "ionicons/icons";
import { IonContent, IonPage, IonTitle , IonCheckbox, IonList, IonItem, IonLabel, IonIcon, IonButton, CheckboxChangeEventDetail, IonHeader, IonToolbar } from '@ionic/react';
import MainHeader from '../components/MainHeader';
import { Browser } from '@capacitor/browser';
import WorkExpCreditResults from './WorkExpCreditResults';
import { useIonRouter } from '@ionic/react';
  

const openCapacitorSite = async () => {
  await Browser.open({ url: 'https://www.lcsc.edu/admissions/apply' });
};

const Home: React.FC = () => {

  const router = useIonRouter(); //needed to route programmatically

  const [noExp, hasNoExp] = useState(false);
  const [workExp, hasWorkExp] = useState(false);
  const [testsPassed, hasTestsPassed] = useState(false);

  const checkboxList = [
    { val: "NoExp", text: 'I have no substantial work experience/ I am just graduating high school.'},
    { val: "WorkExp", text: 'I have multiple years of experience in a skilled work environment.'},
    { val: "TestsPassed", text: 'I have passed college credit tests (like CLEP) that will count towards my degree.'}
  ];

  const checkBoxChange = (event: any) => {
    if(event.target.value == "NoExp"){
      hasNoExp(event.target.checked);
    }
    else if(event.target.value == "WorkExp"){
      hasWorkExp(event.target.checked);
    }
    else if(event.target.value == "TestsPassed"){
      hasTestsPassed(event.target.checked);
    }
  }
  
  const experienceCheck = (event: any) => {
    //console.log("This is working!");
    //console.log(noExp, workExp, testsPassed);
    if(workExp && testsPassed){
      router.push("WhichTests", "forward", "push");
    }
    else if(workExp) {
      router.push("TypeWorkExp", "forward", "push");
    }
    else if(testsPassed){
      router.push("WhichTests", "forward", "push");
    }
    else{
      console.log("Opening external site");
      openCapacitorSite();
    }
  };

  return (
    
    <IonPage>
 <MainHeader/>
    <IonHeader class="ion-text-center">
      <IonToolbar>
        <IonLabel className="ion-text-wrap">What areas do you have experience that might be applied for college credit?</IonLabel>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen class="scroll_content">
        {checkboxList.map(({ val, text }, i) => (
          <IonItem class="ion-text-left" lines="none" key={i}>
            <IonLabel className= "ion-text-wrap">{text}</IonLabel>
            <IonCheckbox slot="end" value={val} color="tertiary" onIonChange={(e) => checkBoxChange(e)}/>
          </IonItem>
        ))}
      
          <IonButton color="tertiary" expand="block" onClick={(e) => experienceCheck(e)}>
            
          <IonLabel>Next</IonLabel>
          <IonIcon icon={arrowForward} />
       </IonButton>
    </IonContent>
  </IonPage>
  );
};

export default Home;

