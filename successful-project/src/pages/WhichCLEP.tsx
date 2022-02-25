import { IonButton, IonCheckbox, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { arrowForward } from 'ionicons/icons';
import MainHeader from '../components/MainHeader';
import './WhichCLEP.css';

const checkboxList = [
  { val: 'Business', isChecked: true },
  { val: 'Composition & Literature', isChecked: false },
  { val: 'World Languages', isChecked: false },
  { val: 'Science & Mathematics', isChecked: false },
  { val: 'History & Social Sciences', isChecked: false }
];

const WhichCLEP: React.FC = () => {
  return (
    <IonPage>
  <MainHeader/>
      <IonHeader class= "ion-text-center">
        <IonToolbar>
          <IonLabel className= "ion-text-wrap"> Please select the subjects in which you have completed CLEP examinations</IonLabel>
          {checkboxList.map(({ val, isChecked }, i) => (
          <IonItem class="ion-text-center" lines="none" key={i}>
            <IonLabel>{val}</IonLabel>
            <IonCheckbox slot="end" value={val} checked={isChecked} color="tertiary"/>
          </IonItem>
        ))}
        </IonToolbar>
        <IonButton color="tertiary" expand="block" routerLink='WhichBusinessCLEP'>
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

export default WhichCLEP;
