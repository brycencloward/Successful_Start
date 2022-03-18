import { IonButton, IonCheckbox, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonSelectOption, IonTitle, IonToolbar, IonSelect } from '@ionic/react';
import { arrowForward } from 'ionicons/icons';
import MainHeader from '../components/MainHeader';
import './WhichAP.css';

//custom popover interface options
const options = {
  cssClass: 'custom-interface'
};

const WhichAP: React.FC = () => {
  return (
    <IonPage>
  <MainHeader/>
      <IonHeader class="ion-text-center">
        <IonToolbar>
          <IonLabel className="ion-text-wrap">Please select all the subjects in which you have completed AP examinations</IonLabel>

          <IonItem class="ion-text-center" lines="none">
            <IonLabel>Arts (Huminaities)</IonLabel>
            <IonSelect interface="popover" interfaceOptions={options} multiple={true}>
              <IonSelectOption value="Art100" class="test">Art History</IonSelectOption>
              <IonSelectOption value="Art111" class="test">Studio Art-Drawing</IonSelectOption>
              <IonSelectOption value="Mus142">Music Theory</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem class="ion-text-center" lines="none">
            <IonLabel>English (Humanities)</IonLabel>
            <IonSelect interface="popover" interfaceOptions={options} multiple={true}>
              <IonSelectOption value="Engl101">English Lang/Comp</IonSelectOption>
              <IonSelectOption value="Engl102">English Lang/Comp 2</IonSelectOption>
              <IonSelectOption value="Engl175">English Lit/Comp</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem class="ion-text-center" lines="none">
            <IonLabel>History and Social Sciences</IonLabel>
            <IonSelect interface="popover" interfaceOptions={options} multiple={true}>
              <IonSelectOption value="POLS285">Comparative Gov't/Politics</IonSelectOption>
              <IonSelectOption value="HISTelective">European History</IonSelectOption>
              <IonSelectOption value="SSelective">Human Geography</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem class="ion-text-center" lines="none">
            <IonLabel>Business</IonLabel>
            <IonSelect interface="popover" interfaceOptions={options} multiple={true}>
              <IonSelectOption value="Econ201">Macroeconomics I</IonSelectOption>
              <IonSelectOption value="Econ202">Macroeconomics II</IonSelectOption>
              <IonSelectOption value="Psyc101">Psychology</IonSelectOption>
              <IonSelectOption value="Pols101">U.S Gov't/Politics</IonSelectOption>
              <IonSelectOption value="Hist111">United States History</IonSelectOption>
              <IonSelectOption value="Hist101">World History</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem class="ion-text-center" lines="none">
            <IonLabel>Math & Computer Science</IonLabel>
            <IonSelect interface="popover" interfaceOptions={options} multiple={true}>
              <IonSelectOption value="coreMath">Calculus AB</IonSelectOption>
              <IonSelectOption value="Math170">Calculus BC</IonSelectOption>
              <IonSelectOption value="Cs111">Computer Science A</IonSelectOption>
              <IonSelectOption value="Cs108">Computer Science Principles</IonSelectOption>
              <IonSelectOption value="Math153">Statistics</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem class="ion-text-center" lines="none">
            <IonLabel>Sciences</IonLabel>
            <IonSelect interface="popover" interfaceOptions={options} multiple={true}>
              <IonSelectOption value="Biol100">Biology</IonSelectOption>
              <IonSelectOption value="Chem111">Chemistry</IonSelectOption>
              <IonSelectOption value="Ns150">Environmental Science</IonSelectOption>
              <IonSelectOption value="Phys111">Physics I</IonSelectOption>
              <IonSelectOption value="Phys112">Physics II</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem class="ion-text-center" lines="none">
            <IonLabel>World Languages & Culture</IonLabel>
            <IonSelect interface="popover" interfaceOptions={options} multiple={true}>
              <IonSelectOption value="SPAN102">Spanish Language & Culture I</IonSelectOption>
              <IonSelectOption value="SPAN201">Spanish Language & Culture II</IonSelectOption>
              <IonSelectOption value="SPAN202">Spanish Language & Culture III</IonSelectOption>
              <IonSelectOption value="FL1FL2">Foreign Language I</IonSelectOption>
              <IonSelectOption value="FL3">Foreign Language II</IonSelectOption>
              <IonSelectOption value="FL4">Foreign Language III</IonSelectOption>
            </IonSelect>
          </IonItem>

        </IonToolbar>
        <IonButton color="tertiary" expand="block" routerLink='CreditResults'>
          <IonLabel>Next</IonLabel>
          <IonIcon icon={arrowForward} />
        </IonButton>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default WhichAP;
