<?php 
	
	include './fn.php';

	$DATA = $_GET;
	$endpoint = data('store.json');
	$store = readFileContents( $endpoint );
	if ( sizeof($DATA) > 0 ) {
		echo gettext($store);
		$store['success'] = true;
		echo $store;
	} else {
		// echo $store;
		echo json_encode(array(
			'success' => false,
			'message' => "There is no GET request",
			'debug' => $DATA
		));
	}

?>