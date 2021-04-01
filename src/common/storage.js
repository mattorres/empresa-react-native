import AsyncStorage from '@react-native-community/async-storage';

export const setItems = async (token, client, uid) => {
  await AsyncStorage.multiSet([
    ['access-token', token],
    ['client', client],
    ['uid', uid],
  ]);
};

export const obterItems = async () =>
  AsyncStorage.multiGet(['access-token', 'client', 'uid']);

export const removeItems = async () => {
  const keys = await AsyncStorage.getAllKeys();
  await AsyncStorage.multiRemove(keys);
};
