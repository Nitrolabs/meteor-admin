Template.registerHelper('Admin', Admin);
	
Template.registerHelper('getPublishedCount',function(collection){
	Meteor.call('getPublishedCount',collection.name, function(err,value){
		Admin.collections.counts.set(collection.name, value);
	});
	return Admin.collections.counts.get(collection.name);
})