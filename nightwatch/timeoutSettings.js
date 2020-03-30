
/**
 * This file is for setting configuration required in test step definitions
 * All constants used in step definitions are initialized here
 */


var settings = function () {
  this.constants = {
    'CHAI': 'chai',
    'OFF': 'Off',
    'ON': 'On',
    'PUSH': 'Push',
    'CANCEL': 'CANCEL',
    'PROCEED': 'PROCEED',
    'RESTORE': 'RESTORE',
    'YOU_HAVE_UNSAVED_CHANGES': 'You have unsaved changes',
    'RESTORE_DEFAULTS': 'Restore defaults',
    'NO_CHANGES_MADE': 'NO CHANGES MADE',
    'SAVE_SUCCESS_MESSAGE': 'Data saved successfully',
    'DEFAULT_VOID_TRS_THRESHOLD_AMOUNT': 100,
    'DEFAULT_VOID_ITEM_THRESHOLD_amount': 50,
    'DEFAULT_RETURN_ITEM_THRESHOLD_AMOUNT': 50
  };
  this.config = {
    'STEPTIMEOUT': 60000
  }
};
module.exports = new settings();
