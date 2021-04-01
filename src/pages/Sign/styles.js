import { StyleSheet } from 'react-native';
import { metrics } from '../../styles/index';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: metrics.basePadding,
  },

  logo: {
    marginVertical: metrics.baseMargin * 4,
    alignItems: 'center',
    alignSelf: 'center',
    width: 200,
  },

  content: {
    height: 360,
    justifyContent: 'space-around',
  },

  inputContent: {
    marginVertical: metrics.baseMargin,
  },

  input: {
    height: 40,
    width: '100%',
    backgroundColor: 'white',
    borderBottomWidth: 0.6,
    borderBottomColor: 'black',
  },

  messageError: {
    textAlign: 'center',
    color: 'red',
  },

  button: {
    width: '100%',
    height: 60,
    backgroundColor: '#6197EB',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textButton: {
    color: '#FFF',
  },
});

export default styles;
