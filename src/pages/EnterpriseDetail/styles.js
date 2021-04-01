import { StyleSheet } from 'react-native';
import { metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 440,
  },

  buttonBack: {
    marginTop: 70,
    marginLeft: 30,
  },

  content: {
    margin: 20,
    padding: 20,
    borderRadius: 20,
    marginVertical: metrics.baseMargin,
    flex: 1,
    borderWidth: 0.6,
    borderColor: 'rgba(158, 150, 150, .5)',
  },

  title: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  textTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 10,
  },

  contentDescription: {
    marginTop: 20,
    paddingBottom: 120,
  },
});

export default styles;
