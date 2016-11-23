<?php 

function data( $filename ) {
	return "../data/$filename";
}

function readFileContents( $filename/*, $callback*/ ) {
	if ( file_exists($filename) ) {
		$file = fopen($filename, 'r');
		$contents = fread($file, filesize($filename));
		fclose($file);
		return $contents;
	} else {
		return false;
	}
}

?>