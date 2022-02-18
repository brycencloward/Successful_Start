import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import MainHeader from '../components/MainHeader';
import './ApplyNow.css';
const ApplyNow: React.FC = () => {
  return (
    <IonPage>
         <MainHeader />
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
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

export default ApplyNow;
