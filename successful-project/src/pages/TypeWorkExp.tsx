import { IonButton, IonCheckbox, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { arrowForward } from 'ionicons/icons';
import MainHeader from '../components/MainHeader';
import './TypeWorkExp.css';

const checkboxList = [
  { val: 'Business', isChecked: true },
  { val: 'Public speaking', isChecked: false },
  { val: 'Strength And Fitness', isChecked: false },
  { val: 'Community Health', isChecked: false },
  { val: 'Special Education', isChecked: false }
];
const TypeWorkExp: React.FC = () => {
  return (
    <IonPage>
  <MainHeader/>
      <IonHeader class= "ion-text-center">
        <IonToolbar>
          <IonLabel className= "ion-text-wrap"> Please select the subjects in which you have completed CLEP examinations</IonLabel>
          {checkboxList.map(({ val, isChecked }, i) => (
          <IonItem key={i}>
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
export default TypeWorkExp;
