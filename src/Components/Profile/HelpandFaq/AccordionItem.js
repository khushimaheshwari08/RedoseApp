import {useState} from 'react';
import {useRef} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const AccordionItem = () => {
  const [clicked, setClicked] = useState(false);
  const contentEl = useRef();

  const handleToggle = () => {
    setClicked(prev => !prev);
  };

  return (
    <View className={`accordion_item ${clicked ? 'active' : ''}`}>
      <TouchableOpacity className="button" onPress={handleToggle}>
        <Text style={{color: 'black'}}>hy</Text>
        <View className="control">{clicked ? '—' : '+'} </View>
      </TouchableOpacity>

      <View
        ref={contentEl}
        className="answer_wrapper"
        style={
          clicked ? {height: contentEl.current.scrollHeight} : {height: '0px'}
        }>
        <View className="answer">
          <Text style={{color: 'black'}}>ss</Text>
        </View>
      </View>
    </View>
  );
};

export default AccordionItem;
