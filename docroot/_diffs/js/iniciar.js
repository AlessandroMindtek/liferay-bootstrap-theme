/**
 * inicialização dos componentes
 */
$(document).ready(function(){
	$(".chzn-select").chosen();
	$("#umclique").chosen({allow_single_deselect: true});

	$("#umclique").change(function(){
		var serviceLink = $("#umclique").val();
		window.open(serviceLink);
	});

});

