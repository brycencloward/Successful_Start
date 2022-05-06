import { IonButton, IonContent, IonIcon, IonItem, IonLabel, IonList, IonPage } from '@ionic/react';
import { arrowForward } from 'ionicons/icons';
import MainHeader from '../components/MainHeader';
import { Browser } from '@capacitor/browser';
import { CallNumber } from 'capacitor-call-number';
import { MyGlobalContext } from '../App';
import { useContext } from 'react';
import { genEdA, genEdB, possibleDegrees } from '../PossibleDegrees';

const callNumber= async () => {
  await CallNumber.call({ number: '208-717-5813', bypassAppChooser: false });
};

const openCapacitorSite = async () => {
  await Browser.open({ url: 'https://lcsc.co1.qualtrics.com/jfe/form/SV_1YtbAryCRD9zWu2' });
};

function WorkExp(props: any) {
  if(!props.usedWorkExp){
    return null;
  }

  return (
    <IonItem class="ion-margin">
      <IonLabel className= "ion-text-wrap" class= "ion-text-center"> Each of these items will need to be verified with a portfolio assessment with an advisor, but if they are verified:</IonLabel>
    </IonItem>
  );
}

function DegreeProgress(props: any) {

  return (
      <IonLabel className= "ion-text-wrap" class= "ion-text-center"> You could complete a {props.degreeName} with just {props.creditsLeft} more credits!</IonLabel>
  );
}

const CreditResults: React.FC = () => {

  const currentContext = useContext(MyGlobalContext);
  //console.log(currentContext.data);
  var finalData = currentContext.data;
  console.log(finalData);
  var we = false;
  if(currentContext.data.pages.includes("TypeWorkExp")){
    we = true;
  }

  var genEdATotal = 0;
  var genEdBTotal = 0;

  var degreeNames:string[] = [];
  interface degreeListItem {name: string, creditsLeft: number};
  var degreeList:degreeListItem[] = [];

  //an overly complicated procedure that calculates what classes have transfer equivalency, and where. I will simplify this in the near future
  finalData.data.forEach(function (value1){ //for each class equivalancy
    console.log("Now searching:" + value1.equiv);
    genEdA.forEach(value2 => {
      if(value2.courses.includes(value1.equiv)){
        genEdATotal += value1.credits;
      }
    });
    genEdB.forEach(value2 => {
      if(value2.courses.includes(value1.equiv)){
        genEdBTotal += value1.credits;
      }
    });

    possibleDegrees.forEach(value2 => { //for each possible degree
      var creditTotal = 0;
      if(value2.name.includes("Associate")){
        console.log("Associate");
        creditTotal = genEdATotal;
      } else {
        console.log("Bachelor");
        creditTotal = genEdBTotal;
      }
      value2.requirements.forEach(value3 => { //for each group of values within the degree
        if(value3.courses.includes(value1.equiv)){ //for each course within the group of values
          creditTotal = value1.credits + creditTotal;
        }
      });
      let newDegree = {name: value2.name, creditsLeft: (Number(value2.credits) - creditTotal)};
      if(degreeNames.includes(value2.name)) {
        //find the existing degree and increment it
        degreeList[degreeNames.indexOf(value2.name)].creditsLeft -= value1.credits;
      } else {
        degreeList.push(newDegree);
        degreeNames.push(value2.name);
      }
    });

  });

  console.log(degreeList);
  console.log(degreeNames);
  

  return (
    <IonPage>
    <MainHeader/>
      <IonContent fullscreen class= "ion-text-center scroll_content">
      <IonLabel className= "ion-text-wrap"> Based on your selections, it would appear that you can recieve credit for the following classes:</IonLabel>
      <IonList lines="none">
      {finalData.data.map(({equiv, credits}, i) => (
        <IonItem class="ion-text-center" lines="none" key={i}>
          <IonLabel className= "ion-text-wrap">{equiv} ({credits} Credits)</IonLabel>
        </IonItem>
      ))}
      </IonList>
      <IonList lines='none'>
        
        <WorkExp usedWorkExp={we} ></WorkExp>
        {degreeList.map(({name, creditsLeft}, i) => (
          <IonItem key={i}>
            <DegreeProgress degreeName={name} creditsLeft={creditsLeft}></DegreeProgress>
          </IonItem>
        ))}
      </IonList>
        <IonButton color="tertiary" expand="block" onClick={openCapacitorSite}>
          <IonLabel>Setup an appointment online now!</IonLabel>
          <IonIcon icon={arrowForward} />
        </IonButton>
        <IonButton color="tertiary" expand="block" onClick={callNumber}>
          <IonLabel>Call to setup an appointment now!</IonLabel> 
          <IonIcon icon={arrowForward} />
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default CreditResults;
