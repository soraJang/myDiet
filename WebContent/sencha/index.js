new Ext.application({
	launch : function() {
//		 callVideoList();
//		 var routineVideo = Ext.getCmp('routineVideo');
		Ext.create('Ext.tab.Panel', {
			id : 'index',
			fullscreen : true,
			tabBarPosition : 'top',
			tabBar : {
				dock : 'top',
				layout : {
					pack : 'center'
				}
			},

			layout : 'card',
			plugins : [ new Ext.ux.touch.SwipeTabs ],

			defaults : {
				styleHtmlContent : true,
				autoScroll : true
			},
			 items : [ runningHelper, selectWeightType, routineVideo]
//			items : [ runningHelper, selectWeightType ]
		});
	}
});
