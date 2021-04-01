import { StyleSheet } from 'react-native';
import { metrics } from '../../../../styles';

const styles = StyleSheet.create({
  container: {
    height: 320,
    width: 180,
    borderRadius: 20,
    marginVertical: metrics.baseMargin,
    borderWidth: 0.3,
    borderColor: 'rgba(158, 150, 150, .5)',
  },

  image: {
    width: '100%',
    height: 100,
    borderTopEndRadius: 20,
    borderTopLeftRadius: 20,
  },

  textName: {
    fontWeight: 'bold',
  },

  contentText: {
    padding: metrics.basePadding - 5,
    justifyContent: 'space-between',
    flex: 1,
  },

  redeSocial: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    marginHorizontal: 6,
  },

  iconFacebook: {
    color: '#1877f2',
  },

  iconTwitter: {
    color: 'rgb(29, 161, 242);',
  },

  iconLinkedim: {
    color: '#2977c9',
  },
});

export default styles;
