import { NativeEventEmitter, NativeModules } from 'react-native'

const AdyenDropIn = NativeModules.AdyenDropInPayment || NativeModules.AdyenDropInPayment
const events = new NativeEventEmitter(AdyenDropIn)
let onPaymentProvideListener
let onPaymentResultListener
let onPaymentFailListener
let onPaymentSubmitListener

export default {
    /**
     * Starting payment process.
     * @returns {*}
     */
    initPaymentConfig(publicKey) {
        return AdyenDropIn.initPaymentConfig(publicKey)
    },
    /**
     * list paymentMethods
     *
     * @param {String} encodedToken
     *
     * @returns {*}
     */
    paymentMethods(paymentMethodJson) {
        this._validateParam(paymentMethodJson, 'initPaymentMethods', 'string')
        return AdyenDropIn.paymentMethods(paymentMethodJson)
    },
    /**
     * handle Action from payments
     * @param actionJson
     * @returns {*}
     */
    handleAction(actionJson) {
        this._validateParam(actionJson, 'handleAction', 'string')
        return AdyenDropIn.handleAction(actionJson)
    },

    encryptCard(cardData, publicKey) {
        return AdyenDropIn.encryptCard(cardData, publicKey)
    },
    /**
     * @callback mOnRequestPaymentSession
     * @param {String} token
     * @param {String} returnUrl
     */
    /**
     * Native event. Calling when CheckoutController calls delegate in the native call.
     * It calling with token and returnUrl (can be empty, no worries)
     * @param {mOnRequestPaymentSession} mOnRequestPaymentSession
     */
    onPaymentProvide(mOnPaymentProvide) {
        this._validateParam(
            mOnPaymentProvide,
            'onPaymentProvide',
            'function'
        )
        onPaymentProvideListener = events.addListener(
            'onPaymentProvide',
            response => {
                mOnPaymentProvide(response['token'], response['returnUrl'])
            }
        )
    },
    /**
     * @callback mOnError
     * @param {Number} code
     * @param {String} message
     */
    /**
     * If payment was cancelled or something else. Calling instead of onPaymentResult event.
     * @param {mOnError} mOnError
     */
    onPaymentFail(mOnPaymentFail) {
        this._validateParam(mOnPaymentFail, 'onPaymentFail', 'function')
        onPaymentFailListener = events.addListener('onPaymentFail', response => {
            mOnPaymentFail(response['code'], response['message'])
        })
    },
    /**
     * @callback mOnSelectPaymentMethod
     * @param {Array<>} preferred
     * @param {Array<>} other
     * @param {number} count
     */
    /**
     * //TODO custom integration
     * @param {mOnSelectPaymentMethod} mOnSelectPaymentMethod
     */
    onPaymentSubmit(mOnPaymentSubmit) {
        this._validateParam(
            mOnPaymentSubmit,
            'onPaymentSubmit',
            'function'
        )
        onPaymentSubmitListener = events.addListener(
            'onPaymentSubmitListener;',
            response => {
                mOnPaymentSubmit(
                    response
                )
            }
        )
    },
    /**
     * @param {*} param
     * @param {String} methodName
     * @param {String} requiredType
     * @private
     */
    _validateParam(param, methodName, requiredType) {
        if (typeof param !== requiredType) {
            throw new Error(
                `Error: AdyenDropIn.${methodName}() requires a ${
                    requiredType === 'function' ? 'callback function' : requiredType
                    } but got a ${typeof param}`
            )
        }
    },
    events,
    removeListeners() {
        if (onPaymentProvideListener)
            onPaymentProvideListener.remove()
        if (onPaymentResultListener) onPaymentResultListener.remove()
        if (onPaymentFailListener) onPaymentFailListener.remove()
        if (onPaymentSubmitListener)
            onPaymentSubmitListener.remove()
    },
}
