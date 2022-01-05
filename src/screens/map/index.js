import Map from "../../components/Map";

const Maps = () => {
    const key = process.env.REACT_APP_KEY_GOOGLE_MAP;
    // const key = "AIzaSyA7aU3f7K6Jw4RJy5AK1a1MmJYZWzFvqE0"
    console.log("key", key);

    return (
        <div style={{ width: "100%" }}>
            <Map
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`}
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
