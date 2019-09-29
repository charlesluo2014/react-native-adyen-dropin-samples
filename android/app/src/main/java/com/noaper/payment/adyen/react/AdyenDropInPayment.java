package com.noaper.payment.adyen.react;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;

public class AdyenDropInPayment extends ReactContextBaseJavaModule {
    public AdyenDropInPayment(@NonNull ReactApplicationContext reactContext) {
        super(reactContext);
    }



    @NonNull
    @Override
    public String getName() {
        return AdyenDropInPayment.class.getSimpleName();
    }
}
