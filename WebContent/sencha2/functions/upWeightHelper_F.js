function upWeightHelper_F() {
	var upWeightHelper = new Ext.Panel({
		fullscreen : true,
		layout : {
			type : 'vbox',
			pack : 'center',
			align : 'center'
		},
		items : [ {
			xtype : 'panel',
			layout : {
				type : 'hbox'
			},
			defaults : {
				height : 100,
				style : {
					'background' : 'none'
				}
			},
			items : [ {
				xtype : 'label',
				html : 'upWeight1',
				style : {
					'font-style' : 'bold',
					'font-size' : '1em'
				}
			}, {
				xtype : 'checkboxfield'
			}, {
				xtype : 'checkboxfield'
			}, {
				xtype : 'checkboxfield'
			} ]
		}, {
			xtype : 'panel',
			layout : {
				type : 'hbox'
			},
			defaults : {
				height : 100,
				style : {
					'background' : 'none'
				}
			},
			items : [ {
				xtype : 'label',
				html : 'upWeight2',
				style : {
					'font-style' : 'bold',
					'font-size' : '1em'
				}
			}, {
				xtype : 'checkboxfield'
			}, {
				xtype : 'checkboxfield'
			}, {
				xtype : 'checkboxfield'
			} ]
		}, {
			xtype : 'panel',
			layout : {
				type : 'hbox'
			},
			defaults : {
				height : 100,
				style : {
					'background' : 'none'
				}
			},
			items : [ {
				xtype : 'label',
				html : 'upWeight3',
				style : {
					'font-style' : 'bold',
					'font-size' : '1em'
				}
			}, {
				xtype : 'checkboxfield'
			}, {
				xtype : 'checkboxfield'
			}, {
				xtype : 'checkboxfield'
			} ]
		} ]
	});

	return upWeightHelper;
}