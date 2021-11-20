'use strict';

const { lstatSync } = require( 'fs' );
const { join, resolve, isAbsolute, parse } = require( 'path' );

function isDirectory( path ) {
	try {
		const stat = lstatSync( path );
		return stat.isDirectory();
	} catch ( e ) {
		return false;
	}
}

function getStartSearchDirectoryPath( startSearchDirPath ) {
	if ( startSearchDirPath ) {
		if ( ! isAbsolute( startSearchDirPath ) ) {
			startSearchDirPath = resolve( process.cwd(), startSearchDirPath );
		}
	} else {
		startSearchDirPath = process.cwd();
	}

	return startSearchDirPath;
}

function getPaths( pluginDirName, startSearchDirPath ) {
	const paths = [];
	const root = parse( startSearchDirPath ).root;
	let current = startSearchDirPath;

	while ( root !== current ) {
		paths.push( join( current, 'plugins', pluginDirName ) );
		current = resolve( current, '../' );
	}

	return paths;
}

module.exports = function( pluginDirName, startSearchDirPath ) {
	const paths = getPaths( pluginDirName, getStartSearchDirectoryPath( startSearchDirPath ) );

	for ( let i = 0; i < paths.length; i++ ) {
		if ( isDirectory( paths[ i ] ) ) {
			return true;
		}
	}

	return false;
};
