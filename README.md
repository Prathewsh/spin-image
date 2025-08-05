# @Prathewsh/spin-image

🌀 A tiny utility to spin images (or any element) with one line.

## Install

```bash
npm install @Prathewsh/spin-image --registry=https://npm.pkg.github.com
```

## Usage

```js
import spinImage from '@Prathewsh/spin-image';

spinImage('#myImage'); // Spins infinitely at 1s speed

// With options
spinImage(document.getElementById('myImg'), { speed: '3s' });
```
