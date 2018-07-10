# CNPJ

[![Maintainability](https://api.codeclimate.com/v1/badges/510e2fbd37767823baa0/maintainability)](https://codeclimate.com/github/rafaelrabaco/cnpj/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/510e2fbd37767823baa0/test_coverage)](https://codeclimate.com/github/rafaelrabaco/cnpj/test_coverage)

This package allows you to validate, format and consult CNPJ documents.

## Installation

To install it, use the following command:

    $ npm install --save @rafaelrabaco/cnpj

If you're using Yarn

    $ yarn add @rafaelrabaco/cnpj

## Usage

### Consult

Returns the information of the CNPJ

```js
import { CNPJ } from '@rafaelrabaco/cnpj';
/** Web Service used to perform this function (https://receitaws.com.br/api) */
CNPJ.info('27865757000102')
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.log(err);
  });

CNPJ.info('27.865.757/0001-02', {
    'token': 'TOKEN RECEITAWS' // Optional
    'timeout': 5000 // Optional (Default: 3000)
})
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.log(err);
  });
```

### Validate

Checks if it is a valid CNPJ

```js
import { CNPJ } from '@rafaelrabaco/cnpj';
CNPJ.validate('56.112.478/0001-68'); // true
CNPJ.validate('56112478000168'); // true
CNPJ.validate('12.033.793/0001-12'); // false
CNPJ.validate('12033793000112'); // false
CNPJ.validate('22.480.042/0001-00'); // true
```

### Clean

Removes non-numeric characters.

```js
import { CNPJ } from '@rafaelrabaco/cnpj';
CNPJ.clear('43.236.279/0001-10'); // 43236279000110
```

### Format

Add non-numeric characters.

```js
import { CNPJ } from '@rafaelrabaco/cnpj';
CNPJ.format('43236279000110'); // 43.236.279/0001-10
```
