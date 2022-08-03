/**
 * @file application.command.constants.validation.js
 * @module application.command.constants.validation
 * @description Contains all validations for named application command constants.
 * @requires module:application.command.constants
 * @author Seth Hollingsead
 * @date 2022/03/22
 * @copyright Copyright © 2022-… by Seth Hollingsead. All rights reserved
 */

// Internal imports
import * as app_cmd from '../../constants/application.command.constants.js';

/**
 * @function applicationCommandConstantsValidation
 * @description Initializes the application command constants validation data objects array.
 * @return {void}
 * @author Seth Hollingsead
 * @date 2022/03/22
 */
export const applicationCommandConstantsValidation = [
  // ********************************
  // Client Commands in order
  // ********************************
  {Name: 'ccustomEchoCommand', Actual: app_cmd.ccustomEchoCommand, Expected: 'customEchoCommand'},
  {Name: 'cbossPanic', Actual: app_cmd.cbossPanic, Expected: 'bossPanic'},
  {Name: 'ccommand1', Actual: app_cmd.ccommand1, Expected: 'command1'},
  {Name: 'ccommand2', Actual: app_cmd.ccommand2, Expected: 'command2'},
  {Name: 'ccommand3', Actual: app_cmd.ccommand3, Expected: 'command3'},
  {Name: 'ccommand4', Actual: app_cmd.ccommand4, Expected: 'command4'},
  {Name: 'ccommand5', Actual: app_cmd.ccommand5, Expected: 'command5'},
  {Name: 'ccommand6', Actual: app_cmd.ccommand6, Expected: 'command6'},
  {Name: 'ccommand7', Actual: app_cmd.ccommand7, Expected: 'command7'},
  {Name: 'ccommand8', Actual: app_cmd.ccommand8, Expected: 'command8'},
  {Name: 'ccommand9', Actual: app_cmd.ccommand9, Expected: 'command9'},
  {Name: 'ccommand10', Actual: app_cmd.ccommand10, Expected: 'command10'}
];
