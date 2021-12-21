try {
	var tcp = new Packages.mirthSocket.TcpDestination("10.6.72.59", 2000);
	//var tcp = new Packages.mirthSocket.TcpDestination("10.12.72.6", 8071);

	var batch = $('Batch');
	batch.Scripts[0].LabelItems = $('LabelItems');

	var batchString = JSON.stringify(batch, null, 2);

	logger.info(batchString);
	
	var msg = tcp.SendToServer(batchString.trim());			

	//channelMap.put('responseContentType', 'text/plain');
	//channelMap.put('responseCode', '200');
	
	//return msg;

	channelMap.put('res_json', msg);
	
}
catch(ex) {
	logger.info(ex)
}


// try{
// 	logger.info("Executing Destination");
	
// 	channelMap.put('responseContentType', 'text/plain');
// 	channelMap.put('responseCode', '200');

// 	logger.info($('res_json'));
	
// 	return $('res_json');
// }
// catch(ex){
// 	logger.error(ex);
// }