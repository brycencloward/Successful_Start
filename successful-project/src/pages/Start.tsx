import React, { useState } from 'react';
import './ApplyNow.css';
import{arrowForward} from "ionicons/icons";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCheckbox, IonList, IonItem, IonLabel, IonItemDivider, IonIcon, IonButton, IonRouterLink, IonButtons } from '@ionic/react';
import MainHeader from '../components/MainHeader';

const checkboxList = [
  { val: 'I have no substantial work experience-I am just graduating high school.', isChecked: false },
  { val: 'I have multiple years of experience in a skilled work environment.', isChecked: true },
  { val: 'I have passed college credit tests (like CLEP) that will count towards my degree.', isChecked: true }
];
const Home: React.FC = () => {
  const [checked, setChecked] = useState(false);
  
  return (
    
    <IonPage>
 <MainHeader/>
    <IonContent>
      <IonList>
        <IonTitle>What areas do you have experience that might be applied for college credit?</IonTitle>

        {checkboxList.map(({ val, isChecked }, i) => (
          <IonItem key={i}>
            <IonLabel>{val}</IonLabel>
            <IonCheckbox slot="end" value={val} checked={isChecked}  />
          </IonItem>
        ))}
      </IonList>
          <IonButton>
          <IonIcon slot="icon-only" icon={arrowForward} />
        </IonButton>
    </IonContent>
  </IonPage>
  );
};

export default Home;

