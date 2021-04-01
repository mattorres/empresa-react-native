import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Button = ({ navigation, icon }) => (
  <TouchableOpacity
    style={{
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 10,
    }}
  >
    <Icon name={icon} size={26} />
  </TouchableOpacity>
);

export default Button;
