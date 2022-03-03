import * as mqtt from "mqtt";
import { MQTT } from "../env";
export const TOPIC_MESSAGE = "message";

function mqttClient() {
    return mqtt.connect(MQTT, {
        clean: true,
        connectTimeout: 4000,
        reconnectPeriod: 1000,
    });
}
// const mqttClient = {};
export default mqttClient;
