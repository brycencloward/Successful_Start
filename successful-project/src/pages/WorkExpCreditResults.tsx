import { IonButton, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './WorkExpCreditResults.css';
import MainHeader from '../components/MainHeader';
import { arrowForward } from 'ionicons/icons';

const WorkExpCreditResults: React.FC = () => {
  return (
    <IonPage>
      <MainHeader />
      <IonContent fullscreen>
        <IonLabel class="ion-text-center">Based on your selections, it would appear that you can receive credit for the following classes:</IonLabel>
        <IonList lines="none" className="ion-text-center">
          <IonItem>
            <IonLabel>BUS-494 (3-12 credits)</IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>COMM-204 (3 credits)</IonLabel>
          </IonItem>
        </IonList>
        <IonList lines="none">
          <IonItem class="ion-margin">
            Each of these items will need to be verified with a portfolio assessment with an advisor, but if they are verified:
          </IonItem>
          <IonItem class="ion-margin">
            You could complete an Associate's Degree in Business Administration with just 45 more credits!
          </IonItem>
          <IonItem class="ion-margin">
            You could complete a Bachelor's Degree in Business Administration with just 105 more credits!
          </IonItem>
        </IonList>

        <IonButton color="tertiary" expand="block" routerLink="CalendarSetup">
          <IonLabel>Set up an appointment online now!  <IonIcon icon={arrowForward} /></IonLabel>
        </IonButton>
        <IonButton color="tertiary" expand="block" routerLink="CalendarSetup">
          <IonLabel>Call to setup an appointment now!  <IonIcon icon={arrowForward} /></IonLabel>
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default WorkExpCreditResults;
