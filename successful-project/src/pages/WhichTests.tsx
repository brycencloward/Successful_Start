import { IonButton, IonCheckbox, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { arrowForward } from 'ionicons/icons';
import MainHeader from '../components/MainHeader';
import './WhichTests.css';

const checkboxList = [
  { val: 'AP Exam', isChecked: false },
  { val: 'CLEP Exam', isChecked: true },
  { val: 'Dantes/DSST', isChecked: false },
  { val: 'IB Exam(s)', isChecked: false }
];

const WhichTests: React.FC = () => {
  return (
    <IonPage>
  <MainHeader/>
      <IonHeader class= "ion-text-center">
        <IonToolbar>
          <IonLabel className= "ion-text-wrap"> Please select the type of test(s) you have completed and passed</IonLabel>
          {checkboxList.map(({ val, isChecked }, i) => (
          <IonItem key={i}>
            <IonLabel>{val}</IonLabel>
            <IonCheckbox slot="end" value={val} checked={isChecked} color="tertiary"/>
          </IonItem>
        ))}
        </IonToolbar>
        <IonButton color="tertiary" expand="block" routerLink='WhichCLEP'>
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

export default WhichTests;
