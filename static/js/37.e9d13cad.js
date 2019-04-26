(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"./docs/CustomizeTheme.mdx":function(e,n,t){var a=t("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(n,"__esModule",{value:!0}),n.default=d;var o=a(t("./node_modules/@babel/runtime/helpers/extends.js")),l=a(t("./node_modules/@babel/runtime/helpers/objectWithoutProperties.js")),r=(a(t("./node_modules/react/index.js")),t("./node_modules/@mdx-js/react/dist/index.es.js")),i={},s="wrapper";function d(e){var n=e.components,t=(0,l.default)(e,["components"]);return(0,r.mdx)(s,(0,o.default)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"customization"},"Customization"),(0,r.mdx)("h2",{id:"use-themeprovider"},"Use ThemeProvider"),(0,r.mdx)("p",null,"You can customize the theme using the ",(0,r.mdx)("inlineCode",{parentName:"p"},"Theme")," object ",(0,r.mdx)("a",(0,o.default)({parentName:"p"},{href:"https://github.com/WeTrustPlatform/paramount/blob/master/src/theme/ThemeInterface.ts"}),"See Themeinterface")," and passing it to ",(0,r.mdx)("inlineCode",{parentName:"p"},"ThemeProvider")),(0,r.mdx)("pre",null,(0,r.mdx)("code",(0,o.default)({parentName:"pre"},{}),"import { ThemeProvider, createTheme } from 'paramount-ui'\n\nconst theme = createTheme({\n  colors: {\n    background: {\n      white: 'white',\n      overlay: 'rgba(0,0,0,0.3)',\n\n      greyLight: palette.neutral.lightest,\n      greyDefault: '#F5F6F7',\n      greyDark: palette.neutral.light,\n\n      primaryLight: palette.teal.lightest,\n      primaryDefault: palette.teal.base,\n      primaryDark: palette.teal.dark,\n\n      secondaryLight: palette.orange.lightest,\n      secondaryDefault: palette.orange.base,\n      secondaryDark: palette.orange.dark,\n\n      errorLight: palette.red.lightest,\n      errorDefault: palette.red.base,\n      errorDark: palette.red.dark,\n\n      infoLight: palette.blue.lightest,\n      infoDefault: palette.blue.base,\n      infoDark: palette.blue.dark,\n\n      successLight: palette.green.lightest,\n      successDefault: palette.green.base,\n      successDark: palette.green.dark,\n\n      warningLight: palette.orange.lightest,\n      warningDefault: palette.orange.base,\n      warningDark: palette.orange.dark,\n    },\n\n    border: {\n      default: palette.neutral.light,\n      dark: '#EDF0F2',\n\n      primary: palette.teal.darkest,\n      secondary: palette.orange.darkest,\n\n      error: palette.red.darkest,\n      info: palette.blue.darkest,\n      success: palette.green.darkest,\n      warning: palette.orange.darkest,\n    },\n\n    text: {\n      link: palette.neutral.darkest,\n      dark: palette.neutral.darkest,\n      default: palette.neutral.darkest,\n      muted: palette.neutral.dark,\n      white: 'white',\n      selected: 'white',\n\n      primary: palette.teal.darkest,\n      secondary: palette.orange.darkest,\n\n      error: palette.red.darkest,\n      info: palette.blue.darkest,\n      success: palette.green.darkest,\n      warning: palette.orange.darkest,\n    },\n  },\n\n  textSizes: {\n    large: {\n      fontSize: 20,\n    },\n    medium: {\n      fontSize: 16,\n    },\n    small: {\n      fontSize: 14,\n    },\n  },\n\n  fills: {\n    solid: {\n        neutral: {\n          backgroundColor: palette.neutral.base,\n          color: 'white',\n        },\n\n        blue: {\n          backgroundColor: palette.blue.base,\n          color: 'white',\n        },\n\n        red: {\n          backgroundColor: palette.red.base,\n          color: 'white',\n        },\n\n        orange: {\n          backgroundColor: palette.orange.base,\n          color: 'white',\n        },\n\n        yellow: {\n          backgroundColor: palette.yellow.base,\n          color: palette.yellow.darkest,\n        },\n\n        green: {\n          backgroundColor: palette.green.base,\n          color: 'white',\n        },\n\n        teal: {\n          backgroundColor: palette.teal.base,\n          color: 'white',\n        },\n\n        purple: {\n          backgroundColor: palette.purple.base,\n          color: 'white',\n        },\n      },\n\n      subtle: {\n        neutral: {\n          backgroundColor: palette.neutral.light,\n          color: palette.neutral.darkest,\n        },\n\n        blue: {\n          backgroundColor: palette.blue.light,\n          color: palette.blue.darkest,\n        },\n\n        red: {\n          backgroundColor: palette.red.light,\n          color: palette.red.darkest,\n        },\n\n        orange: {\n          backgroundColor: palette.orange.light,\n          color: palette.orange.darkest,\n        },\n\n        yellow: {\n          backgroundColor: palette.yellow.light,\n          color: palette.yellow.darkest,\n        },\n\n        green: {\n          backgroundColor: palette.green.light,\n          color: palette.green.darkest,\n        },\n\n        teal: {\n          backgroundColor: palette.teal.light,\n          color: palette.teal.darkest,\n        },\n\n        purple: {\n          backgroundColor: palette.purple.light,\n          color: palette.purple.darkest,\n        },\n      },\n    },\n  },\n\n  fontFamilies: {\n    heading: `\"SF UI Display\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"`,\n    mono: `\"SF Mono\", \"Monaco\", \"Inconsolata\", \"Fira Mono\", \"Droid Sans Mono\", \"Source Code Pro\", monospace`,\n    text: `\"SF UI Text\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"`,\n  },\n\n  fontWeights: {\n    bold: 'bold',\n    light: '300',\n    normal: 'normal',\n  },\n\n  headingSizes: {\n    xxxlarge: {\n      fontSize: 35,\n      letterSpacing: -0.2,\n      lineHeight: 40,\n    },\n\n    xxlarge: {\n      fontSize: 29,\n      letterSpacing: -0.2,\n      lineHeight: 32,\n    },\n\n    xlarge: {\n      fontSize: 24,\n      letterSpacing: -0.07,\n      lineHeight: 28,\n    },\n\n    large: {\n      fontSize: 20,\n      letterSpacing: -0.07,\n      lineHeight: 24,\n    },\n\n    medium: {\n      fontSize: 16,\n      letterSpacing: -0.05,\n      lineHeight: 20,\n    },\n\n    small: {\n      fontSize: 14,\n      letterSpacing: -0.05,\n      lineHeight: 20,\n    },\n  },\n\n  paragraphSizes: {\n    small: {\n      fontSize: 14,\n      lineHeight: 24,\n    },\n\n    medium: {\n      fontSize: 16,\n      lineHeight: 21,\n    },\n\n    large: {\n      fontSize: 18,\n      lineHeight: 18,\n    },\n  },\n\n\n  elevations: [\n    {\n      elevation: 0,\n      shadowColor: palette.neutral.dark,\n      shadowOffset: { width: 0, height: 0 },\n      shadowOpacity: 0,\n      shadowRadius: 0,\n    },\n    {\n      elevation: 1,\n      shadowColor: palette.neutral.dark,\n      shadowOffset: { width: 1, height: 1 },\n      shadowOpacity: 0.15,\n      shadowRadius: 8,\n    },\n    {\n      elevation: 2,\n      shadowColor: palette.neutral.dark,\n      shadowOffset: { width: 2, height: 2 },\n      shadowOpacity: 0.2,\n      shadowRadius: 10,\n    },\n    // ...add more elevations\n  ],\n\n  controlBorderRadius: {\n    small: 4,\n\n    medium: 4,\n\n    large: 4,\n  },\n\n  controlHeights: {\n    small: 40,\n\n    medium: 48,\n\n    large: 56,\n  },\n\n  controlPaddings: {\n    small: 8,\n\n    medium: 16,\n\n    large: 24,\n  }\n})\n\n// in the outmost component insert the provider and pass Theme Object as value\n<ThemeProvider value={theme}>\n  ...\n</ThemeProvider>\n")),(0,r.mdx)("h2",{id:"override-component-styles"},"Override Component Styles"),(0,r.mdx)("p",null,"Each component exposes ",(0,r.mdx)("inlineCode",{parentName:"p"},"getStyles")," callback, which can be used to override component styles."),(0,r.mdx)("pre",null,(0,r.mdx)("code",(0,o.default)({parentName:"pre"},{}),'import { Button } from \'paramount-ui\'\n\nconst CustomButton = () => {\n  return (\n    <Button\n      color="primary"\n      title="Example"\n      getStyles={(buttonProps, theme) => {\n        const { color } = buttonProps;\n\n        // Each Component may use multiple style objects. The API enables to override each node\'s style\n        // VSCode intellisense would autofill available style fields; however, you can view the style spec of each component in their `Component*.styles.ts`\n        return {\n          buttonStyle: { ... },\n          textStyle: { ... },\n          focusColor: color\n        }\n      }}\n    >\n  )\n}\n')))}d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"docs/CustomizeTheme.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=37.236498420dea747f10f7.js.map