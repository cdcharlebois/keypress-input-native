import { Component, createElement, useRef } from "react";
import { TextInput, View, Text } from "react-native";
import { flattenStyles } from "./utils/common";
const defaultStyle = {
    // container: {},
    // label: {},
    input: {}
};
export const KeypressInput = props => {
    const pendingRun = useRef(false);
    const styles = flattenStyles(defaultStyle, props.style);
    const { attr, action } = props;
    const handleChangeText = text => {
        attr.setValue(text);
        if (pendingRun.current === false) {
            pendingRun.current = true;
            setTimeout(() => {
                pendingRun.current = false;
                if (action && action.canExecute) {
                    action.execute();
                }
            }, props.interval);
        }
    };
    return <TextInput style={styles.input} value={attr} onChangeText={handleChangeText} />;
};
KeypressInput.displayName = "KeypressInput";
