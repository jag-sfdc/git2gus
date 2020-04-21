/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

const GithubEvents = require('../modules/GithubEvents');
//const jsforce = require('jsforce');

module.exports = {
    eventName: GithubEvents.events.PULL_REQUEST_CLOSED,
    fn: async function(req) {
        const {
            pull_request: { title }
        } = req.body;
        if (title.includes('@W-')) {
            console.log(
                'Will call GUS with username ',
                process.env.GUS_USERNAME
            );
            // var conn = new jsforce.Connection();
            // conn.login(
            //     process.env.GUS_USERNAME,
            //     process.env.GUS_PASSWORD,
            //     err => {
            //         if (err) {
            //             return console.error(err);
            //         }
            //         conn.sobject('ADM_Change_List__c').create(
            //             {
            //                 Perforce_Changelist__c:
            //                     'jag-sfdc/git2gustest/pull/51',
            //                 Work__c: 'a07B0000007sxpcIAA',
            //                 External_ID__c: 'jag-sfdc/git2gustest/pull/51',
            //                 Source__c: 'GitHub'
            //             },
            //             (err, ret) => {
            //                 if (err || !ret.success) {
            //                     return console.error(err, ret);
            //                 }
            //                 console.log('Created record id : ' + ret.id);
            //             }
            //         );
            //     }
            // );
        }
    }
};
