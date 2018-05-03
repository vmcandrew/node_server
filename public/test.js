$(document).ready(function() {
	$(document).on("click","#b1",function(e){
		getdata();
	});	
});

function getdata(){
	$.get(url,function(data,status){
		console.log(data[".html"]);
	});
};

const url = '/test';


