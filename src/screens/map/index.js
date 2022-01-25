import Map from "../../components/Map";
import { KEY_GOOGLE_MAP } from "../../config";

const Maps = () => {
    return (
        <div style={{ width: "100%" }}>
            <Map
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${KEY_GOOGLE_MAP}&callback=initMap`}
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={
                    <div
                        style={{
                            height: `90vh`,
                            margin: `auto`,
                            border: "2px solid black",
                        }}
                    />
                }
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    );
};
export default Maps;
