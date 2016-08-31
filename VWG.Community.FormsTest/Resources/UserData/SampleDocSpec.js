﻿var docSpec={
	onchange: function(){
		console.log("I been changed now!")
	},
	validate: function(obj){
		console.log("I be validatin' now!")
	},
	elements: {
		"list": {
			menu: [{
				caption: "Append an <item>",
				action: Xonomy.newElementChild,
				actionParameter: "<item/>"
			}]
		},
		"item": {
			menu: [{
				caption: "Add @label=\"something\"",
				action: Xonomy.newAttribute,
				actionParameter: {name: "label", value: "something"},
				hideIf: function(jsElement){
					return jsElement.hasAttribute("label");
				}
			}, {
				caption: "Delete this <item>",
				action: Xonomy.deleteElement
			}, {
				caption: "New <item> before this",
				action: Xonomy.newElementBefore,
				actionParameter: "<item/>"
			}, {
				caption: "New <item> after this",
				action: Xonomy.newElementAfter,
				actionParameter: "<item/>"
			}],
			canDropTo: ["list"],
			attributes: {
				"label": {
					asker: Xonomy.askString,
					menu: [{
						caption: "Delete this @label",
						action: Xonomy.deleteAttribute
					}]
				}
			}
		}
	}
};