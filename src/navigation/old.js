import React from 'react';
import { Image, View, Text, Button, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json

class LogoTitle extends React.Component {
    render() {
      return (
        <TouchableOpacity onPress={() => alert('This is a button!')}>
            <Image
            source={require('../imgs/options.png')}
            style={{ width: 20, height: 20, marginRight: 10 }}
            />
        </TouchableOpacity>
      );
    }
}

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Home',
    };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Column"
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Column' })
              ],
            }))
          }}
        />
      </View>
    );
  }  
}

class ColumnScreen extends React.Component {
    static navigationOptions = {
        title: 'Detail',
        headerRight: (
          <LogoTitle />
        ),
    };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Column Screen</Text>
        <Button
          title="Go to Column... again"
          onPress={() => this.props.navigation.push('Column')}
        />
        <Button
          title="Go to Home"
          onPress={() => 
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Home' })
              ],
            }))}
        />
        <Button
          title="返回上一层"
          onPress={() => this.props.navigation.goBack()}
        />
        <Button
          title="返回顶层"
          onPress={() => this.props.navigation.popToTop()}
        />
      </View>
    );
  }  
}
class MessageScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Column Screen</Text>
        <Button
          title="Go to Column... again"
          onPress={() => this.props.navigation.push('Column')}
        />
      </View>
    );
  }  
}
class MeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Column Screen</Text>
        <Button
          title="Go to Column... again"
          onPress={() => this.props.navigation.push('Column')}
        />
      </View>
    );
  }  
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Column: {
    screen: ColumnScreen,
  },
  Message: {
    screen: MessageScreen,
  },
  Me: {
    screen: MeScreen,
  },
}, {
    initialRouteName: 'Home',
});

export default createAppContainer(AppNavigator);