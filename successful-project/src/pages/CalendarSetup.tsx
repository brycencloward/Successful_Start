import { IonContent, IonHeader, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './CalendarSetup.css';
import MainHeader from '../components/MainHeader';

const CalendarSetup: React.FC = () => {
  return (
    <IonPage>
      <MainHeader />
      <IonContent fullscreen>
        <IonLabel>This is just filler content until we make the calendar function</IonLabel>
      </IonContent>
    </IonPage>
  );
};

export default CalendarSetup;
