import * as mqtt from "mqtt";
const MQTT = "ws://20.212.16.22:9001";
export const TOPIC_MESSAGE = "message";

const mqttClient = mqtt.connect(MQTT, {
    clean: true,
    connectTimeout: 4000,
    reconnectPeriod: 1000,
});

export default mqttClient;
