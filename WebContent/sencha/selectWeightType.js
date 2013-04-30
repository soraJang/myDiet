Ext.define("selectWeightType", {
	extend : 'Ext.Panel',
	requires : [ 'Ext.TitleBar' ],
	xtype : 'select',

	config : {
		id : 'selectWeightType',
		title : ' W',
		layout : {
			type : 'hbox',
			pack : 'center',
			align : 'center'
		},
		items : [
				{
					// height : 100,
					flex : 1,
					xtype : 'panel',
//					id : 'stopWatchPanel',
					// html : 'Click </br> Up or Down',
					style : {
						'font-style' : 'bold',
						'font-size' : '5em'
					},
					items : [
							{
								xtype : 'button',
								text : 'up',
								handler : function() {
									initUpWeightHelper();
									Ext.getCmp('selectWeightType').setItems(Ext.getCmp('upWeightHelper'));
								}
							},
							{
								xtype : 'button',
								text : 'down',
								handler : function() {
									initDownWeightHelper();
									Ext.getCmp('selectWeightType').setItems(Ext.getCmp('downWeightHelper'));
								}
							} ]
				},
				{
					docked : 'bottom',
					xtype : 'toolbar',
					id : 'toolbar',
					layout : {
						pack : 'center',
						align : 'center'
					},  
					items : [
					         {
					        	 xtype : 'button', 
					        	 text : 'back to the select View', 
					        	 handler : function() {
					        		 Ext.getCmp('selectWeightType').setItems();

					        		 var index = Ext.getCmp('index');
					        		 index.setItems([runningHelper, selectWeightType, routineVideo]);
					        		 index.setActiveItem(index.getComponent(2));
					        	 }
					         }
					         ]					
				} ]
	}
});
