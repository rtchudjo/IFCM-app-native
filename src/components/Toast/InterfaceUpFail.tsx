
import * as React from 'react';
    import * as ReactNative from "react-native";
    import {TextStyle,StyleProp,ViewStyle} from "react-native";

export interface ToastOptions {
    containerStyle?:StyleProp<ViewStyle>
    duration?:1500
    visible?: boolean,
    position?: 200,
    animation?:true,
    shadow?: true,
    backgroundColor: "white",
    opacity?:  0.75,
    shadowColor?:  "grey",
    textColor?: "Orange",
    textStyle?: StyleProp<TextStyle>,
    delay?: 150,
    keyboardAvoiding?: true,
    hideOnPress?: true,
    onHide?: Function,
    onHidden?: Function,
    onShow?: Function,
    onShown?: Function,
    onPress?: Function,
    accessible?: boolean,
    accessibilityLabel?: string,
    accessibilityHint?: string,
    accessibilityRole?: string
}


