function formatTime(mins){
	const fullDay=24;
	const fullMin = 60;

	let day = mins / (fullDay * fullMin);

    mins = mins % (fullDay * fullMin); 
    let hour = mins / fullMin;
  
    mins = mins % fullMin;

    console.log(parseInt(day)+" day(s) "+ parseInt(hour) +" hour(s) "+ parseInt(mins) +" minute(s).");
}

formatTime(120);
formatTime(59);
formatTime(3601);