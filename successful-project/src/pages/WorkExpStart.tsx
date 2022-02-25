import React, { useState } from 'react';
import { IonContent, IonPage, IonButton, IonLabel, IonIcon, IonItem, IonCheckbox } from '@ionic/react';
import MainHeader from '../components/MainHeader';
import './WorkExpStart.css';
import { arrowForward } from 'ionicons/icons';

const WorkExpStart: React.FC = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(true);

  //function that detects if checkbox one was checked, and then unchecks the other box
  const changeOptionOne = () => {
    console.log("First item checked!");
    //setChecked2(false);
  }

  return (
    <IonPage>
      <MainHeader />
      <IonContent fullscreen>
        <IonItem>
          <IonCheckbox
            checked={checked1}
            name="option1"
            onIonChange={changeOptionOne}
          />
          <IonLabel className="ion-text-wrap">I have no substantial work experience - I'm just graduating high school</IonLabel>
        </IonItem>
        <IonItem>
          <IonCheckbox checked={checked2} name="option2" onIonChange={e => console.log("Second item checked!")} />
          <IonLabel className="ion-text-wrap">I have multiple years of experience in a skilled work environment</IonLabel>
        </IonItem>
        <IonItem>
          <IonCheckbox checked={false} name="option3" onIonChange={e => console.log("Third item checked!")} />
          <IonLabel className="ion-text-wrap">I have passed college credit tests (like CLEP) that will count towards my degree.</IonLabel>
        </IonItem>

        <IonButton color="tertiary" expand="block" routerLink="WorkExpCreditResults">
          <IonLabel>Next  <IonIcon icon={arrowForward} /></IonLabel>
        </IonButton>

      </IonContent>
    </IonPage>
  );
};

export default WorkExpStart;
