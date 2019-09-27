//
//  AdyenDropInPayment.m
//  ReactNativeAdyenDropin
//
//  Created by 罗立树 on 2019/9/27.
//  Copyright © 2019 Facebook. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

@interface RCT_EXTERN_MODULE(AdyenDropInPayment, NSObject)

RCT_EXTERN_METHOD(initPaymentConfig:(NSString)publicKey env:(NSString *) env)
RCT_EXTERN_METHOD(paymentMethods:(NSString)paymentMethodsJson)
RCT_EXTERN_METHOD(handleDropInAction:(NSString)actionJson)
//.redirect: Use the Redirect Component or handle the redirect on your own.
RCT_EXTERN_METHOD(handleRedirectAction:(NSString)actionJson)
//.threeDS2Fingerprint: Use the 3D Secure 2 Component to perform 3D Secure 2 device fingerprinting.
RCT_EXTERN_METHOD(handleThreeDS2FingerprintAction:(NSString)actionJson)
//.threeDS2Challenge: Use 3D Secure 2 Component to present a challenge to your shopper.
RCT_EXTERN_METHOD(handleThreeDS2ChallengeAction:(NSString)actionJson)
RCT_EXTERN_METHOD(encryptCard:(NSDictionary *)cardData publicKey:(NSString *) publicKey resolver:(RCTPromiseResolveBlock)resolve
                  rejecter:(RCTPromiseRejectBlock)reject)
@end
