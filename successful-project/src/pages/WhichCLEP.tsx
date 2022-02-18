import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import MainHeader from '../components/MainHeader';
import './WhichCLEP.css';

const WhichCLEP: React.FC = () => {
  return (
    <IonPage>
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

export default WhichCLEP;
