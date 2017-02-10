/**
 * Created by Black3rry on 2/10/17.
 */

goog.provide('Blockly.Blocks.turnLeft');

goog.require('Blockly.Blocks');

Blockly.Blocks['turn_left'] = {

    init: function() {
        this.appendDummyInput()
            .appendField("turn left");
        this.setColour(0);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    }
};