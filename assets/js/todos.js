toDoComplete();
toDoDelete();

//completion of a todo
function toDoComplete(){
	$('li').on('click',function(){
		$(this).toggleClass("done");
	});
}

//Deleting a todo
function toDoDelete(){
	$('span').click(function(event){
		$(this).parent().fadeOut(1000,function(){
			$(this).remove();
		});
		event.stopPropagation();
	});
}


//adding a todo
$('input').keypress(function(event){
	if(event.which === 13){
		var val = $(this).val();
		var todo = '<li><span class="delete"><i class="fas fa-trash"></i></span> '+ val +'</li>';
		console.log(todo); 
		$(this).val("");
		$('ul').append(todo);
		toDoComplete();
		toDoDelete();
	}
});

//sliding animation
$('button').click(function(){
	$('input').slideToggle(300);
});
