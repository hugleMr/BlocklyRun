/**
 * Created by Black3rry on 2/10/17.
 */

goog.provide('Blockly.JavaScript.stepBehind');

goog.require('Blockly.JavaScript');

Blockly.JavaScript['step_behind'] = function(block){
    cc.log("step behind");
    return ["step behind", Blockly.JavaScript.ORDER_NONE]
};