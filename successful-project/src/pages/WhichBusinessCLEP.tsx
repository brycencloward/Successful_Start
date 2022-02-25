import { IonButton, IonCheckbox, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { arrowForward } from 'ionicons/icons';
import MainHeader from '../components/MainHeader';
import './WhichBusinessCLEP.css';

const checkboxList = [
  { val: 'Financial Accounting', isChecked: false },
  { val: 'Information Systems', isChecked: true },
  { val: 'Introductory Business Law', isChecked: false },
  { val: 'Principles of Management', isChecked: true },
  { val: 'Principles of Marketing', isChecked: true }
];

const WhichBusinessCLEP: React.FC = () => {
  return (
    <IonPage>
  <MainHeader/>
      <IonHeader class= "ion-text-center">
        <IonToolbar>
          <IonLabel className= "ion-text-wrap"> Please select the tests you have passed (passing is a minimum score of 50):</IonLabel>
          {checkboxList.map(({ val, isChecked }, i) => (
          <IonItem key={i}>
            <IonLabel>{val}</IonLabel>
            <IonCheckbox slot="end" value={val} checked={isChecked} color="tertiary"/>
          </IonItem>
        ))}
        </IonToolbar>
        <IonButton color="tertiary" expand="block">
          <IonLabel>Next</IonLabel>
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

export default WhichBusinessCLEP;
