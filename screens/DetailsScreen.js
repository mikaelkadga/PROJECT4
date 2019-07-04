import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Modal, TouchableHighlight } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';

class DetailsScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('title'),
        }
    }
    render() {
        /* ambil parameter yang dikirim dari HomeScreen */
        /* parameter pertama(namaparameterygdikirim, default value jika datanya tidak bernilai atau undefined *optional) */
        const id = this.props.navigation.getParam('id', 'id tidak ditemukan');
        const title = this.props.navigation.getParam('title', 'title tidak ditemukan');
        const content = this.props.navigation.getParam('content', 'content tidak ditemukan');
        const photo = this.props.navigation.getParam('photo', 'photo tidak ditemukan');
        return (
            <View style={[styles.container, styles.text]}>
                <Text style={styles.header}>Details Screen</Text>
                <Text style={styles.text}>ID : {id}</Text>
                <Text>Title: {title}</Text>
                <Text>Content: {content}</Text>
                {/* image bisa diklik */}
                <ImageViewModal sumber={photo} style={{ alignSelf: 'center' }} />
            </View>
        );
    };
};


class ImageViewModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
        };
        this.toogleModal = this.toogleModal.bind(this);
    };

    toogleModal = () => {
        this.setState((oldState) => {
            return {
                modalVisible: !oldState.modalVisible,
            };
        })
    };
    render() {
        return (
            <View>
                <TouchableHighlight onPress={this.toogleModal}>
                    <Image
                        source={this.props.sumber}
                        style={this.props.style}
                    />
                </TouchableHighlight>

                <Modal
                    visible={this.state.modalVisible}
                    transparent={true}
                    onRequestClose={this.toogleModal}
                >
                    <ImageViewer
                        imageUrls={[{ props: { source: this.props.sumber } }]}
                        onSwipeDown={this.toogleModal}
                        enableImageZoom={true}
                        enableSwipeDown={true}
                    />
                </Modal>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 10,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    text: {
        fontSize: 16,
    }
});

export default DetailsScreen;