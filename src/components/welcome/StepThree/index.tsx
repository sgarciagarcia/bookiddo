import { useContext, useState } from "react";

import "../../../styles/fonts.scss";
import "../../../styles/buttons.scss";
import "../../../styles/spacing.scss";

import { FormContext } from "../../../FormContext";
import TopicButton from "../../welcome/TopicButton";

const StepThree = () => {
  const { kidData, setKidData, goPreviousStep, goNextStep }: any =
    useContext(FormContext);
  const [selectedTopics, setSelectedTopics] = useState<String[]>([]);
  const topicNames: any = [
    "Adventure and adventurers",
    "Animals",
    "Cats",
    "Christmas",
    "Comics & Graphic Novels",
    "Dance",
    "Dinosaurs",
    "Dogs",
    "Dragons",
    "Fairy tales",
    "Fantasy",
    "Friendship",
    "Ghosts",
    "High schools",
    "History",
    "Horror stories",
    "Humorous stories",
    "Love",
    "Magic",
    "Monsters",
    "Movies",
    "Music",
    "Mystery and detective stories",
    "Mythology",
    "Picture books",
    "Princesses",
    "Robots",
    "Schools",
    "Science fiction",
    "Teenagers",
    "Thriller",
    "Toy and movable books",
  ];

  const handleSelectedTopics = (topic: string) => {
    //si el array tiene menos de 4, permite que se almacene el topic pulsado
    if (selectedTopics.length < 4) {
      setSelectedTopics((prevState) => [...prevState, topic]);
    }
  };

  const unselectTopics = (topic: string) => {
    setSelectedTopics((prevState) =>
      prevState.filter((selectedTopic) => topic !== selectedTopic)
    ); //quédate los que sean distintos al topic clicado
  };
  const storeAndNext = () => {
    //modifica kidData y lo sube a la bbdd
    setKidData((prevState: any) => {
      const newState = { ...prevState, selectedTopics };
      return newState;
    });
    goNextStep();
  };
  const goBack = () => {
    goPreviousStep();
  };

  return (
    <div className="wrapper bg-gr">
      <h2 className="title white">What does {kidData.kidName} like?</h2>
      <p>(Choose 4)</p>
      <ul className="horizontal-grid left">
        {topicNames.map((topic: any, i: any) => {
          const isChecked = selectedTopics.includes(topic);
          return (
            <TopicButton
              key={i}
              topic={topic}
              isChecked={isChecked}
              handleSelectedTopics={handleSelectedTopics}
              unselectTopics={unselectTopics}
            />
          );
        })}
      </ul>
      <button className="third-button topic ghost" onClick={goBack}>
        Back
      </button>
      <button className="third-button topic" onClick={storeAndNext}>
        Done!
      </button>
    </div>
  );
};

export default StepThree;
