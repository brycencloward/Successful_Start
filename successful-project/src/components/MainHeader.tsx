import { IonHeader, IonToolbar, IonItem, IonButtons, IonButton, IonIcon, IonLabel } from '@ionic/react';
import { person, search, menu } from 'ionicons/icons';
import './MainHeader.css';

interface ContainerProps { }

const MainHeader: React.FC<ContainerProps> = () => {
  return (
    <IonHeader className="ion-no-border">
        <IonToolbar color="primary">
          <IonButtons class="navbar">
            <IonButton class="nav-button">
              <div className="button-stack">
                <IonIcon icon={person} class="nav-icon"></IonIcon>
                <IonLabel>For You</IonLabel>
              </div>
            </IonButton>
            <IonButton class="nav-button">
              <div className="button-stack">
                <IonIcon icon={search} class="nav-icon"></IonIcon>
                <IonLabel>Search</IonLabel>
              </div>
            </IonButton>
            <IonButton class="nav-button">
              <div className="button-stack">
                <IonIcon icon={menu} class="nav-icon"></IonIcon>
                <IonLabel>Menu</IonLabel>
              </div>
            </IonButton>
          </IonButtons>
        </IonToolbar>
        <IonItem color="secondary">
          <img src="\assets\images\wordmark-white.png" className="full-logo" alt="Test"/>
        </IonItem>
    </IonHeader>
  );
};

export default MainHeader;
