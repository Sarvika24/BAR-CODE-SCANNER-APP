import React from 'react';
import { Text, View ,Image} from 'react-native';

export default class Searchscreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
   <Text>Hey there ! Thank you for choosing our stationary shop and this application. Due to the corona period it is not considered safe for our dear customers to come and buy stationary, and that's why you can simply buy and pay for whatever stationary item you are looking for. 1st scan the QR code that we provide with every stationary item on our other app. Once done the link will be visibleof the QR CODE and you will be directly able to pay for the item and the item shall recieve to your house within one day. If things do not move smoothly we shall refund your money and you will recieve a free stationery gift pack as an apology from you. Refer to the chart given below for furthur details and clarity : </Text>
   <Image
                source={require("../assets/howto.png")}
                style={{width:600, height: 400 , alignSelf  : 'center' ,}  }/>
                <Image
                source={require("../assets/image1.png")}
                style={{width:100, height: 100 , alignSelf  : 'center' ,}  }/>
        </View>
      );
    }
  }