Ext.define("runningHelper", {
	extend : 'Ext.Panel',
	requires : [ 'Ext.TitleBar' ],
	xtype : 'stopwatch',

	config : {
		title : ' R',
		layout : {
			type : 'vbox',
			pack : 'center',
			align : 'center'
		},
		items : [ {
			xtype : 'panel',
			layout : {
				pack : 'center',
				align : 'center'
			},
			items : [ {
				height : 100,
				xtype : 'panel',
				id : 'running',
				html : '00:00:00',
				style : {
					'font-style' : 'bold',
					'font-size' : '5em'
				}
			} ]
		}, {
			xtype : 'panel',
			flex : 1,
			layout : 'hbox',
			defaults : {
				height : 50,
				xtype : 'button',
				ui : 'round',
				style : {
					'margin' : '0.25em',
					'padding' : '0.75em'
				}
			},
			items : [ {
				text : 'Start',
				handler : function() {
					setHtml('Start');
				}
			}, {
				text : 'Stop',
				handler : function() {
					setHtml('Stop');
				}
			}, {
				text : 'Reset',
				handler : function() {
					setHtml('Reset');
				}
			} ]
		}, {
			xtype : 'label',
			id : 'msg',
			flex : 2,
			style : {
				'font-style' : 'bold',
				'font-size' : '2em',
				'color' : 'red'
			}
		}, {
			id : 'player',
			xtype : 'audio',
			url : '../media/WindowsExclamation.wav',
			hidden : true
		}, {
			xtype : 'fieldset',
			title : 'speedChecker',
			width : 300,
			items : [ {
				xtype : 'textfield',
				label : 'NowSpeed : ',
				id : 'nowField',
				value : '3.5',
				labelWidth : 150,
				style : {
					'font-size' : '1.5em'
				}
			}, {
				xtype : 'textfield',
				label : 'NextSpeed : ',
				id : 'nextField',
				labelWidth : 150,
				style : {
					'font-size' : '1.5em'
				}
			} ]
		} ]
	}
});

function setHtml(swButton) {
	var actionType = swButton;
	var i = 1;
	var now = [ 3.5, 4.0, 4.5, 5.0, 5.5, 6.0, 6.5, 7.0, 7.5, 8.0, 7.5, 7.0,
			6.5, 6.0, 5.5, 5.0, 4.5, 5.0, 5.5, 6.0, 6.5, 7.0, 7.5, 8.0, 7.5,
			7.0, 6.5, 6.0, 5.5, 5.0, 8.0, 8.0, 5.0, 5.0, 8.0, 8.0, 5.0, 5.0,
			8.0, 8.0, 5.0, 5.0, 8.0, 8.0, 5.0, 5.0, 8.0, 8.0, 5.0, 5.0, 3.5,
			3.5, 3.5, 3.5, 3.5 ];

	function playSound() {
	}

	function updateStopWatch(watchObj) {
		var elapseTime;
		var minSec = watchObj.getHtml().split(":");
		var min = parseInt(minSec[0], 10);
		var sec = parseInt(minSec[1], 10);
		var msec = parseInt(minSec[2], 10);
		var tSec;

		msec++;
		if (msec == 10) {
			sec++;
			tSec = sec;
			msec = 0;
		}
		if (sec == 60) {
			min++;
			sec = 0;
			tSec = sec;
		}

		elapseTime = (min < 10) ? "0" + min : min;
		elapseTime += (sec < 10) ? ":0" + sec : ":" + sec;
		elapseTime += (msec < 10) ? ":0" + msec : ":" + msec;

		if (tSec === 25 || tSec == 55) {
			Ext.getCmp('msg').setHtml('change your speed, in 5sec.');
		} else if (tSec === 26 || tSec == 56) {
			Ext.getCmp('msg').setHtml('change your speed, in 4sec.');
		} else if (tSec === 27 || tSec == 57) {
			Ext.getCmp('msg').setHtml('change your speed, in 3sec.');
		} else if (tSec === 28 || tSec == 58) {
			Ext.getCmp('msg').setHtml('change your speed, in 2sec.');
		} else if (tSec === 29 || tSec == 59) {
			Ext.getCmp('msg').setHtml('change your speed, in 1sec.');
		} else if (tSec === 30 || tSec === 0) {
			Ext.getCmp('msg').setHtml("");

			Ext.getCmp('nowField').setValue(now[i]);
			Ext.getCmp('nextField').setValue(now[i + 1]);
			i++;

			Ext.getCmp('player').play();
		}

		watchObj.setHtml(elapseTime);
	}

	switch (actionType) {
	case "Start":
		var thisScope = this;
		if (self.stopWatchInt != undefined) {
			clearInterval(self.stopWatchInt);
		}
		stopWatchInt = setInterval(function() {
			updateStopWatch(thisScope.Ext.getCmp('running'));
		}, 100);
		break;
	case "Stop":
		clearInterval(stopWatchInt);
		stopWatchInt = undefined;
		break;
	case "Reset":
		clearInterval(stopWatchInt);
		stopWatchInt = undefined;
		this.Ext.getCmp('running').setHtml("00:00:00");
		break;
	}
}