import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { navigationRef } from './services/navigation';

import Sign from './pages/Sign';
import Enterprises from './pages/Enterprises';

import Button from './components/Button';
import EnterpriseDetail from './pages/EnterpriseDetail';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Sign}
        />
        <Stack.Screen
          options={{
            headerLeft: (props) => <Button {...props} icon="sign-out" />,
            headerRight: () => <Button icon="filter" />,
          }}
          name="Enterprises"
          component={Enterprises}
        />

        <Stack.Screen
          name="EnterpriseDetail"
          options={{
            headerShown: false,
          }}
          component={EnterpriseDetail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
