(function main(React, ReactNative, componentState, Button, styles, require) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var react_1 = React;

    var _reactNative = ReactNative;

    var root = this;

    return react_1.createElement(_reactNative.View, { style:styles.containerStyle },

        [react_1.createElement(_reactNative.View, { style:styles.viewStyle},{
            "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl04_field_container"
        }, [react_1.createElement(_reactNative.View, {
            "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl04_Label_container"
        }, [react_1.createElement(_reactNative.Text, {
            "htmlFor": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl04",
            "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl04_Label",
            style : styles.labelMargin
        }, ["New User ID"])]), react_1.createElement(_reactNative.TextInput, {
            "id": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl04",
            "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl04",
            "cssClass": "form-control component-group",
            "fieldCssClass": "",
            style : styles.textInput,
            "bindingMode": "",
            onChangeText: function (val) {
                componentState.setState({ confirmUserId: val })
            },
            "placeHolder": ""
        }, [])]), react_1.createElement(_reactNative.View, {
            "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl02_field_container"
        }, [react_1.createElement(_reactNative.View, {
            "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl02_Label_container"
        }, [react_1.createElement(_reactNative.Text, {
            "htmlFor": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl02",
            "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl02_Label",
            style : styles.labelMargin
        }, ["Confirm User ID"])]), react_1.createElement(_reactNative.TextInput, {
            "id": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl02",
            "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl02",
            "cssClass": "form-control component-group",
             style : styles.textInput,
            "fieldCssClass": "",
            "bindingMode": "",
        }, [])])]),react_1.createElement(Button, {
            "id": "M_layout_content_PCDZ_MNS7LAN_ctl00_btnCancel",
            "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_btnCancel",
            style : styles.loginButton,
        },
        [react_1.createElement(_reactNative.Text, {
            "htmlFor": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl02",
            "key": "M_layout_content_PCDZ_MNS7LAN_ctl00_ctl02_Label",
            style : styles.labelMargin
        }, ["LOGIN"])]
        ["Cancel"])
    
})
