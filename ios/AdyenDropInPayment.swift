//
//  AdyenDropInPayment.swift
//  ReactNativeAdyenDropin
//
//  Created by 罗立树 on 2019/9/27.
//  Copyright © 2019 Facebook. All rights reserved.
//

import Foundation
import Adyen
import SafariServices

@objc(AdyenDropInPayment)
class AdyenDropInPayment: RCTEventEmitter {
  var dropInComponent:DropInComponent?
  var cardComponent:CardComponent?
  var threeDS2Component:ThreeDS2Component?
  var publicKey:String?
  var env:Environment?
  var configuration: DropInComponent.PaymentMethodsConfiguration?
  override func supportedEvents() -> [String]! {
    return [
      "onPaymentFail",
      "onPaymentProvide",
      "onPaymentSubmit"
    ]
  }
}
extension AdyenDropInPayment: DropInComponentDelegate {
  @objc func initPaymentConfig(_ publicKey: String,env:String) {
    self.configuration = DropInComponent.PaymentMethodsConfiguration()
    self.configuration?.card.publicKey = publicKey
    self.publicKey = publicKey
    switch env {
    case "live":
      self.env = .live
      break;
    default:
      self.env = .test
      break;
    }
    
  }
  @objc func paymentMethods(_ paymentMethodsJson: String) {
    let jsonData: Data? = paymentMethodsJson.data(using: String.Encoding.utf8) ?? Data()
    let paymentMethods:PaymentMethods? = try? JSONDecoder().decode(PaymentMethods.self, from: jsonData!)
    let dropInComponent = DropInComponent(paymentMethods: paymentMethods!,
                                          paymentMethodsConfiguration: self.configuration!)
    self.dropInComponent = dropInComponent
    dropInComponent.delegate = self
    dropInComponent.environment = self.env!
    UIApplication.shared.keyWindow?.rootViewController?.present(dropInComponent.viewController, animated: true)
  }
  
  
  func didSubmit(_ data: PaymentComponentData, from component: DropInComponent){
    self.sendEvent(
         withName: "onPaymentSubmit",
         body: [
          "isDropIn":component._isDropIn,
          "env":component.environment,
           "data": data
         ]
       )
  }
  
  /// Invoked when additional details have been provided for a payment method.
  ///
  /// - Parameters:
  ///   - data: The additional data supplied by the drop in component..
  ///   - component: The drop in component from which the additional details were provided.
  func didProvide(_ data: ActionComponentData, from component: DropInComponent){
    self.sendEvent(
            withName: "onPaymentProvide",
            body: [
              "isDropIn":component._isDropIn,
              "env":component.environment,
              "data": data
            ]
          )
  }
  
  /// Invoked when the drop in component failed with an error.
  ///
  /// - Parameters:
  ///   - error: The error that occurred.
  ///   - component: The drop in component that failed.
  func didFail(with error: Error, from component: DropInComponent){
    self.sendEvent(
      withName: "onPaymentFail",
      body: [
        "isDropIn":component._isDropIn,
        "env":component.environment,
        "error": error
      ]
    )
  }
}

