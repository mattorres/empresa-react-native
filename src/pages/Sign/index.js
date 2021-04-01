import React, { useEffect, useState } from 'react';
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ActivityIndicator,
} from 'react-native';

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { Creators as SignActions } from '../../store/ducks/sign/actions';
import styles from './styles';

const Sign = ({ signRequest, loading, error }) => {
  useEffect(() => {}, []);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const sign = () => {
    signRequest(email, password);
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Image
          style={styles.logo}
          source={require('../../../assets/logo_ioasys.png')}
          resizeMode="contain"
        />
        <Text style={{ fontSize: 30 }}>Login</Text>
      </View>

      <View style={styles.content}>
        <View>
          <View style={styles.inputContent}>
            <Text>E-mail</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setEmail(text)}
              value={email}
            />
          </View>
          <View style={styles.inputContent}>
            <Text>Password</Text>
            <TextInput
              onChangeText={(text) => setPassword(text)}
              value={password}
              secureTextEntry
              onSubmitEditing={() => sign()}
              style={styles.input}
            />
          </View>
        </View>

        {error && (
          <Text style={styles.messageError}>
            Credenciais de login inválidas. Por favor, tente novamente.
          </Text>
        )}

        <TouchableOpacity style={styles.button} onPress={() => sign()}>
          {loading ? (
            <ActivityIndicator color="#FFF" />
          ) : (
            <Text style={styles.textButton}>ENTRAR</Text>
          )}
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const mapStateToProps = (state) => ({
  user: state.sign.user,
  loading: state.sign.loading,
  error: state.sign.error,
});

const mapDisptachToProps = (dispatch) =>
  bindActionCreators(SignActions, dispatch);

export default connect(mapStateToProps, mapDisptachToProps)(Sign);
