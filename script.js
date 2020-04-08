const fields = [
	"var1",
	"var2",
	"var3",
	"var4",
	"var5",
	"var6",
	"speach"
]


function handleButton() {
	handleData(skazka);

}

function getFormValue() {
	let obj = {};

	fields.forEach(function(field) {
		obj[field] = $("input[name="+field+"]")[0].value
	});
		
	return obj;
}

function handleData(skazka) {
	let message = "";

	let obj = getFormValue();
		
	skazka["text"].forEach(function(line) {
			for (key in obj) {
				line = line.replace("{"+ key +"}", obj[key]);
			}

			message = message + line + "<br>";
	});

	$("div.result").html(message);
}



function init(){
	$(".btn").click(handleButton);
}



$(document).ready(init);