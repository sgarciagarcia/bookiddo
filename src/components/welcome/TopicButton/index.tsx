import '../../../styles/buttons.scss';

const TopicButton = ({topic, handleSelectedTopics, unselectTopics, isChecked}:any) => {
  const handleClick =() => {
    handleSelectedTopics(topic);
    
  };
  const handleUnclick = () => {
    unselectTopics(topic)
  }
  return (
    
    <li className={ `${isChecked ? 'secondary-button': 'third-button'} `} onClick={ isChecked ? handleUnclick : handleClick}>{topic}</li>
  )
}

export default TopicButton