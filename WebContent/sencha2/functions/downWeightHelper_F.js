function downWeightHelper_F() {
	var downWeightHelper = new Ext.Panel({
		title : ' W',
		id : 'downWeightHelper',
		size : 'auto',
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
				html : 'downWeight1',
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
				html : 'downWeight2',
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
				html : 'downWeight3',
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

	return downWeightHelper;
}