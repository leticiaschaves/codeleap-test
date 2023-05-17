import React from 'react';
import { useSelector } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Feed from '../screens/feed';
import Signup from '../screens/signup';
import { RootState, StackParamList } from '../types';

const Stack = createNativeStackNavigator<StackParamList>();

export default function Router() {
  const username: string = useSelector(
    (state: RootState) => state.user.username,
  );

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Signup"
      >
        {username ? (
          <Stack.Screen name="Feed" component={Feed} />
        ) : (
          <Stack.Screen name="Signup" component={Signup} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
