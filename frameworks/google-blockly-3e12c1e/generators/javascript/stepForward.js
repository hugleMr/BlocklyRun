/**
 * Created by Black3rry on 2/10/17.
 */

goog.provide('Blockly.JavaScript.stepForward');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['step_forward'] = function(block){
    cc.log("step forward");
    return ["step forward", Blockly.JavaScript.ORDER_NONE]
};