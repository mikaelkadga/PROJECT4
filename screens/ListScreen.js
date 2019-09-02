import React, { Component } from 'react';
import { ScrollView, StyleSheet, FlatList, Text, View, Image } from 'react-native';

import HumanRightsStore from '../components/HumanRightsStore';
import { ListItem, Left, Thumbnail, Body, Right } from 'native-base';

class ListScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{ justifyContent: 'center' }}>
          <Image
            style={{ width: 70, height: 50, alignSelf: 'center' }}
            source={require('../assets/images/awal.png')}
          />
          <Text style={{ fontSize: 17, fontWeight: 'bold', alignSelf: 'center', margin: 10 }}>The Universal Declaration Of Human Rights</Text>
        </View>

        <FlatList
          data={HumanRightsStore}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ListItem thumbnail button={true} onPress={() => {
              /* passing parameter dari data HumanRightStore ke DetailsScreen */
              this.props.navigation.navigate('Details', {
                id: item.id,
                title: item.title,
                content: item.content,
                photoDetail: item.photoDetail,
              });

            }}>
              <Left>
                <Thumbnail square source={item.photoList} />
              </Left>
              <Body>
                <Text>{item.title}</Text>
              </Body>
            </ListItem>
          )}
        />
      </ScrollView>
    );
  };
};

ListScreen.navigationOptions = {
  title: 'Human Rights',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

export default ListScreen;
