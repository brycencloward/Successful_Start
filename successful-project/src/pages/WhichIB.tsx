import { IonButton, IonCheckbox, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { arrowForward } from 'ionicons/icons';
import { useContext, useState } from 'react';
import { MyGlobalContext, updateData } from '../App';
import MainHeader from '../components/MainHeader';

const WhichIB: React.FC = () => {
  const currentContext = useContext(MyGlobalContext);
  const { data, setData } = useContext(MyGlobalContext);
  const router = useIonRouter(); //needed to route programmatically

  const [Bio, Biol180] = useState(false);
  const [Bus, Bus101] = useState(false);
  const [Chem, Chem111] = useState(false);
  const [Cs, Cs111] = useState(false);
  const [Econ, Econ201] = useState(false);
  const [Env, Biol100] = useState(false);
  const [Geog, Geog102] = useState(false);
  const [Pols, Pols237] = useState(false);
  const [WHist, Hist101] = useState(false);
  const [USHist, Hist111] = useState(false);
  const [AfHist, Hist333] = useState(false);
  const [EuHist, Hist456] = useState(false);
  const [InfT, Bus355] = useState(false);
  const [Lang, Engl175] = useState(false);
  const [Lang2, Engl101] = useState(false);
  const [Math1, Math143] = useState(false);
  const [Math2, Math147] = useState(false);
  const [Math3, Math170] = useState(false);
  const [MathStud, Math137] = useState(false);
  const [Elective, ElectiveCredit] = useState(false);
  const [Mus, Mus110] = useState(false);
  const [Philo, Phil101] = useState(false);
  const [Phys, Phys111] = useState(false);
  const [Psyc, Psyc101] = useState(false);
  const [Anth, Anth102] = useState(false);
  const [Thea, Thea101] = useState(false);
  const [Art, Art291] = useState(false);

  const checkboxList = [
    { val: "Biology", course: "BIOL-180/BIOL-181, 8, Yes", state: Biol180, stateVal: Bio},
    { val: "Business Management", course: "BUS-101, 3, Yes", state: Bus101, stateVal: Bus},
    { val: "Chemistry", course: "CHEM-111/CHEM-112, 8, Yes", state: Chem111, stateVal: Chem},
    { val: "Computer Science", course: "CS-111, 4, Yes", state: Cs111, stateVal: Cs},
    { val: "Economics", course: "ECON-201/ECON-202, 6, Yes", state: Econ201, stateVal: Econ},
    { val: "Environmental Systems & Societies", course: "BIOL-100, 4, Yes", state: Biol100, stateVal: Env},
    { val: "Geography", course: "GEOG-102, 3, Yes", state: Geog102, stateVal: Geog},
    { val: "Global Politics", course: "POLS-237, 3, Yes", state: Pols237, stateVal: Pols},
    { val: "History (Civilization)", course: "HIST-101/HIST-102, 6, Yes", state: Hist101, stateVal: WHist},
    { val: "History (US)", course: "HIST-111/HIST-112, 6, Yes", state: Hist111, stateVal: USHist},
    { val: "History (Africa)", course: "HIST-333, 3, Yes", state: Hist333, stateVal: AfHist},
    { val: "History (Europe)", course: "HIST-454/HIST-456, 3, Yes", state: Hist456, stateVal: EuHist},
    { val: "Information Technology", course: "BUS-355, 3, Yes", state: Bus355, stateVal: InfT},
    { val: "Language A: Literature", course: "ENGL-175, 3, Yes", state: Engl175, stateVal: Lang},
    { val: "Language A: Language & Literature", course: "ENGL-101, 3, Yes", state: Engl101, stateVal: Lang2},
    { val: "Mathematics I", course: "MATH-143, 3, Yes", state: Math143, stateVal: Math1},
    { val: "Mathematics II", course: "MATH-147, 4, Yes", state: Math147, stateVal: Math2},
    { val: "Mathematics III", course: "MATH-170, 4, Yes", state: Math170, stateVal: Math3},
    { val: "Mathematical Studies", course: "MATH-137, 4, Yes", state: Math137, stateVal: MathStud},
    { val: "Further Mathematics", course: "Elective Credit, 4, Yes", state: ElectiveCredit, stateVal: Elective},
    { val: "Music", course: "MUS-110/MUS-291, 5, Yes", state: Mus110, stateVal: Mus},
    { val: "Philosophy", course: "PHIL-101, 3, Yes", state: Phil101, stateVal: Philo},
    { val: "Physics", course: "PHYS-111/PHYS-112, 8, Yes", state: Phys111, stateVal: Phys},
    { val: "Psychology", course: "PSYC-101/PSYC-385, 6, Yes", state: Psyc101, stateVal: Psyc},
    { val: "Social & Cultural Anthropology", course: "ANTH-102, 3, Yes", state: Anth102, stateVal: Anth},
    { val: "Theater", course: "THEA-101/THEA-211, 6, Yes", state: Thea101, stateVal: Thea},
    { val: "Visual Arts", course: "ART-291, 3, Yes", state: Art291, stateVal: Art},
  ];

  const nextPage = () => {
    //console.log("This is working!");
    checkboxList.forEach(function (value){
      if(value.stateVal){
        var parsed = value.course.split(", ");
        var core:boolean;
        if(parsed[2] == "Yes"){core = true;}
        else{core = false;}
        //prevent duplicates
        var found = false;
        //a workaround I had to implement because currentContext.data.data.includes refused to work
        currentContext.data.data.forEach(function (value2){
          if(value2.equiv == parsed[0]){
            found = true;
          }
        });
        if(!found) {
          updateData(currentContext, parsed[0], Number(parsed[1]), core);
        }
      }
    });
    console.log(currentContext.data);
    if(currentContext.data.pages.includes("TypeWorkExp")){
      router.push("TypeWorkExp", "forward", "push");
    }
    else{
      router.push("CreditResults", "forward", "push");
    }
  };

  return (
    <IonPage>
    <MainHeader/>
      <IonHeader class= "ion-text-center">
        <IonToolbar>
          <IonLabel className= "ion-text-wrap"> Please select all the subjects in which you have completed IB examinations</IonLabel>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen class= "scroll_content">

        {checkboxList.map(({ val, course, state }, i) => (
          <IonItem class="ion-text-left" lines="none" key={i}>
            <IonLabel>{val}</IonLabel>
            <IonCheckbox slot="end" value={course} color="tertiary" onIonChange={e => state(e.detail.checked)}/>
          </IonItem>
        ))}
        <IonButton color="tertiary" expand="block" onClick={() => nextPage()}>
          <IonLabel>Next</IonLabel>
          <IonIcon icon={arrowForward} />
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default WhichIB;
