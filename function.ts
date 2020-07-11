import { NetlifyFunction } from "netlify-lambda-types";

const handler: NetlifyFunction = async (event, context, callback) => {
  return { statusCode: 200, body: "ok" };
};
exports.handler = handler;
