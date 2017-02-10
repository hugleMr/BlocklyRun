/**
 * Created by Black3rry on 2/10/17.
 */

goog.provide('Blockly.JavaScript.turnRight');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['turn_right'] = function(block){
    cc.log("turn right");
    return ["turn right", Blockly.JavaScript.ORDER_NONE]
};