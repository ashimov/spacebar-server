import { instanceOf } from "lambert-server";
import { CLOSECODES } from "../util/Constants";
import WebSocket from "../util/WebSocket";

export function check(this: WebSocket, schema: any, data: any) {
	try {
		const error = instanceOf(schema, data);
		if (error !== true) {
			throw error;
		}
		return true;
	} catch (error) {
		console.error(error);
		// invalid payload
		this.close(CLOSECODES.Decode_error);
		throw error;
	}
}
