import { IonButton, IonCheckbox, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonSelectOption, IonTitle, IonToolbar, IonSelect, useIonRouter } from '@ionic/react';
import { arrowForward } from 'ionicons/icons';
import { useContext, useState } from 'react';
import { MyGlobalContext, updateContext } from '../App';
import MainHeader from '../components/MainHeader';

//custom popover interface options
const options = {
  cssClass: 'custom-interface'
};

const WhichDSST: React.FC = () => {

  const [artsComm, setArtsComm] = useState<string[]>([]);
  const [english, setEnglish] = useState<string[]>([]);
  const [humanities, setHumanities] = useState<string[]>([]);
  const [technology, setTechnology] = useState<string[]>([]);
  const [socialScience, setSocialScience] = useState<string[]>([]);
  const [math, setMath] = useState<string[]>([]);
  const [business, setBusiness] = useState<string[]>([]);

  const currentContext = useContext(MyGlobalContext);
  const { data, setData } = useContext(MyGlobalContext);
  const router = useIonRouter(); //needed to route programmatically


  const nextPage = () => {
    //loop for each state
    let states = [artsComm, english, humanities, technology, socialScience, math, business];
    states.forEach(function (all){
      all.forEach(function (value){
        //parse different values
        var parsed = value.split(", ");
        var core:boolean;
        if(parsed[3] == "Yes"){core = true;}
        else{core = false;}
        //console.log(parsed);
        setData(updateContext(currentContext, parsed[0], parsed[1], Number(parsed[2]), core));
      });
    });
    console.log(currentContext.data);
    router.push("CreditResults", "forward", "push");
  };
  
  return (
    <IonPage>
  <MainHeader/>
      <IonHeader class="ion-text-center">
        <IonToolbar>
          <IonLabel className="ion-text-wrap">Please select all the subjects in which you have passed DSST examinations</IonLabel>
        </IonToolbar>
      </IonHeader>
          
          <IonContent fullscreen class="scroll_page">
          <IonItem class="ion-text-left" lines="none">
            <IonLabel>Arts & Comm</IonLabel>
            <IonSelect interface="popover" interfaceOptions={options} multiple={true} onIonChange={e => setArtsComm(e.detail.value)}>
              <IonSelectOption value="Art of the Western World, CORE-DA, 3, Yes">Art of the Western World</IonSelectOption>
              <IonSelectOption value="Principles of Public Speaking, COMM-204, 3, Yes">Principles of Public Speaking</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem class="ion-text-left" lines="none">
            <IonLabel>English</IonLabel>
            <IonSelect interface="popover" interfaceOptions={options} multiple={true} onIonChange={e => setEnglish(e.detail.value)}>
              <IonSelectOption value="Principles of Advance English Composition, ENGL-102, 3, Yes">Principles of Advance English Composition</IonSelectOption>
              <IonSelectOption value="Technical Writing, ENGL-203, 3, No">Technical Writing</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem class="ion-text-left" lines="none">
            <IonLabel>Humanities</IonLabel>
            <IonSelect interface="popover" interfaceOptions={options} multiple={true} onIonChange={e => setHumanities(e.detail.value)}>
              <IonSelectOption value="Environmental Science (Environment and Humanity), ID-300D, 3, Yes">Environmental Science (Environment and Humanity)</IonSelectOption>
              <IonSelectOption value="Ethics in America, CORE-INS, 3, Yes">Ethics in America</IonSelectOption>
              <IonSelectOption value="Ethics in Technology, ID-300E, 3, Yes">Ethics in Technology</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem class="ion-text-left" lines="none">
            <IonLabel>Technology</IonLabel>
            <IonSelect interface="popover" interfaceOptions={options} multiple={true} onIonChange={e => setTechnology(e.detail.value)}>
              <IonSelectOption value="Computing & Information Technology, Lower Elective, 3, No">Computing & Information Technology</IonSelectOption>
              <IonSelectOption value="Ethics in Technology, ID-300E, 3, Yes">Ethics in Technology</IonSelectOption>
              <IonSelectOption value="Fundamentals of Cybersecurity, Upper Elective, 3, No">Fundamentals of Cybersecurity</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem class="ion-text-left" lines="none">
            <IonLabel>Social Science</IonLabel>
            <IonSelect interface="popover" interfaceOptions={options} multiple={true} onIonChange={e => setSocialScience(e.detail.value)}>
              <IonSelectOption value="Organizational Behavior, SS/HRPT-185, 3, Yes">Organizational Behavior</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem class="ion-text-left" lines="none">
            <IonLabel>Math</IonLabel>
            <IonSelect interface="popover" interfaceOptions={options} multiple={true} onIonChange={e => setMath(e.detail.value)}>
              <IonSelectOption value="Business Mathematics, GNBT-202, 3, No">Business Mathematics</IonSelectOption>
              <IonSelectOption value="Principles of Statistics, MTHPT-153, 3, Yes">Principles of Statistics</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonItem class="ion-text-left" lines="none">
            <IonLabel>Business</IonLabel>
            <IonSelect interface="popover" interfaceOptions={options} multiple={true} onIonChange={e => setBusiness(e.detail.value)}>
              <IonSelectOption value="Business Ethics & Society, GNBT-270, 3, No">Business Ethics & Society</IonSelectOption>
              <IonSelectOption value="Introduction to Business, BUS-101, 3, No">Introduction to Business</IonSelectOption>
              <IonSelectOption value="Management Information Systems, BUS355, 3, No">Management Information Systems</IonSelectOption>
              <IonSelectOption value="Personal Finance, GNBT202, 3, No">Personal Finance</IonSelectOption>
            </IonSelect>
          </IonItem>

          <IonButton color="tertiary" expand="block" onClick={() => nextPage()}>
            <IonLabel>Next</IonLabel>
            <IonIcon icon={arrowForward} />
          </IonButton>

        <IonHeader collapse="condense">
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default WhichDSST;
