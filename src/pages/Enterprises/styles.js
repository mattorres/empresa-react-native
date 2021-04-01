import { StyleSheet } from 'react-native';
import { metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingVertical: 20,
  },

  loadingContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  content: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: metrics.basePadding,
  },

  itemFilter: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    width: 140,
    height: 40,
    borderRadius: 20,
  },

  enterpriseType: {
    paddingVertical: 20,
  },

  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
