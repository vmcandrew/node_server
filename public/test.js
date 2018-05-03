$(document).ready(function() {
	$(document).on("click","#b1",function(e){
		getdata();
	});	
});

function getdata(){
	$.get(url,function(data,status){
		for(var key in data){
			if (data.hasOwnProperty(key)){

			console.log(data[key][".html"]);
			}
		}
		console.log(data[0]);
	});
};

const url = '/test';


