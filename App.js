/* eslint-disable handle-callback-err */
/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import AllInOneSDKManager from 'paytm_allinone_react-native';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const orderDetails = {
    orderId: 'TESTORDER_1',
    mid: 'gaNogK69117218361177',
    tranxToken: '0b0b2fb76846429ea5c146a5cd2c84a21626407545344',
    amount: '1.00',
    callbackUrl:
      'https://securegw-stage.paytm.in/theia/paytmCallback?ORDER_ID=TESTORDER_1',
    isStaging: true,
    appInvokeRestricted: false,
  };

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const handleTransaction = () => {
    AllInOneSDKManager.startTransaction(
      orderDetails.orderId,
      orderDetails.mid,
      orderDetails.tranxToken,
      orderDetails.amount,
      orderDetails.callbackUrl,
      orderDetails.isStaging,
      orderDetails.appInvokeRestricted,
    )
      .then(result => {
        // updateUI(result);
        // success
        // after successfull payemtn you get result json here
        //   {
        //     "BANKNAME": "ICICI",
        //     "BANKTXNID": "Bank transaction Id",
        //     "CHECKSUMHASH": "Checksum",
        //     "CURRENCY": "INR",
        //     "GATEWAYNAME": "ICICI",
        //     "MID": "Merchant Id",
        //     "ORDERID": "Order Id",
        //     "PAYMENTMODE": "NB",
        //     "RESPCODE": "01",
        //     "RESPMSG": "Txn Success",
        //     "STATUS": "TXN_SUCCESS",
        //     "TXNAMOUNT": "1.00",
        //     "TXNDATE": "2020-07-21 19:00:05.0",
        //     "TXNID": "Transaction Value"
        //  }
      })
      .catch(err => {
        // handleError(err);
        // error
      });
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            <TouchableOpacity onPress={() => handleTransaction()}>
              <Text style={{borderWidth: 1, borderColor: '#000', padding: 10}}>
                Click to start payment
              </Text>
            </TouchableOpacity>
          </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
