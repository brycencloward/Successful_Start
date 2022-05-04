import { IonButton, IonCheckbox, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonSelectOption, IonTitle, IonToolbar, IonSelect } from '@ionic/react';
import { arrowForward } from 'ionicons/icons';
import MainHeader from '../components/MainHeader';
import './WhichCLEP.css';

//custom popover interface options
const options = {
  cssClass: 'custom-interface'
};

const WhichCLEP: React.FC = () => {
  return (
    <IonPage>
  <MainHeader/>
      <IonHeader class="ion-text-center">
        <IonToolbar>
          <IonLabel className="ion-text-wrap">Please select all the subjects in which you have completed CLEP examinations</IonLabel>
        </IonToolbar>
      </IonHeader>
          <IonContent fullscreen class="scroll_content">
          <IonItem class="ion-text-left" lines="none">
            <IonLabel>Business</IonLabel>
            <IonSelect interface="popover" interfaceOptions={options} multiple={true}>
              <IonSelectOption value="AcElec">Financial Accounting</IonSelectOption>
              <IonSelectOption value="BUS221">Information Systems</IonSelectOption>
              <IonSelectOption value="BUS365">Introductory Business Law</IonSelectOption>
              <IonSelectOption value="BUS311">Principles of Management</IonSelectOption>
              <IonSelectOption value="BUS321">Principles of Marketing</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem class="ion-text-left" lines="none">
            <IonLabel>Composition & Literature</IonLabel>
            <IonSelect interface="popover" interfaceOptions={options} multiple={true}>
              <IonSelectOption value="CoreLitI">American Literature</IonSelectOption>
              <IonSelectOption value="ENGL175">Analyzing and Interpreting Literature</IonSelectOption>
              <IonSelectOption value="ENGL101I">College Composition</IonSelectOption>
              <IonSelectOption value="CoreLitII">English Literature</IonSelectOption>
              <IonSelectOption value="ENGL101II">Freshman College Composition</IonSelectOption>
              <IonSelectOption value="CoreHum">Humanities General Exam</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem class="ion-text-left" lines="none">
            <IonLabel>World Languages</IonLabel>
            <IonSelect interface="popover" interfaceOptions={options} multiple={true}>
              <IonSelectOption value="SPAN102">Spanish Language - Level I</IonSelectOption>
              <IonSelectOption value="SPAN201">Spanish Language - Level II</IonSelectOption>
              <IonSelectOption value="SPAN102">Spanish with Writing - Level I</IonSelectOption>
              <IonSelectOption value="SPAN202">Spanish with Writing - Level II</IonSelectOption>
              <IonSelectOption value="FREN102">French Language - Level I</IonSelectOption>
              <IonSelectOption value="FREN201">French Language - Level II</IonSelectOption>
              <IonSelectOption value="GERM102">German Language - Level I</IonSelectOption>
              <IonSelectOption value="GERM201">German Language - Level II</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem class="ion-text-left" lines="none">
            <IonLabel>Science & Mathematics</IonLabel>
            <IonSelect interface="popover" interfaceOptions={options} multiple={true}>
              <IonSelectOption value="BIOL100">Biology</IonSelectOption>
              <IonSelectOption value="MATH170">Calculus</IonSelectOption>
              <IonSelectOption value="CHEM112">Chemistry</IonSelectOption>
              <IonSelectOption value="MATH143">College Algebra</IonSelectOption>
              <IonSelectOption value="MATH123">College Mathematics</IonSelectOption>
              <IonSelectOption value="NS150">Natural Sciences General Exam</IonSelectOption>
              <IonSelectOption value="MATH147">Pre Calculus</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem class="ion-text-left" lines="none">
            <IonLabel>History & Social Sciences</IonLabel>
            <IonSelect interface="popover" interfaceOptions={options} multiple={true}>
              <IonSelectOption value="POLS101">American Government</IonSelectOption>
              <IonSelectOption value="HIST111">History of the United States I: Early Colonization to 1877</IonSelectOption>
              <IonSelectOption value="HIST112">History of the United States II: 1865 to the Present</IonSelectOption>
              <IonSelectOption value="PSYC205">Human Growth & Development</IonSelectOption>
              <IonSelectOption value="PSYC321">Intro to Educational Psychology</IonSelectOption>
              <IonSelectOption value="PSYC101">Intro to Psychology</IonSelectOption>
              <IonSelectOption value="SOC101">Intro to Sociology</IonSelectOption>
              <IonSelectOption value="ECON201">Macroeconomics</IonSelectOption>
              <IonSelectOption value="ECON202">Microeconomics</IonSelectOption>
              <IonSelectOption value="HIST101">Western Civilization I: Ancient Near East to 1648</IonSelectOption>
              <IonSelectOption value="HIST102">Western Civilivation II: 1648 to the Present</IonSelectOption>
            </IonSelect>
          </IonItem>
        <IonButton color="tertiary" expand="block" routerLink='CreditResults'>
          <IonLabel>Next</IonLabel>
          <IonIcon icon={arrowForward} />
        </IonButton>

        <IonHeader collapse="condense">
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default WhichCLEP;
