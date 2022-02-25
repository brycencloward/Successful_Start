import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import MainHeader from '../components/MainHeader';
import './CalendarSetup.css';

const CalendarSetup: React.FC = () => {
  return (
    <IonPage>
<MainHeader/>       
   <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
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

export default CalendarSetup;
