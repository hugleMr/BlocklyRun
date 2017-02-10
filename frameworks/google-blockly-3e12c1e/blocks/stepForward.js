/**
 * Created by Black3rry on 2/10/17.
 */

goog.provide('Blockly.Blocks.stepForward');

goog.require('Blockly.Blocks');

Blockly.Blocks['step_forward'] = {

    init: function() {
        this.appendDummyInput()
            .appendField("step forward");
        this.setColour(0);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    }
};