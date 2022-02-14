import { IonHeader, IonToolbar, IonItem, IonButtons, IonButton, IonIcon } from '@ionic/react';
import './MainHeader.css';

interface ContainerProps { }

const MainHeader: React.FC<ContainerProps> = () => {
  return (
    <IonHeader className="ion-no-border">
        <IonToolbar color="primary">
          <IonButtons class="navbar">
            <IonButton class="nav-button">For You</IonButton>
            <IonButton class="nav-button">Search</IonButton>
            <IonButton class="nav-button">Menu</IonButton>
          </IonButtons>
        </IonToolbar>
        <IonItem color="secondary">
          <img src="\assets\images\wordmark-white.png" className="full-logo" alt="Test"/>
        </IonItem>
    </IonHeader>
  );
};

export default MainHeader;
