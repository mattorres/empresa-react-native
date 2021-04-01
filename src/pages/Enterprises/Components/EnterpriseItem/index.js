import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const EnterpriseItem = ({ enterprise, onPress }) => (
  <TouchableOpacity
    keyExtractor={enterprise.id}
    onPress={onPress}
    style={styles.container}
  >
    <Image
      style={styles.image}
      resizeMode="contain"
      source={{
        uri: `http://empresas.ioasys.com.br/${enterprise.photo}`,
      }}
    />
    <View style={styles.contentText}>
      <Text>
        {enterprise.country} | {enterprise.city}
      </Text>
      <Text style={styles.textName}>{enterprise.enterprise_name}</Text>
      <Text numberOfLines={3}>{enterprise.description}</Text>
      <Text>$ {enterprise.share_price}</Text>
      <View style={styles.redeSocial}>
        <Icon
          name="facebook"
          color={styles.iconFacebook.color}
          size={24}
          style={styles.icon}
        />
        <Icon
          name="twitter"
          size={24}
          color={styles.iconTwitter.color}
          style={styles.icon}
        />
        <Icon
          name="linkedin"
          color={styles.iconLinkedim.color}
          size={24}
          style={styles.icon}
        />
      </View>
    </View>
  </TouchableOpacity>
);

export default EnterpriseItem;
