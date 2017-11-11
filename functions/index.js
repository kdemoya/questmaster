/**
 * questmaster | index.js
 * @author X-Team 2017 <http://www.x-team.com>
 * @author Kelvin De Moya <kelvin.demoya@x-team.com>
 */
'use strict';

const getSlackEvent = event => ({ slack: JSON.parse(event.body) });

const respond = (event) => {
  const response = { statusCode: 200 };
  if (event.slack.type === 'url_verification') {
    response.body = event.slack.challenge;
  }

  return event;
};

module.exports.handler = (event, context, callback) => {
  Promise.resolve(event)
    .then(getSlackEvent)
    .then(respond)
    .then((event) => callback(null, event))
    .catch(callback)
};
