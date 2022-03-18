import { IonButton, IonCheckbox, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonSelectOption, IonTitle, IonToolbar, IonSelect } from '@ionic/react';
import { arrowForward } from 'ionicons/icons';
import MainHeader from '../components/MainHeader';
import './WhichDSST.css';

//custom popover interface options
const options = {
  cssClass: 'custom-interface'
};

const WhichDSST: React.FC = () => {
  return (
    <IonPage>
  <MainHeader/>
      <IonHeader class="ion-text-center">
        <IonToolbar>
          <IonLabel className="ion-text-wrap">Please select all the subjects in which you have completed DSST examinations</IonLabel>

          <IonItem class="ion-text-center" lines="none">
            <IonLabel>Arts & Comm</IonLabel>
            <IonSelect interface="popover" interfaceOptions={options} multiple={true}>
              <IonSelectOption value="CoreDA" class="test">Art of the Western World</IonSelectOption>
              <IonSelectOption value="COMM204" class="test">Principles of Public Speaking</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem class="ion-text-center" lines="none">
            <IonLabel>English</IonLabel>
            <IonSelect interface="popover" interfaceOptions={options} multiple={true}>
              <IonSelectOption value="ENGL102">Principles of Advance English Composition</IonSelectOption>
              <IonSelectOption value="ENGL203">Technical Writing</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem class="ion-text-center" lines="none">
            <IonLabel>Humanities</IonLabel>
            <IonSelect interface="popover" interfaceOptions={options} multiple={true}>
              <IonSelectOption value="ID300D">Environmental Science (Environment and Humanity)</IonSelectOption>
              <IonSelectOption value="CoreINS">Ethics in America</IonSelectOption>
              <IonSelectOption value="ID300E">Ethics in Technology</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem class="ion-text-center" lines="none">
            <IonLabel>Technology</IonLabel>
            <IonSelect interface="popover" interfaceOptions={options} multiple={true}>
              <IonSelectOption value="LowElec">Computing & Information Technology</IonSelectOption>
              <IonSelectOption value="ID300E">Ethics in Technology</IonSelectOption>
              <IonSelectOption value="UpElec">Fundamentals of Cybersecurity</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem class="ion-text-center" lines="none">
            <IonLabel>Business</IonLabel>
            <IonSelect interface="popover" interfaceOptions={options} multiple={true}>
              <IonSelectOption value="GNBT270">Business Ethics & Society</IonSelectOption>
              <IonSelectOption value="BUS101">Introduction to Business</IonSelectOption>
              <IonSelectOption value="BUS355">Management Information Systems</IonSelectOption>
              <IonSelectOption value="GNBT202">Personal Finance</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem class="ion-text-center" lines="none">
            <IonLabel>Math</IonLabel>
            <IonSelect interface="popover" interfaceOptions={options} multiple={true}>
              <IonSelectOption value="GNBT202">Business Mathematics</IonSelectOption>
              <IonSelectOption value="MTHPT153">Principles of Statistics</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem class="ion-text-center" lines="none">
            <IonLabel>Social Science</IonLabel>
            <IonSelect interface="popover" interfaceOptions={options} multiple={true}>
              <IonSelectOption value="HRPT185">Organizational Behavior</IonSelectOption>
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

export default WhichDSST;