extension AdyenDropInPayment: PaymentComponentDelegate{
  func getCardPaymentMethod(_ paymentMethods:PaymentMethods)-> CardPaymentMethod{
    return paymentMethods.stored[0] as! CardPaymentMethod;
  }
  @objc func cardPaymentMethod(_ paymentMethodsJson: String) {
    let jsonData: Data? = paymentMethodsJson.data(using: String.Encoding.utf8) ?? Data()
    let paymentMethods:PaymentMethods? = try? JSONDecoder().decode(PaymentMethods.self, from: jsonData!)
    let cardPaymentMethod:CardPaymentMethod? = self.getCardPaymentMethod(paymentMethods!)
    let cardComponent = CardComponent(paymentMethod:cardPaymentMethod!,
                                      publicKey: self.publicKey!)
    // Replace CardComponent with the payment method Component that you want to add.
    // Check specific payment method pages to confirm if you need to configure additional required parameters.
    // For example, to enable the Card form, you need to provide your Client Encryption Public Key.
    cardComponent.delegate = self
    cardComponent.environment = self.env!
    // When you're ready to go live, change this to .live
    // or to other environment values described in https://adyen.github.io/adyen-ios/Docs/Structs/Environment.html
    UIApplication.shared.keyWindow?.rootViewController?.present(cardComponent.viewController, animated: true)
  }
  /// Invoked when the payment component finishes, typically by a user submitting their payment details.
     ///
     /// - Parameters:
     ///   - data: The data supplied by the payment component.
     ///   - component: The payment component from which the payment details were submitted.
  func didSubmit(_ data: PaymentComponentData, from component: PaymentComponent){
    self.sendEvent(
      withName: "onPaymentSubmit",
      body: [
        "isDropIn":component._isDropIn,
        "env":component.environment,
        "data": data
      ]
    )
  }
     
     /// Invoked when the payment component fails.
     ///
     /// - Parameters:
     ///   - error: The error that occurred.
     ///   - component: The payment component that failed.
  func didFail(with error: Error, from component: PaymentComponent){
    self.sendEvent(
      withName: "onPaymentFail",
      body: [
        "isDropIn":component._isDropIn,
        "env":component.environment,
        "error": error
      ]
    )
  }
}


extension AdyenDropInPayment: ActionComponentDelegate{
  
  
  
  @objc func handleDropInAction(_ actionJson: String) {
    let actionData: Data? = actionJson.data(using: String.Encoding.utf8) ?? Data()
    let action = try? JSONDecoder().decode(Action.self, from: actionData!)
    dropInComponent?.handle(action!)
  }
  @objc func handleRedirectAction(_ actionJson: String) {
    let actionData: Data? = actionJson.data(using: String.Encoding.utf8) ?? Data()
    let redirectAction = try? JSONDecoder().decode(Action.self, from: actionData!)
    let redirectComponent:RedirectComponent = RedirectComponent(action: redirectAction as! RedirectAction)
    redirectComponent.delegate = self
  }
  @objc func handleThreeDS2FingerprintAction(_ actionJson: String) {
    let actionData: Data? = actionJson.data(using: String.Encoding.utf8) ?? Data()
    let action = try? JSONDecoder().decode(Action.self, from: actionData!)
    if(self.threeDS2Component == nil){
      let threeDS2Component = ThreeDS2Component()
      threeDS2Component.delegate = self
      self.threeDS2Component = threeDS2Component
    }
    self.threeDS2Component!.handle(action as! ThreeDS2FingerprintAction)
  }
  @objc func handleThreeDS2ChallengeAction(_ actionJson: String) {
    let actionData: Data? = actionJson.data(using: String.Encoding.utf8) ?? Data()
    let action = try? JSONDecoder().decode(Action.self, from: actionData!)
    if(self.threeDS2Component == nil){
      let threeDS2Component = ThreeDS2Component()
      threeDS2Component.delegate = self
      self.threeDS2Component = threeDS2Component
    }
    self.threeDS2Component!.handle(action as! ThreeDS2FingerprintAction)
  }
  /// Invoked when the action component finishes
  /// and provides the delegate with the data that was retrieved.
  ///
  /// - Parameters:
  ///   - data: The data supplied by the action component.
  ///   - component: The component that handled the action.
  func didProvide(_ data: ActionComponentData, from component: ActionComponent){
     self.sendEvent(
       withName: "onPaymentProvide",
       body: [
         "isDropIn":component._isDropIn,
         "env":component.environment,
         "data": data
       ]
     )
  }
  
  /// Invoked when the action component fails.
  ///
  /// - Parameters:
  ///   - error: The error that occurred.
  ///   - component: The component that failed.
  func didFail(with error: Error, from component: ActionComponent){
    self.sendEvent(
      withName: "onPaymentFail",
      body: [
        "isDropIn":component._isDropIn,
        "env":component.environment,
        "error": error
      ]
    )
  }
}
