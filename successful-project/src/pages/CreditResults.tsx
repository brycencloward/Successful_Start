import { IonButton, IonCheckbox, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { arrowForward } from 'ionicons/icons';
import MainHeader from '../components/MainHeader';
import './CreditResults.css';
import { Browser } from '@capacitor/browser';
import { CallNumber } from 'capacitor-call-number';
import { MyGlobalContext } from '../App';
import { useContext } from 'react';

const callNumber= async () => {
await CallNumber.call({ number: '208-717-5813', bypassAppChooser: false });
};

const openCapacitorSite = async () => {
  await Browser.open({ url: 'https://lcsc.co1.qualtrics.com/jfe/form/SV_1YtbAryCRD9zWu2' });
};


const CreditResults: React.FC = () => {

  const currentContext = useContext(MyGlobalContext);
  //console.log(currentContext.data);
  var finalData = currentContext.data;
  console.log(finalData);


  return (
    <IonPage>
    <MainHeader/>
      <IonHeader class= "ion-text-center">
      <IonLabel className= "ion-text-wrap"> Based on your selections, it would appear that you can recieve credit for the following classes:</IonLabel>
        <IonList lines="none">
        {finalData.data.map(({equiv, credits}, i) => (
        <IonItem class="ion-text-center" lines="none" key={i}>
          <IonLabel className= "ion-text-wrap">{equiv} ({credits} Credits)</IonLabel>
        </IonItem>
        ))}
       </IonList>
       <IonList lines='none'>
         <IonItem>
           <IonLabel className= "ion-text-wrap" class= "ion-text-center"> You could complete an Associate's Degree in Business Administration with just 52 more credits!</IonLabel>
           </IonItem>
           <IonItem>
             <IonLabel className= "ion-text-wrap" class= "ion-text-center"> You could complete a Bachelor's Degree in Business Administration with just 111 more credits!</IonLabel>
             </IonItem>
       </IonList>
        <IonButton color="tertiary" expand="block" onClick={openCapacitorSite}>
          <IonLabel>Setup an appointment online now!</IonLabel>
          <IonIcon icon={arrowForward} />
        </IonButton>
        <IonButton color="tertiary" expand="block" onClick={callNumber}>
          <IonLabel>Call to setup an appointment now!</IonLabel> 
          <IonIcon icon={arrowForward} />
        </IonButton>
      </IonHeader>
      <IonContent fullscreen>
      </IonContent>
    </IonPage>
  );
};

export default CreditResults;
