# @janiscommerce/app-barcode-generator

![janis-logo](brand-logo.png)

![NPM Version](https://img.shields.io/npm/v/%40janiscommerce%2Fapp-barcode-generator)

React native components for generating barcode and QRcode. The library provides two components according to the type of code you need to create

## Installation

```bash
npm i @janiscommerce/app-barcode-generator
```

## Barcode

### Usage

```javascript
import {Barcode} from '@janiscommerce/app-barcode-generator';
import {Text} from 'react-native';

<Barcode value="1234534" format="EAN8" />;
<Barcode value="1234534" format="EAN8" text={<Text>1234534</Text>} />;
<Barcode value="1234534" format="EAN8" onError={(error) => console.log(error)} />;
```

### Props

| Prop            | Type     | Description                                               | default value | required |
| --------------- | -------- | --------------------------------------------------------- | ------------- | -------- |
| value           | string   | value to create barcode                                   |               | yes      |
| format          | string   | format of barcode. See [barcode type](#supported-formats) |               | yes      |
| text            | function | React native component to show value below barcode        |               | no       |
| backgroundColor | string   | Background color for barcode                              | #FFF          | no       |
| onError         | function | Callback to execute when has error                        |               | no       |
| width           | number   | Width of the barcode                                      |               | no       |
| height          | number   | Heigth of the barcode                                     |               | no       |

### Supported formats

- CODE39
- CODE128
- CODE128A
- CODE128B
- CODE128C
- EAN13
- EAN8
- EAN5
- EAN2
- UPC
- UPCE
- ITF14
- ITF
- MSI
- MSI10
- MSI11
- MSI1010
- MSI1110
- pharmacode
- codabar

## QRCode

### Usage

```javascript
import {QRCode} from '@janiscommerce/app-barcode-generator';

<QRCode value="1234534" />;
<QRCode value="1234534" size={150} />;
```

### Props

| Prop            | Type     | Description                                        | default value | required |
| --------------- | -------- | -------------------------------------------------- | ------------- | -------- |
| value           | string   | value to create QRCode                             |               | yes      |
| size            | number   | Set width and heigth of QRCode                     | 100           | no       |
| foregroundColor | function | React native component to show value below barcode | #000          | no       |
| backgroundColor | string   | Background color for barcode                       | #FFF          | no       |
