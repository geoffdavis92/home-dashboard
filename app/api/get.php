<?php 
	# includes
	include './fn.php';

	# Reset GET param variable
	$query = $_GET;
	# setup endpoint with file URI
	$endpoint = data('store.json');
	# decode JSON file
	$store = json_decode(file_get_contents($endpoint),true);

	# check for size of GET params
	if ( sizeof($query) ) {
		# DEV: set records to first record
		$records = $store['records'][0];
		# Set data to records prop selected by query
		$data = $records['data'][$query['collection']];
		# Return data in response
		# NOTE: these can change to if statement
		#       to compact it.
		switch ($query['collection']) {
			case 'todoList':
				echo json_encode(array(
					'success' => true,
					'data' => $data
				));
				break;
			case 'groceryList':
				echo json_encode(array(
					'success' => true,
					'data' => $data
				));
				break;
			default:
				echo json_encode(array(
					'success' => false,
					'message' => "No value assigned to 'collection' query parameter"
				));
				break;
		}
	} else {
		# Send entire store
		echo json_encode($store);
	}

?>