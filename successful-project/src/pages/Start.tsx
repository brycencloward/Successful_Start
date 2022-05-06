import React, { useContext, useState } from 'react';
import{arrowForward} from "ionicons/icons";
import { IonContent, IonPage, IonCheckbox, IonItem, IonLabel, IonIcon, IonButton, IonHeader, IonToolbar } from '@ionic/react';
import MainHeader from '../components/MainHeader';
import { Browser } from '@capacitor/browser';
import { useIonRouter } from '@ionic/react';
import { MyGlobalContext, updatePage } from '../App'; //context

//const { data, setData } = useContext(MyGlobalContext);

const openCapacitorSite = async () => {
  await Browser.open({ url: 'https://www.lcsc.edu/admissions/apply' });
};

const Home: React.FC = () => {

  //console.log(useContext(MyGlobalContext).data);
  const currentContext = useContext(MyGlobalContext);
  const { data, setData } = useContext(MyGlobalContext);
  //console.log(useContext(MyGlobalContext).data);

  const router = useIonRouter(); //needed to route programmatically

  const [noExp, hasNoExp] = useState(false);
  const [workExp, hasWorkExp] = useState(false);
  const [testsPassed, hasTestsPassed] = useState(false);

  const checkboxList = [
    { val: "NoExp", text: 'I have no substantial work experience/ I am just graduating high school.'},
    { val: "WorkExp", text: 'I have multiple years of experience in a skilled work environment.'},
    { val: "TestsPassed", text: 'I have passed college credit tests (like CLEP, AP) that will count towards my degree.'}
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
  };
  
  const experienceCheck = () => {
    //console.log(noExp, workExp, testsPassed);
    if(workExp && testsPassed){
      setData(updatePage(currentContext, "TypeWorkExp"));
      setData(updatePage(currentContext, "WhichTests"));
      router.push("WhichTests", "forward", "push");
    }
    else if(workExp){
      setData(updatePage(currentContext, "TypeWorkExp"));
      router.push("TypeWorkExp", "forward", "push");
    }
    else if(testsPassed){
      setData(updatePage(currentContext, "WhichTests"));
      router.push("WhichTests", "forward", "push");
    }
    else if(noExp){
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
      
          <IonButton color="tertiary" expand="block" onClick={() => experienceCheck()}>
            
          <IonLabel>Next</IonLabel>
          <IonIcon icon={arrowForward} />
       </IonButton>
    </IonContent>
  </IonPage>
  );
};

export default Home;

