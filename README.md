# Has WordPress Plugin Directory

It runs through the files tree from the call file, and finds the first directory in which there is a `plugins`
directory, usually the `wp-content` directory, but not always.

Then simply checks that in the directory `plugins` there is a directory named that you indicated the only parameter of
this function.

## Installation

You can install the package as follows:

```sh
npm install @sumotto/has-wordpress-plugin-directory --save-dev

# or

yarn add @sumotto/has-wordpress-plugin-directory --dev
```

## Usage

Include:

```js
const hasWordPressPluginDirectory = require( '@sumotto/has-wordpress-plugin-directory' );

// or

import hasWordPressPluginDirectory from '@sumotto/has-wordpress-plugin-directory';
```

And check plugin folder name:

```js
const hasWoocommerceDirectory = hasWordPressPluginDirectory( 'woocommerce' );
if ( hasWoocommerceDirectory ) {
	// Your code here.
}
```

## License

MIT License
