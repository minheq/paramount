# Paramount

[![Build Status](https://travis-ci.org/WeTrustPlatform/paramount.svg?branch=master)](https://travis-ci.org/WeTrustPlatform/paramount.svg?branch=master)
![npm](https://img.shields.io/npm/v/paramount-ui.svg) ![GitHub](https://img.shields.io/github/license/wetrustplatform/paramount.svg)

Paramount UI is a React components library. The core features of this library is

- **Cross platform.** Components work and look the same on Web, iOS, Android and Desktop apps
- **Customizable.** The theming and components are highly customizable, so that you can adapt to your branding needs.
- **35+ components.** Building blocks from buttons to responsive layout and icons for your application

## Warning

Paramount UI is considered unstable until version 2.x

## Documentation

On getting started, components documentation and guides, [visit full documentation](https://wetrustplatform.github.io/paramount/)

## Usage

Here is an example of using the library:

```ts
import React from 'react';
import { ThemeProvider, Button } from 'paramount-ui';

const App = () => (
  <ThemeProvider>
    <Button color="primary" appearance="minimal" title="Hello World" />
  </ThemeProvider>
);
```

## Getting started

```bash
yarn add paramount-ui
# or
npm install --save paramount-ui
```

### Setup on Web

[Create React App](https://facebook.github.io/create-react-app/) works out of the box with `paramount-ui`.

For alternative setup, follow the guides on [react-native-web](https://github.com/necolas/react-native-web/blob/master/docs/guides/getting-started.md)

### Setup on Native

[Expo](https://expo.io/) works out of the box with `paramount-ui`

If you do not have `react-native-vector-icons` dependency in your setup, [install it](https://github.com/oblador/react-native-vector-icons)
