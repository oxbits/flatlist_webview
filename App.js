import * as React from 'react';
import { Button, SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { Platform } from 'react-native';
import { WebView as RNWebView } from 'react-native-webview';
import WWebView from 'WebView';

import Constants from 'expo-constants';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    url: 'http://berniereport.com/olga.html',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f64',
    title: 'Second Item',
    url: 'http://berniereport.com/olga.html',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    url: 'http://berniereport.com/olga.html',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bb',
    title: 'First Item',
    url: 'http://berniereport.com/olga.html',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f64',
    title: 'Second Item',
    url: 'http://berniereport.com/olga.html',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d77',
    title: 'Third Item',
    url: 'http://berniereport.com/olga.html',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bc',
    title: 'First Item',
    url: 'http://berniereport.com/olga.html',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f64',
    title: 'Second Item',
    url: 'http://berniereport.com/olga.html',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d76',
    title: 'Third Item',
    url: 'http://berniereport.com/olga.html',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bd',
    title: 'First Item',
    url: 'http://berniereport.com/olga.html',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f64',
    title: 'Second Item',
    url: 'http://berniereport.com/olga.html',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d75',
    title: 'Third Item',
    url: 'http://berniereport.com/olga.html',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28be',
    title: 'First Item',
    url: 'http://berniereport.com/olga.html',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f64',
    title: 'Second Item',
    url: 'http://berniereport.com/olga.html',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d74',
    title: 'Third Item',
    url: 'http://berniereport.com/olga.html',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bf',
    title: 'First Item',
    url: 'http://berniereport.com/olga.html',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f64',
    title: 'Second Item',
    url: 'http://berniereport.com/olga.html',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d73',
    title: 'Third Item',
    url: 'http://berniereport.com/olga.html',
  },
];


const WebView = Platform.OS === 'web' ? WWebView : RNWebView;

class HomeScreen extends React.Component {
  render() {
    return (

      <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => 
        <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details', {
            url: item.url,
          })}
        />
    </View>
        }
        keyExtractor={item => item.id}
      />
    </SafeAreaView>

    );
  }
}

class DetailsScreen extends React.Component {


  render() {
    const { navigation } = this.props;
    return (

      <WebView
        source={{uri: navigation.getParam('url', 'http://example.com')}} 
      />

      // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      //   <Text>Details Screen</Text>
      // </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

//////////////////////////////////////////////////////////////

// import React from 'react';
// import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';
// import Constants from 'expo-constants';

// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'First Item',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Second Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Third Item',
//   },
// ];

// function Item({ title }) {
//   return (
//     <View style={styles.item}>
//       <Text style={styles.title}>{title}</Text>
//     </View>
//   );
// }

// export default function App() {
//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={DATA}
//         renderItem={({ item }) => <Item title={item.title} />}
//         keyExtractor={item => item.id}
//       />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop: Constants.statusBarHeight,
//   },
//   item: {
//     backgroundColor: '#f9c2ff',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 32,
//   },
// });


/////////////////////////////////////////


// import React from 'react';
// import { Platform } from 'react-native';
// import { WebView as RNWebView } from 'react-native-webview';
// import WWebView from 'WebView';

// const WebView = Platform.OS === 'web' ? WWebView : RNWebView;

// export default function App() {
//   return (

//     <WebView
//         source={{uri: 'https://example.com'}}
//       />

//   );
// }

/////////////////////////////////////////////

// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
