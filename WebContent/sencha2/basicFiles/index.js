new Ext.application({
	launch : function() {

		Ext.define('ListItem', {
			extend : 'Ext.data.Model',
			config : {
				fields : [ 'text', 'id' ]
			}
		});

		var treeStore = Ext.create('Ext.data.TreeStore', {
			model : 'ListItem',
			defaultRootProperty : 'items',
			root : treeData
		});

		var nestedList = Ext.create('Ext.NestedList',
				{
					title : 'HELPER',
					store : treeStore,
					detailCard : true,
					listeners : {
						leafitemtap : function(nestedList, list, index, target,
								record) {
							nestedList.setDetailCard(connector_F(record.internalId));
						}
					},
					flex : 1
				});

		Ext.Viewport.add({
			layout : 'hbox',
			items : [ nestedList ]
		});
	}
});
