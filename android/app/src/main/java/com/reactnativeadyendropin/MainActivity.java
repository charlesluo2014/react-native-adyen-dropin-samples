package com.reactnativeadyendropin;

import android.content.Intent;
import android.widget.Toast;

import com.adyen.checkout.core.log.Logger;
import com.adyen.checkout.dropin.DropIn;
import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

    /**
     * Returns the name of the main component registered from JavaScript. This is used to schedule
     * rendering of the component.
     */
    @Override
    protected String getMainComponentName() {
        return "ReactNativeAdyenDropin";
    }

    @Override
    public void onNewIntent(Intent intent) {
        super.onNewIntent(intent);
        if (intent.hasExtra(DropIn.RESULT_KEY) == true) {
            Toast.makeText(this, intent.getStringExtra(DropIn.RESULT_KEY), Toast.LENGTH_SHORT).show();
        }
    }
}
