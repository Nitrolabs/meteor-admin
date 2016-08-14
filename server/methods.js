Meteor.methods({
  getPublishedCount: function(collection){
  	check(collection,String);

  	if (!Admin.isAdmin(this.userId)){
  		return new Meteor.Error(403, 'Insufficent permissions');
  	}

  	var collection = Admin.collections.get(collection).collection;
  	return collection.find().count();
  }
});