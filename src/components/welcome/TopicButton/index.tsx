
const TopicButton = ({topic, handleSelectedTopics, unselectTopics, isChecked}:any) => {
  const handleClick =() => {
    handleSelectedTopics(topic);
    
  };
  const handleUnclick = () => {
    unselectTopics(topic)
  }
  return (
    
    <li className={ `${isChecked ? 'bg-pink': 'bg-white'} `} onClick={ isChecked ? handleUnclick : handleClick}>{topic}</li>
  )
}

export default TopicButton