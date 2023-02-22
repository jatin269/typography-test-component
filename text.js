import React from "react";
import { Text, StyleSheet } from "react-native";

let defaultSize = "400";
let fontWeights = {
  fontSansRegular: defaultSize,
  fontSansMedium: +defaultSize + 100 + "",
  fontSansSemibold: +defaultSize + 200 + "",
  fontSansBold: +defaultSize + 300 + "",
};
let fontSize = {
  fs10: 10,
  fs12: 12,
  fs14: 14,
  fs16: 16,
  fs18: 18,
  fs20: 20,
  fs24: 24,
  fs28: 28,
  fs32: 32,
};

let letterSpacing = {
  ls16: 16,
  ls20: 20,
  ls24: 24,
  ls28: 28,
  ls32: 32,
  ls36: 36,
  ls40: 40,
};

let defaultFontFamily = "NotoSans-Regular";

export default function index({
  type = "body",
  typeVariant = "m12",
  text,
  textStyle,
  langFontFamily = defaultFontFamily,
  ...restProps
}) {
  return (
    <Text
      allowFontScaling={false}
      {...restProps}
      style={[
        styles[type][typeVariant],
        textStyle,
        { fontFamily: langFontFamily },
      ]}
    >
      {text}
    </Text>
  );
}
const styles = StyleSheet.create({
  body: {
    m12: {
      fontFamily: fontSans,
      fontWeight: fontWeights.fontSansMedium,
      lineHeight: letterSpacing.ls16,
      fontSize: fontSize.fs12,
    },
    r14: {
      fontFamily: fontSans,
      fontWeight: fontWeights.fontSansRegular,
      lineHeight: letterSpacing.ls20,
      fontSize: fontSize.fs14,
    },
    r16: {
      fontFamily: fontSans,
      fontWeight: fontWeights.fontSansRegular,
      lineHeight: letterSpacing.ls24,
      fontSize: fontSize.fs16,
    },
  },
  Button: {
    link: {
      fontFamily: fontSans,
      fontWeight: fontWeights.fontSansMedium,

      lineHeight: letterSpacing.ls24,
      fontSize: fontSize.fs14,
      textDecorationLine: "underline",
    },
    small: {
      fontFamily: fontSans,
      fontWeight: fontWeights.fontSansMedium,
      lineHeight: letterSpacing.ls16,
      fontSize: fontSize.fs12,
    },
    large: {
      fontFamily: fontSans,
      fontWeight: fontWeights.fontSansMedium,
      lineHeight: letterSpacing.ls20,
      fontSize: fontSize.fs14,
    },
  },
  Subheading: {
    sb14: {
      fontFamily: fontSans,
      fontWeight: fontWeights.fontSansMedium,
      lineHeight: letterSpacing.ls20,
      fontSize: fontSize.fs14,
    },
    m14: {
      fontFamily: fontSans,
      fontWeight: fontWeights.fontSansMedium,
      lineHeight: letterSpacing.ls20,
      fontSize: fontSize.fs14,
    },
    r16: {
      fontFamily: fontSans,
      fontWeight: fontWeights.fontSansRegular,
      lineHeight: letterSpacing.ls24,
      fontSize: fontSize.fs16,
    },
    sb12: {
      fontFamily: fontSans,
      fontWeight: fontWeights.fontSansSemibold,
      lineHeight: letterSpacing.ls16,
      fontSize: fontSize.fs12,
    },
  },
  heading: {
    sb16: {
      fontFamily: fontSans,
      fontWeight: fontWeights.fontSansSemibold,
      lineHeight: letterSpacing.ls24,
      fontSize: fontSize.fs16,
    },
    sb18: {
      fontFamily: fontSans,
      fontWeight: fontWeights.fontSansSemibold,
      lineHeight: letterSpacing.ls24,
      fontSize: fontSize.fs18,
    },
    m20: {
      fontFamily: fontSans,
      fontWeight: fontWeights.fontSansMedium,
      lineHeight: letterSpacing.ls28,
      fontSize: fontSize.fs20,
    },
    m24: {
      fontFamily: fontSans,
      fontWeight: fontWeights.fontSansMedium,
      lineHeight: letterSpacing.ls32,
      fontSize: fontSize.fs24,
    },
    r28: {
      fontFamily: fontSans,
      fontWeight: fontWeights.fontSansRegular,
      lineHeight: letterSpacing.ls36,
      fontSize: fontSize.fs28,
    },
    r32: {
      fontFamily: fontSans,
      fontWeight: fontWeights.fontSansRegular,
      lineHeight: letterSpacing.ls40,
      fontSize: fontSize.fs32,
    },
  },
});
