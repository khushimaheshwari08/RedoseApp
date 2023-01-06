import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Platform,
  UIManager,
  ScrollView,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Lottie from 'lottie-react-native';
// import {AccordionList} from 'accordion-collapse-react-native';
// import {AccordionList} from 'react-native-accordion-list-view';
// import {List} from 'react-native-paper';

const Help = () => {
  const [expanded, setExpanded] = useState(false);
  const [arrowDown, setArrowDown] = useState(false);
  const [accordionId, setAccordionId] = useState([]);
  // const list = [
  //   {
  //     id: 1,
  //     title: 'Getting Started',
  //     body: 'React native Accordion/Collapse component, very good to use in toggles & show/hide content',
  //   },
  //   {
  //     id: 2,
  //     title: 'Components',
  //     body: 'AccordionList,Collapse,CollapseHeader & CollapseBody',
  //   },
  // ];

  // const head = item => {
  //   return (
  //     <>
  //       <View>
  //         <Text style={{color: 'black'}}>{item.title}</Text>
  //       </View>
  //     </>
  //   );
  // };

  // const body = item => {
  //   return (
  //     <>
  //       <View style={{padding: 10}}>
  //         <Text style={{textAlign: 'center', color: 'black'}}>{item.body}</Text>
  //       </View>
  //     </>
  //   );
  // };

  // const handlePress = () => setExpanded(!expanded);

  const data = [
    {
      id: 0,
      title: 'Lorem Ipsum is simply dummy 1',
      body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum haning Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    {
      id: 1,
      title: 'Lorem Ipsum is simply dummy 2',
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
      id: 2,
      title: 'Lorem Ipsum is simply dummy 3',
      body: 'ning Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
    {
      id: 3,
      title: 'Lorem Ipsum is simply dummy 4',
      body: 'ning Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    },
  ];
  useEffect(() => {
    if (Platform.OS === 'android') {
      if (UIManager.setLayoutAnimationEnabledExperimental) {
        UIManager.setLayoutAnimationEnabledExperimental(true);
      }
    }
  }, []);

  const navigation = useNavigation();

  const open = id => {
    // setExpanded(!expanded);
    // setArrowDown(!arrowDown);
    let temp = [...accordionId];
    if (temp.includes(id)) {
      const index = temp.indexOf(id);
      temp.splice(index, 1);
      setAccordionId(temp);
    } else {
      setAccordionId([...temp, id]);
    }
  };
  // console.log(accordionId);
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

      {/* <AccordionList
        list={list}
        header={head}
        body={body}
        keyExtractor={item => `${item.id}`}
      /> */}

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

      {/* <View style={styles.container2}>
        <AccordionList
          data={data}
          customTitle={item =><View><Text style={{color:'black',fontWeight:'bold'}}>{item.title}</Text><View style={styles.divider2}></View></View>}
          customBody={item => <Text style={{color:'black'}}>{item.body}</Text>}
          animationDuration={400}
          containerItemStyle	={styles.con}
        />
      </View> */}
      {/* <ScrollView>
        {data.map(value => (
          <View>
            <TouchableOpacity
              onPress={() => open(value.id)}
              style={{
                backgroundColor: '#f2f2f2',
                height: 70,
                // justifyContent: 'center',
                borderWidth: 1,
                borderColor: '#f2f2f2',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: '#4a4949',
                  fontWeight: 'bold',
                  paddingLeft: 20,
                  fontSize: 16,
                }}>
                {value.title}
              </Text>
              {accordionId.includes(value.id) ? (
                <Icon
                  name="keyboard-arrow-up"
                  size={30}
                  style={[styles.iconColor, {marginLeft: 60}]}
                />
              ) : (
                <Icon
                  name="keyboard-arrow-down"
                  size={30}
                  style={[styles.iconColor, {marginLeft: 60}]}
                />
              )}
            </TouchableOpacity>
            <View style={styles.divider2}></View>
            {accordionId.includes(value.id) ? (
              <Text
                style={{
                  color: 'black',
                  paddingLeft: 20,
                  backgroundColor: '#ffffff',
                  paddingTop: 2,
                  paddingBottom: 2,
                }}>
                {value.body}
              </Text>
            ) : null}
          </View>
        ))}
      </ScrollView> */}
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View>
            <TouchableOpacity
              onPress={() => open(item.id)}
              style={{
                backgroundColor: '#f2f2f2',
                height: 70,
                // justifyContent: 'center',
                borderWidth: 1,
                borderColor: '#f2f2f2',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: '#4a4949',
                  fontWeight: 'bold',
                  paddingLeft: 20,
                  fontSize: 16,
                }}>
                {item.title}
              </Text>
              {accordionId.includes(item.id) ? (
                <Icon
                  name="keyboard-arrow-up"
                  size={30}
                  style={[styles.iconColor, {marginLeft: 60}]}
                />
              ) : (
                <Icon
                  name="keyboard-arrow-down"
                  size={30}
                  style={[styles.iconColor, {marginLeft: 60}]}
                />
              )}
            </TouchableOpacity>
            <View style={styles.divider2}></View>
            {accordionId.includes(item.id) ? (
              <Text
                style={{
                  color: 'black',
                  paddingLeft: 20,
                  backgroundColor: '#ffffff',
                  paddingTop: 2,
                  paddingBottom: 2,
                }}>
                {item.body}
              </Text>
            ) : null}
          </View>
        )}
      />
    </View>
  );
};

export default Help;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },

  parent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
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
  container2: {
    // paddingVertical: '2%',
    // paddingHorizontal: '3%',
    // height: '100%',
    // backgroundColor: '#e7e7e7',
  },

  divider2: {
    height: 1,
    backgroundColor: '#ffffff',
  },
});
