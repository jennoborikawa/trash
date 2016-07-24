var trash = [
	{
		id: 3, 
		name: 'old sneaker'
	}, 
	{
		id: 5, 
		name: 'treadmill'
	}
]; 


module.exports = {
	getTrash: function(){
		return trash; 
	}, 

	deleteTrash: function(id){
		//find element with matching id 
		var toDelete = this.getTrash().filter(function(item){
			return item.id === id; 
		}); 
		//find index of element 
		var index = this.getTrash().indexOf(toDelete); 
		//splice out element 
		this.getTrash().splice(index,1); 

	}

};


