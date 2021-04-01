import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const EnterpriseDetail = ({ enterprise, navigation }) => (
  <>
    <StatusBar barStyle="light-content" />
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={styles.container}
        source={{ uri: `http://empresas.ioasys.com.br/${enterprise?.photo}` }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.buttonBack}
        >
          <Icon name="arrow-left" size={24} color="#FFF" />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.title}>
          <Icon name="map-pin" size={25} color="#f66" />
          <Text style={styles.textTitle}>
            {enterprise.country} | {enterprise.city}
          </Text>
        </View>
        <ScrollView style={styles.contentDescription}>
          <Text style={{ textAlign: 'justify' }}>
            {enterprise?.description}
          </Text>
        </ScrollView>
      </View>
    </View>
  </>
);

const mapStateToProps = (state) => ({
  enterprise: state.enterprises.enterprise,
});

export default connect(mapStateToProps, null)(EnterpriseDetail);
