import React from "react";
import { Text, StyleSheet } from "react-native";

function index({ type = "m", text, textStyle, ...rest }) {
  return (
    <Text allowFontScaling={false} {...rest} style={[styles[type], textStyle]}>
      {text}
    </Text>
  );
}

export default index;

const styles = StyleSheet.create({
  heading1: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: "400",
    fontFamily: "NotoSans-ExtraBoldItalic",
  },
  heading2: { fontSize: 16, lineHeight: 24, fontWeight: "400" },
  heading3: { fontSize: 28, lineHeight: 36, fontWeight: "500" },
  heading4: { fontSize: 24, lineHeight: 32, fontWeight: "500" },
  heading5: { fontSize: 20, lineHeight: 28, fontWeight: "600" },
  heading6: { fontSize: 18, lineHeight: 26, fontWeight: "600" },
  subTitle1: { fontSize: 16, lineHeight: 24, fontWeight: "400" },
  subTitle2: { fontSize: 14, lineHeight: 20, fontWeight: "500" },
  subTitle3: { fontSize: 14, lineHeight: 20, fontWeight: "600" },
  subTitle4: { fontSize: 12, lineHeight: 16, fontWeight: "600" },
  button1: { fontSize: 16, lineHeight: 24, fontWeight: "500" },
  button2: { fontSize: 14, lineHeight: 24, fontWeight: "500" },
  linkButton: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "500",
    textDecorationLine: "underline",
  },
  body1: { fontSize: 16, lineHeight: 24, fontWeight: "400" },
  body2: { fontSize: 14, lineHeight: 20, fontWeight: "400" },
  body3: { fontSize: 12, lineHeight: 16, fontWeight: "500" },
  body4: { fontSize: 10, lineHeight: 16, fontWeight: "600" },
});
