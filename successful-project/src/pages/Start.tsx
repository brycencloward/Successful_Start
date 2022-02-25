import React, { useState } from 'react';
import './Start.css';
import{arrowForward} from "ionicons/icons";
import { IonContent, IonPage, IonTitle , IonCheckbox, IonList, IonItem, IonLabel, IonIcon, IonButton } from '@ionic/react';
import MainHeader from '../components/MainHeader';

  
const checkboxList = [
  { val: 'I have no substantial work experience-I am just graduating high school.', isChecked: false },
  { val: 'I have multiple years of experience in a skilled work environment.', isChecked: true },
  { val: 'I have passed college credit tests (like CLEP) that will count towards my degree.', isChecked: true }
];
const Home: React.FC = () => {
  
  return (
    
    <IonPage>
 <MainHeader/>
    <IonContent>
      <IonList>
        <IonTitle>What areas do you have experience that might be applied for college credit?</IonTitle>

        {checkboxList.map(({ val, isChecked }, i) => (
          <IonItem key={i}>
            <IonLabel>{val}</IonLabel>
            <IonCheckbox slot="end" value={val} checked={isChecked} color="tertiary"/>
          </IonItem>
        ))}
      </IonList>
          <IonButton color="tertiary" expand="block">
            
          <IonLabel>Next</IonLabel>
          <IonIcon icon={arrowForward} />
       </IonButton>
    </IonContent>
  </IonPage>
  );
};

export default Home;

