// import React, { Component } from 'react';
// import {Text, View , StatusBar,Image , 
//   TouchableOpacity ,Switch , TextInput , ScrollView 
//   , StyleSheet , Button , FlatList, Alert , ToastAndroid , BackHandler ,
//   PermissionsAndroid , ActivityIndicator ,Dimensions, Linking ,RefreshControl
//   , ImageBackground
// } from 'react-native';

// const width = Dimensions.get('window').width;
// const height = Dimensions.get('window').height;

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { 
//        header:'Home',
//        value: true,
//        username:'',
//        refresh: false,
//       data: [1, 2, 3, 4, 5, 6, 7,8,9,10,11,12,13,14,15,16],
//       dataPembayaran: [
//         {
//           namaBarang:'apel',
//           harga:10000
//         },
//         {
//           namaBarang: 'mangga',
//           harga: 15000
//         },
//         {
//           namaBarang: 'jeruk',
//           harga: 20000
//         },
//         {
//           namaBarang: 'anggur',
//           harga: 2002
//         },
//         {
//           namaBarang: 'pisang',
//           harga: 20000
//         },
//       ] 
//      };
//   }
//   backAction = () => {
//     Alert.alert('perhatian','perhatian anda yakin menutup aplikasi', [
//       {
//         text: 'cancel',
//         onPress: () => null,
//         style: 'cancel'
//       },
//       {
//         text: 'yes',
//         onPress: () => BackHandler.exitApp()
//       }
//     ]);

//     return true;
//   }

//   requestCameraPermission = async() => {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.CAMERA,
//         {
//           title:'Izinkan Akses',
//           message: 'ijinkan aplikasi mengakses kamera',
//           buttonNeutral: 'Nanti',
//           buttonNegative:'Cancel',
//           buttonPositive:'OK'
//         }
//       )
//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         console.log('permission diberikan');
//       }else{
//         console.log('permission tidak diberikan');
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   }
//   componentDidMount(){
//     this.backHandler = BackHandler.addEventListener(
//       'hardwareBackPress', 
//       this.backAction
//     );
//   }

//   componentWillUnmount(){
//     this.backHandler.remove();
//   }

//   render() {
//     return (
//       <View style={{ flex:1}}>
//         <StatusBar barStyle='light-content' backgroundColor='#bbdefb' />
//         <View style={style.header}>
//           <Text style={{color:'#ffff',fontWeight:'bold',fontSize:20}}>{this.state.header}</Text>
//         </View>
//         <ActivityIndicator size='small' color='#212121' />
//         <ActivityIndicator size='large' animating={false} color='#212121' />
//         {/* <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', }}
//           onPress={() => 
//           // this.requestCameraPermission()
//             Linking.openURL('https://google.com/')
//            }
//         >
//           <Image source={{
//             uri: 'https://images.unsplash.com/photo-1537402792645-b6d9a3ac3fad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'
//           }
//             // require('./src/img/f1.jpeg')
            
//             }
//             style={style.image}
//             resizeMode="cover"
//           />
//         </TouchableOpacity> */}
//         <TouchableOpacity style={{ flex: 1, }}
//           onPress={() =>
//             // this.requestCameraPermission()
//             // Linking.openURL('https://google.com/')
//             console.log('image background press')
//           }>
//           <ImageBackground source={require('./src/img/f1.jpeg')} style={{ flex: 1, resizeMode: 'cover', justifyContent: 'center', alignItems: 'center' }}>
//             <Text style={{ color: '#ffffff' }}>Hello World</Text>
//           </ImageBackground>  

//           </TouchableOpacity> 
          

//         <FlatList 
//           style={{flex:1,marginTop:20}}
//           data={this.state.dataPembayaran}
//           refreshControl={
//             <RefreshControl refreshing={this.state.refresh} onRefresh={() => 
//             {console.log('reffresh')
//             this.setState({refresh:false})}
//             }/>
//           }
//           renderItem={({ item, index }) => (
//             <TouchableOpacity style={{paddingHorizontal:20,paddingVertical:10,marginHorizontal:27, marginBottom: 10, backgroundColor:'#1e88e5',borderRadius:5}}
//               onPress={() => ToastAndroid.show('anda mengklik ' + item.namaBarang,ToastAndroid.SHORT)}
//             >
//               <Text style={{color:'#ffffff',fontSize:18}}>{item.namaBarang}  </Text>
//               <Text style={{ color: '#ffffff', fontSize: 18 }}>{item.harga}  </Text>
//             </TouchableOpacity>

//           ) }
//           keyExtractor={(item) => item.namaBarang}

//         />

//         {/* <View style={style.switch}>  
//         <Switch value={this.state.value} onValueChange={() => this.setState({value: !this.state.value})}/>
//         </View>
//         <View style={{marginHorizontal:27,marginBottom:5}}> 
//           <Button title='Pressme' color='crimson'
//             onPress={() => console.log('ditekan')}
//           />    
//         </View>
          
//         <TextInput value={this.state.username} style={style.textInput} onChangeText={(value) => this.setState({username:value})}/>


//         <TouchableOpacity style={style.button}>
//             <Text style={{color:'#ffffff',fontWeight:'bold'}}>Click Me </Text>
//         </TouchableOpacity>    

//         <TouchableOpacity style={style.button}>
//           <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>Click Me </Text>
//         </TouchableOpacity>    

//         <TouchableOpacity style={style.button}>
//           <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>Click Me </Text>
//         </TouchableOpacity>    

//         <TouchableOpacity style={style.button}>
//           <Text style={{ color: '#ffffff', fontWeight: 'bold' }}>Click Me </Text>
//         </TouchableOpacity>     */}

//       </View> 
//     );
//   }
// }
// const style = StyleSheet.create({
//   button :{
//     backgroundColor: '#1e88e5',
//     paddingVertical: 20,
//     alignItems: 'center',
//     marginTop: 20,
//     marginHorizontal: 28,
//     borderRadius: 10
//     , elevation: 3
//   },
//   textInput:{
//     borderWidth: 1,
//     marginHorizontal: 27,
//     backgroundColor: '#1e88e5',
//     color: '#ffffff',
//     paddingHorizontal: 10,
//     borderColor: '#1e88e5'
//   },
//   switch:{
//     justifyContent: 'center', alignItems: 'center', marginTop: 20
//   },
//   image:{
//     width: width, height: height/5
//   },
//   header:{
//     backgroundColor: '#1e88e5',
//     paddingVertical: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//     elevation: 5,
//   }
// })

// export default App;

import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screen/Home';
import Details from './src/screen/Details';
import SplashScreen from './src/screen/SplashScreen';

const Stack = createStackNavigator()

function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{headerShown:false}}>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Details' component={Details} />
        <Stack.Screen name='SplashScreen' component={SplashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;