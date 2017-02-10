/**
 * Created by Black3rry on 2/10/17.
 */

goog.provide('Blockly.JavaScript.turnLeft');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['turn_lelft'] = function(block){
    cc.log("turn left");
    return ["turn left", Blockly.JavaScript.ORDER_NONE]
};