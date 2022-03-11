import React, { useState } from 'react';
import './Start.css';
import{arrowForward} from "ionicons/icons";
import { IonContent, IonPage, IonTitle , IonCheckbox, IonList, IonItem, IonLabel, IonIcon, IonButton } from '@ionic/react';
import MainHeader from '../components/MainHeader';
import { Browser } from '@capacitor/browser';
  
const checkboxList = [
  { val: 'I have no substantial work experience-I am just graduating high school.', isChecked: false },
  { val: 'I have multiple years of experience in a skilled work environment.', isChecked: false },
  { val: 'I have passed college credit tests (like CLEP) that will count towards my degree.', isChecked: true }
];
const openCapacitorSite = async () => {
  await Browser.open({ url: 'https://www.lcsc.edu/admissions/apply' });
};
const Home: React.FC = () => {
  
  return (
    
    <IonPage>
 <MainHeader/>
    <IonContent>
      <IonList class= "ion-text-center">
        <IonLabel className="ion-text-center">What areas do you have experience that might be applied for college credit?</IonLabel>

        {checkboxList.map(({ val, isChecked }, i) => (
          <IonItem class="ion-text-center" lines="none" key={i}>
            <IonLabel className= "ion-text-wrap">{val}</IonLabel>
            <IonCheckbox slot="end" value={val} checked={isChecked} color="tertiary"/>
          </IonItem>
        ))}
      </IonList>
          <IonButton color="tertiary" expand="block" onClick={openCapacitorSite}>
            
          <IonLabel>Next</IonLabel>
          <IonIcon icon={arrowForward} />
       </IonButton>
    </IonContent>
  </IonPage>
  );
};

export default Home;

