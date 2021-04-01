import React, { useEffect, useState } from 'react';

import {
  SafeAreaView,
  ActivityIndicator,
  ScrollView,
  View,
  FlatList,
  TouchableHighlight,
  Text,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Creators as EnterprisesActions } from '../../store/ducks/enterprises/actions';
import EnterpriseItem from './Components/EnterpriseItem';
import styles from './styles';

const Enterprises = ({
  enterprises,
  loading,
  enterpriseTypes,
  enterprisesRequest,
  filterEnterpriseRequest,
  enterpriseDetailRequest,
}) => {
  useEffect(() => {
    enterprisesRequest();
  }, []);

  const filterEnterprise = (id, name = '') => {
    filterEnterpriseRequest(id, name);
  };

  const enterpriseDetail = (id) => {
    enterpriseDetailRequest(id);
  };

  const renderInterpriseTypeItem = ({ item }) => (
    <TouchableHighlight
      onPress={() => filterEnterprise(item.id)}
      style={styles.itemFilter}
    >
      <Text style={{ fontWeight: 'bold' }}>{item.enterprise_type_name}</Text>
    </TouchableHighlight>
  );

  const renderEnterpriseTypes = (data) => (
    <FlatList
      contentContainerStyle={styles.enterpriseType}
      horizontal
      data={data}
      renderItem={(item, index) => renderInterpriseTypeItem(item, index)}
      keyExtractor={(item) => item.id.toString()}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View>
        {renderEnterpriseTypes(enterpriseTypes)}
        {loading ? (
          <View style={styles.loading}>
            <ActivityIndicator />
          </View>
        ) : (
          <ScrollView contentContainerStyle={styles.content}>
            {enterprises.map((enterprise) => (
              <EnterpriseItem
                enterprise={enterprise}
                onPress={() => enterpriseDetail(enterprise.id)}
              />
            ))}
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};

const mapStateToProps = (state) => ({
  enterprises: state.enterprises.enterprises,
  enterpriseTypes: state.enterprises.enterpriseTypes,
  loading: state.enterprises.loading,
  error: state.enterprises.error,
});

const mapDisptachToProps = (dispatch) =>
  bindActionCreators(EnterprisesActions, dispatch);
export default connect(mapStateToProps, mapDisptachToProps)(Enterprises);
