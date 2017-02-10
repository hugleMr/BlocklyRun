/**
 * Created by Black3rry on 2/10/17.
 */

goog.provide('Blockly.Blocks.turnRight');

goog.require('Blockly.Blocks');

Blockly.Blocks['turn_right'] = {

    init: function() {
        this.appendDummyInput()
            .appendField("turn right");
        this.setColour(0);
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    }
};