/**
 * Created by Black3rry on 2/10/17.
 */

goog.provide('Blockly.Blocks.stepBehind');

goog.require('Blockly.Blocks');

Blockly.Blocks['step_behind'] = {

    init: function() {
        this.appendDummyInput()
            .appendField("step behind");
        this.setColour(0);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    }
};