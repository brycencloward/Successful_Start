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
          <IonLabel className="ion-text-wrap">Please select the subjects in which you have completed CLEP examinations</IonLabel>

          <IonItem class="ion-text-center" lines="none">
            <IonLabel>Business</IonLabel>
            <IonSelect interface="popover" interfaceOptions={options} multiple={true}>
              <IonSelectOption value="FinAcc" class="test">Financial Accounting</IonSelectOption>
              <IonSelectOption value="InfoSys" class="test">Information Systems</IonSelectOption>
              <IonSelectOption value="IntroBusLaw">Introductory Business Law</IonSelectOption>
              <IonSelectOption value="PrincManagement">Principles of Management</IonSelectOption>
              <IonSelectOption value="PrincMarketing">Principles of Marketing</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem class="ion-text-center" lines="none">
            <IonLabel>Composition & Literature</IonLabel>
            <IonSelect interface="popover" interfaceOptions={options} multiple={true}>
              <IonSelectOption value="AmericanLit">American Literature</IonSelectOption>
              <IonSelectOption value="AILit">Analyzing and Interpreting Literature</IonSelectOption>
              <IonSelectOption value="CollegeComp">College Composition</IonSelectOption>
              <IonSelectOption value="EnglishLit">English Literature</IonSelectOption>
              <IonSelectOption value="FCollegeComp">Freshman College Composition</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem class="ion-text-center" lines="none">
            <IonLabel>World Languages</IonLabel>
            <IonSelect interface="popover" interfaceOptions={options} multiple={true}>
              <IonSelectOption value="SpanishI">Spanish Language - Level I</IonSelectOption>
              <IonSelectOption value="SpanishII">Spanish Language - Level II</IonSelectOption>
              <IonSelectOption value="SpanishWritI">Spanish with Writing - Level I</IonSelectOption>
              <IonSelectOption value="SpanishWritII">Spanish with Writing - Level II</IonSelectOption>
              <IonSelectOption value="FrenchI">French Language - Level I</IonSelectOption>
              <IonSelectOption value="FrenchII">French Language - Level II</IonSelectOption>
              <IonSelectOption value="GermanI">German Language - Level I</IonSelectOption>
              <IonSelectOption value="GermanII">German Language - Level II</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem class="ion-text-center" lines="none">
            <IonLabel>Science & Mathematics</IonLabel>
            <IonSelect interface="popover" interfaceOptions={options} multiple={true}>
              <IonSelectOption value="Bio">Biology</IonSelectOption>
              <IonSelectOption value="Calc">Calculus</IonSelectOption>
              <IonSelectOption value="Chem">Chemistry</IonSelectOption>
              <IonSelectOption value="Alg">College Algebra</IonSelectOption>
              <IonSelectOption value="Math">College Mathematics</IonSelectOption>
              <IonSelectOption value="NatSci">Natural Sciences General Exam</IonSelectOption>
              <IonSelectOption value="PreCalc">Pre Calculus</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem class="ion-text-center" lines="none">
            <IonLabel>History & Social Sciences</IonLabel>
            <IonSelect interface="popover" interfaceOptions={options} multiple={true}>
              <IonSelectOption value="AmerGov">American Government</IonSelectOption>
              <IonSelectOption value="HisUSI">History of the United States I: Early Colonization to 1877</IonSelectOption>
              <IonSelectOption value="HisUSII">History of the United States II: 1865 to the Present</IonSelectOption>
              <IonSelectOption value="HumGrowthDev">Human Growth & Development</IonSelectOption>
              <IonSelectOption value="IntroEdPsychology">Intro to Educational Psychology</IonSelectOption>
              <IonSelectOption value="IntroPsychology">Intro to Psychology</IonSelectOption>
              <IonSelectOption value="IntroSociology">Intro to Sociology</IonSelectOption>
              <IonSelectOption value="MacroEcon">Macroeconomics</IonSelectOption>
              <IonSelectOption value="MicroEcon">Microeconomics</IonSelectOption>
              <IonSelectOption value="WestCivI">Western Civilization I: Ancient Near East to 1648</IonSelectOption>
              <IonSelectOption value="WestCivII">Western Civilivation II: 1648 to the Present</IonSelectOption>
            </IonSelect>
          </IonItem>

        </IonToolbar>
        <IonButton color="tertiary" expand="block" routerLink='WhichBusinessCLEP'>
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

export default WhichCLEP;
