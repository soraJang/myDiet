//function callVideoList() {
//	var routineVideo = new Ext.NestedList({
//		id : 'routineVideo',
//		title : 'List',
//		displayField : 'text',
//		layout : 'fit',
//		store : new Ext.data.TreeStore({
//			proxy : 'memory',
//			fields : [ 'text' ],
//			data : {
//				text : 'start',
//				children : [ {
//					text : 'vv',
//					children : [{
//						xtype : 'video', 
//						x : 600,
//						y : 300,
//						width : 300,
//						height : 250,
//						url : "../media/videoSample.mp4",
//						loop : true,
//						layout : 'fit',
//					}]
//				}, {
//					text : 'b',
//				}, {
//					text : 'c',
//				} ]
//			},
//		}),
//		itemTpl : '{text}'
//	});
//}

 Ext.define("routineVideo", {
	extend : 'Ext.Panel',
	requires : [ 'Ext.TitleBar' ],
	xtype : 'routin',

	config : {
		title : 'V',
		id : 'routineVideo',
		layout : {
			type : 'vbox',
			pack : 'center',
			align : 'center'
		},
		items : [ {
			xtype : 'list',
			title : 'list',
			id : 'videoList',
			items : [ {} ],
			store : {
				fields : [ 'name', 'league', 'division' ],
				data : [ {
					name : 'New York Yankees',
					league : 'AL',
					division : 'East'
				}, {
					name : 'Tampa Bay',
					league : 'AL',
					division : 'East'
				} ]
			},
			itemTpl : '{name}'
		}, {
			xtype : 'panel',
			id : 'video',
			flex : 1,
			items : [ {
				xtype : 'video',
				x : 600,
				y : 300,
				width : 300,
				height : 250,
				url : "../media/videoSample.mp4"
			} ]
		}, {
			xtype : 'panel',
			id : 'sub',
			items : []
		}, {
			xtype : 'panel',
			id : 'count',
			layout : {
				type : 'hbox'
			},
			items : [ {
				xtype : 'checkboxfield'
			}, {
				xtype : 'checkboxfield'
			}, {
				xtype : 'checkboxfield'
			} ]
		} ]
	}

});
