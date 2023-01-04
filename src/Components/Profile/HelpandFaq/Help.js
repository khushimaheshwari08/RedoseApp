import {useNavigation} from '@react-navigation/native';
import React, {useRef, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Lottie from 'lottie-react-native';
import {AccordionList} from 'accordion-collapse-react-native';
import {List} from 'react-native-paper';

const Help = () => {
  const [expanded, setExpanded] = useState(false);
  const list = [
    {
      id: 1,
      title: 'Getting Started',
      body: 'React native Accordion/Collapse component, very good to use in toggles & show/hide content',
    },
    {
      id: 2,
      title: 'Components',
      body: 'AccordionList,Collapse,CollapseHeader & CollapseBody',
    },
  ];

  const head = item => {
    return (
      <>
        <View>
          <Text style={{color: 'black'}}>{item.title}</Text>
        </View>
      </>
    );
  };

  const body = item => {
    return (
      <>
        <View style={{padding: 10}}>
          <Text style={{textAlign: 'center', color: 'black'}}>{item.body}</Text>
        </View>
      </>
    );
  };

  const handlePress = () => setExpanded(!expanded);

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.parent}>
        <View style={styles.Profile}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={25} style={styles.iconColor} />
          </TouchableOpacity>
          <Text style={styles.heading}>Help & FAQs</Text>
        </View>
      </View>
      {/* <Lottie style={styles.noResultImg} source={require('../../../assets/no_result.json')} autoPlay loop />
        <Text style={styles.notLocation}>No Records found</Text>
        <Text style={styles.textTry}>Sorry. We couldn't find anything. You can try another search</Text> */}
      <AccordionList
        list={list}
        header={head}
        body={body}
        keyExtractor={item => `${item.id}`}
      />
      {/* <List.Section title="Accordions">
        <List.Accordion
          title="Uncontrolled Accordion"
          // left={props => <List.Icon {...props} icon="folder" />}
        >
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>

        <List.Accordion
          title="Controlled Accordion"
          // left={props => <List.Icon {...props} icon="folder" />}
          expanded={expanded}
          onPress={handlePress}>
          <List.Item title="First item" />
          <List.Item title="Second item" />
        </List.Accordion>
      </List.Section> */}

    </View>
  );
};

export default Help;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    padding: 10,
  },

  parent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  Profile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heading: {
    fontSize: 23,
    color: '#ff2746',
    fontWeight: 'bold',
    marginLeft: 15,
  },
  iconColor: {
    color: '#4a4949',
  },
  noResultImg: {
    height: 350,
    marginLeft: 30,
    marginTop: 8,
  },
  notLocation: {
    fontSize: 23,
    color: '#ff2746',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 32,
  },
  textTry: {
    textAlign: 'center',
    color: 'black',
    marginTop: 10,
    fontStyle: 'italic',
    fontWeight: '500',
    marginBottom: 20,
  },
});
