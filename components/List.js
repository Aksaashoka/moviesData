import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import Card from './Card';

class List extends React.PureComponent {
  render() {
    const {navigation, title, content} = this.props;
    return (
      <View style={styles.list}>
        <View style={styles.text}>
          <Text>{title}</Text>
        </View>
        <FlatList
          data={content}
          renderItem={({item}) => <Card navigation={navigation} item={item} />}
          horizontal={true}></FlatList>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  list: {
    marginTop: 25,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
});

export default List;
