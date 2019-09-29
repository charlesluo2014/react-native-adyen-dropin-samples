import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
} from 'react-native';
import Colors from 'react-native/Libraries/NewAppScreen/components/Colors';
import SDK from '../../api/sdk';
import AdyenDropIn from '../../AdyenDropin';

export default class DropinSampple extends React.Component {
    constructor(props){
        super(props)
        let publicKey =
            '10001|96329098A37A40C4466AED4DBD23E0393E5398A75F5E006E1B59772162C9E52BFCDFFE80CE895C522234E49BC88F4FD1C1237CAD1F8582DF6F16EA5ED85EA471CAD12E8BE101B8FD47FB74E9DAC9078412D1800D55760041A6EDFD9D1AC359C831F9EAFF7146C4037535061DE73789B337C3C585448EFFC7389FDF08A19A6E7AC6D187A0B7E4FA5CD4A38253BA00F1BCC257E2CE372407807BEB33FC307329F85B3350749708D1431EFDD5BE5752ED6F7C8417F92B3F237FD506C5CAA789ACED8D4F89FF4F9136CA72068B82F541F11F6870770E02B20AB1F3C979A66FA78B680B1FDB3C2C03C24C0F3A80D671D56FC0B9FBE53AFCA338080C6F36452E14345F'
        AdyenDropIn.configPayment(publicKey,"test")
        AdyenDropIn.onPaymentSubmit(this.onPaymentSubmit)
        AdyenDropIn.onPaymentFail(this.onPaymentFail)
        AdyenDropIn.onPaymentProvide(this.onPaymentProvide)
    }


    onPaymentSubmit=(e)=>{
        console.log('onPaymentSubmit=====================',e)
        let options={
            currency:"EUR",
            amount:200,
            country:"BE",
            reference:"test"+new Date().getTime(),
            enableOneClick:true,
            enableRecurring:true,
            appPlatform:Platform.OS === 'ios' ? 'IOS' : 'ANDROID',
            ...e.data
        }

        options.paymentMethod.recurringDetailReference=options.paymentMethod.storedPaymentMethodId
        SDK.pay_adyen_checkout_payments(options).then(res=>{
            if(!res.action){
                alert("resultCode="+res.resultCode)
                return;
            }

            console.log("action=====================",res.action)
            //AdyenDropIn.handleDropInAction(res.action)
            console.log("res=====================",res)
        }).catch(e=>{
            console.log("error=====================",e)
        })

    }
    onPaymentFail=(e)=>{
        console.log('onPaymentFail=====================',e)
    }
    onPaymentProvide=(e)=>{
        console.log('onPaymentProvide=====================',e)
    }
    addCard = () => {
        alert('hello addCard');
    };
    selectPaymentMethods = () => {
        SDK.pay_adyen_checkout_payment_methods({
            currency:"EUR",
            amount:3,
            appPlatform:Platform.OS === 'ios' ? 'IOS' : 'ANDROID',
        }).then(res => {
           console.log('res==================',res)
            /// Indicates the shopper is present during the payment.
        // case shopperPresent = "Ecommerce"
        //
        //     /// Indicates the shopper is not present during the payment.
        // case shopperNotPresent = "ContAuth"
            res=JSON.stringify(res).replace("ContAuth","Ecommerce")
            AdyenDropIn.paymentMethods(res)
        }).catch(res=>{
            console.log('res=========error=========',res)
        });
    };
    cardPaymentMethod = () => {
        SDK.pay_adyen_checkout_payment_methods({
            currency:"EUR",
            amount:3,
            appPlatform:"IOS"
        }).then(res => {
            console.log('res==================',res)
            /// Indicates the shopper is present during the payment.
            // case shopperPresent = "Ecommerce"
            //
            //     /// Indicates the shopper is not present during the payment.
            // case shopperNotPresent = "ContAuth"
            res=JSON.stringify(res).replace("ContAuth","Ecommerce")
            AdyenDropIn.cardPaymentMethod(res,null,false,false)
        }).catch(res=>{
            console.log('res=========error=========',res)
        });
    };
    cardPaymentMethod3D = () => {
        SDK.pay_adyen_checkout_payment_methods({
            currency:"EUR",
            amount:3,
            appPlatform:"IOS"
        }).then(res => {
            console.log('res==================',res)
            /// Indicates the shopper is present during the payment.
            // case shopperPresent = "Ecommerce"
            //
            //     /// Indicates the shopper is not present during the payment.
            // case shopperNotPresent = "ContAuth"
            res=JSON.stringify(res).replace("ContAuth","Ecommerce")
            AdyenDropIn.cardPaymentMethod(res,null,false,false)
        }).catch(res=>{
            console.log('res=========error=========',res)
        });
    };
    storedCardPaymentMethod = () => {
        SDK.pay_adyen_checkout_payment_methods({
            currency:"EUR",
            amount:3,
            appPlatform:"IOS"
        }).then(res => {
            console.log('res==================',res)
            /// Indicates the shopper is present during the payment.
            // case shopperPresent = "Ecommerce"
            //
            //     /// Indicates the shopper is not present during the payment.
            // case shopperNotPresent = "ContAuth"
            res=JSON.stringify(res).replace("ContAuth","Ecommerce")
            AdyenDropIn.storedCardPaymentMethod(res)
        }).catch(res=>{
            console.log('res=========error=========',res)
        });
    };



    render() {
        return (
            <>
                <SafeAreaView style={styles.container}>
                    <Text onPress={this.addCard} style={styles.button}>Dropin payment add Card</Text>
                    <Text onPress={this.selectPaymentMethods} style={styles.button}>Dropin payment select Methods</Text>
                    <Text onPress={this.storedCardPaymentMethod} style={styles.button}>payment by stored card</Text>
                    <Text onPress={this.cardPaymentMethod} style={styles.button}>payment by card</Text>
                    <Text onPress={this.cardPaymentMethod3} style={styles.button}>payment by card 3D</Text>
                </SafeAreaView>
            </>);
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: Colors.lighter,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        paddingBottom: 32,
    },
});
