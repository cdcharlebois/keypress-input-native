import { Component, createElement } from "react";
import { TextInput, View, Text } from "react-native";
import { flattenStyles } from "./utils/common";
const defaultStyle = {
    // container: {},
    // label: {},
    input: {}
};
export const KeypressInput = props => {
    const styles = flattenStyles(defaultStyle, props.style);
    const { attr, action } = props;
    const handleChangeText = text => {
        attr.setValue(text);
        if (action && action.canExecute) {
            action.execute();
        }
    };
    return <TextInput style={styles.input} value={attr} onChangeText={handleChangeText} />;
};
KeypressInput.displayName = "KeypressInput";
