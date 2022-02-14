import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import MainHeader from '../components/MainHeader'; //required for MainHeader custom component
import './Start.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <MainHeader />
      <IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Home;
