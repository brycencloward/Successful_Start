import { IonButton, IonCheckbox, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { arrowForward } from 'ionicons/icons';
import { useState, useEffect, useContext } from 'react';
import MainHeader from '../components/MainHeader';

//context
import { MyGlobalContext, updatePage } from '../App';

const WhichTests: React.FC = () => {

  //console.log(useContext(MyGlobalContext).data);
  const currentContext = useContext(MyGlobalContext);
  const { data, setData } = useContext(MyGlobalContext);
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

  const testCheck = () => {
    if(AP){
      setData(updatePage(currentContext, "WhichAP"));
    }
    if(CLEP) {
      setData(updatePage(currentContext, "WhichCLEP"));
    }
    if(DSST){
      setData(updatePage(currentContext, "WhichDSST"));
    }
    if(IB){
      setData(updatePage(currentContext, "WhichIB"));
    }
    console.log(currentContext);
    if(currentContext.data.pages.includes("TypeWorkExp")){
      router.push(currentContext.data.pages[2], "forward", "push");
    }
    else{
      router.push(currentContext.data.pages[1], "forward", "push");
    }
  };
  
  return (
    <IonPage>
  <MainHeader/>
      <IonHeader class= "ion-text-center">
        <IonToolbar>
          <IonLabel className= "ion-text-wrap"> Please select the type of test(s) you have completed and passed</IonLabel>
          {checkboxList.map(({ val }, i) => (
          <IonItem class="ion-text-center" lines="none" key={i}>
            <IonLabel>{val}</IonLabel>
            <IonCheckbox slot="end" value={val} color="tertiary" onIonChange={(e) => checkBoxChange(e)}/>
          </IonItem>
        ))}
        </IonToolbar>
        <IonButton color="tertiary" expand="block" onClick={() => testCheck()}>
          <IonLabel>Next</IonLabel>
          <IonIcon icon={arrowForward} />
        </IonButton>
      </IonHeader>
      <IonContent fullscreen>
      </IonContent>
    </IonPage>
  );
};

export default WhichTests;
