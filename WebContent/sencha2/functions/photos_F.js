function photos_F() {

	var photos = new Ext.Carousel({
		fullscreen : true,
		defaults : {
			styleHtmlContent : true
		},
		items : [ {
			xtype : 'image',
			src : '../images/1.jpg',
		}, {
			xtype : 'image',
			src : '../images/2.jpg',
		}, {
			xtype : 'image',
			src : '../images/3.jpg',
		}, {
			xtype : 'image',
			src : '../images/4.jpg',
		}, {
			xtype : 'image',
			src : '../images/5.jpg',
		} ]
	});

	return photos;
}