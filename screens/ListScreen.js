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
            style={{ width: 50, height: 50, alignSelf: 'center' }}
            source={{ uri: 'https://www.muraldecal.com/en/img/asmu170-jpg/folder/products-listado-merchanthover/stickers-nirvana-and-smiley-drunk-black.jpg' }}
          />
          <Text style={{ fontSize: 20, fontWeight: 'bold', alignSelf: 'center' }}>Smells Like Teen Spirit</Text>
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
                photo: item.photo,
              });

            }}>
              <Left>
                <Thumbnail square source={{ uri: 'https://townsquare.media/site/366/files/2013/09/Nirvana.jpg' }} />
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
