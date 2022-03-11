import { IonButton, IonCheckbox, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { arrowForward } from 'ionicons/icons';
import MainHeader from '../components/MainHeader';
import './CreditResults.css';
import { Browser } from '@capacitor/browser';
import { CallNumber } from 'capacitor-call-number';

const callNumber= async () => {
await CallNumber.call({ number: '208-717-5813', bypassAppChooser: false });
};

const openCapacitorSite = async () => {
  await Browser.open({ url: 'https://lcsc.co1.qualtrics.com/jfe/form/SV_1YtbAryCRD9zWu2' });
};


const CreditResults: React.FC = () => {
  return (
    <IonPage>
  <MainHeader/>
      <IonHeader class= "ion-text-center">
        <IonToolbar>
          <IonLabel className= "ion-text-wrap"> Based on your selections, it would appear that you can recieve credit for the following classes:</IonLabel>
          <IonList lines="none">
      <IonItem>
        <IonLabel class= "ion-text-center">BUS-221 (3 Credits)</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel class= "ion-text-center">BUS-311 (3 Credits)</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel class= "ion-text-center">BUS-321 (3 Credits)</IonLabel>
      </IonItem>
       </IonList>
       <IonList lines='none'>
         <IonItem>
           <IonLabel className= "ion-text-wrap" class= "ion-text-center"> You could complete an Associate's Degree in Business Administration with just 52 more credits!</IonLabel>
           </IonItem>
           <IonItem>
             <IonLabel className= "ion-text-wrap" class= "ion-text-center"> You could complete a Bachelor's Degree in Business Administration with just 111 more credits!</IonLabel>
             </IonItem>
       </IonList>
        </IonToolbar>
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
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default CreditResults;
