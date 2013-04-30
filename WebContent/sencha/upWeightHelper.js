function initUpWeightHelper() {

    upWeightHelper = new Ext.Panel({
        title : ' W',
        id : 'upWeightHelper',
        size : 'auto',
        layout : {
            type : 'vbox',
            pack : 'center',
            align : 'center'
        },
        items : [{
            xtype : 'panel',
            layout : {
                type : 'hbox'
            },
            defaults : {
                height : 100
            },
            items : [{
                xtype : 'label',
                html : 'upWeight1',
                // width : 130,
                style : {
                    'font-style' : 'bold',
                    'font-size' : '2em'
                }
            }, {
                xtype : 'checkboxfield'
            }, {
                xtype : 'checkboxfield'
            }, {
                xtype : 'checkboxfield'
            }]
        }, {
            xtype : 'panel',
            layout : {
                type : 'hbox'
            },
            defaults : {
                // width : 100,
                height : 100
            },
            items : [{
                xtype : 'label',
                html : 'upWeight2',
                // width : 130,
                style : {
                    'font-style' : 'bold',
                    'font-size' : '2em'
                }
            }, {
                xtype : 'checkboxfield'
            }, {
                xtype : 'checkboxfield'
            }, {
                xtype : 'checkboxfield'
            }]
        }, {
            xtype : 'panel',
            layout : {
                type : 'hbox'
            },
            defaults : {
                // width : 100,
                height : 100
            },
            items : [{
                xtype : 'label',
                html : 'upWeight3',
                // width : 130,
                style : {
                    'font-style' : 'bold',
                    'font-size' : '2em'
                }
            }, {
                xtype : 'checkboxfield'
            }, {
                xtype : 'checkboxfield'
            }, {
                xtype : 'checkboxfield'
            }]
        }]
    })
}
