import { IonButton, IonCheckbox, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonToolbar, useIonRouter } from '@ionic/react';
import { arrowForward } from 'ionicons/icons';
import { useContext, useState } from 'react';
import { MyGlobalContext, updateData } from '../App';
import MainHeader from '../components/MainHeader';

const TypeWorkExp: React.FC = () => {
  const currentContext = useContext(MyGlobalContext);
  const { data, setData } = useContext(MyGlobalContext);
  const router = useIonRouter(); //needed to route programmatically

  const [Bus, Bus494] = useState(false);
  const [Comm, Comm204] = useState(false);
  const [Fitness, Kin267] = useState(false);
  const [Health, Nu442] = useState(false);
  const [SpecEd, Se335] = useState(false);

  const checkboxList = [
    { val: 'Business', course: "BUS-494, 3, Yes", state: Bus494, stateVal: Bus},
    { val: 'Public speaking', course: "COMM-204, 3, Yes", state: Comm204, stateVal: Comm},
    { val: 'Strength And Fitness', course: "KIN-352, 3, Yes", state: Kin267, stateVal: Fitness},
    { val: 'Community Health', course: "NU-442, 3, Yes", state: Nu442, stateVal: Health},
    { val: 'Special Education', course: "SE-335, 3, Yes", state: Se335, stateVal: SpecEd}
  ];
  

  const nextPage = () => {
    checkboxList.forEach(function (value){
      if(value.stateVal){
        var parsed = value.course.split(", ");
        var core:boolean;
        if(parsed[3] == "Yes"){core = true;}
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
    router.push("CreditResults", "forward", "push");
  };

  return (
    <IonPage>
    <MainHeader/>
    <IonContent fullscreen class= "scroll_content">
      <IonHeader class= "ion-text-center">
        <IonToolbar>
          <IonLabel className= "ion-text-wrap">In which of the following areas do have substantial work experience (select all that apply)?</IonLabel>
          {checkboxList.map(({ val, course, state }, i) => (
          <IonItem class="ion-text-center" lines="none" key={i}>
            <IonLabel>{val}</IonLabel>
            <IonCheckbox slot="end" value={course} color="tertiary" onIonChange={e => state(e.detail.checked)}/>
          </IonItem>
        ))}
        </IonToolbar>
        <IonButton color="tertiary" expand="block" onClick={() => nextPage()}>
            <IonLabel>Next</IonLabel>
            <IonIcon icon={arrowForward} />
        </IonButton>
      </IonHeader>
    </IonContent>
    </IonPage>
  );
};
export default TypeWorkExp;
