import { useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import API from "../api";

const InputAddress = () => {
    const [provinces, setProvince] = useState([]);
    const [districts, setDistrict] = useState([]);
    const [wards, setWard] = useState([]);
    const { register } = useFormContext();

    useEffect(() => {
        async function getProvinces() {
            const res: any = await API.locations.getListProvinces();
            console.log(res.data);
            setProvince(res.data);
        }
        getProvinces();
    }, []);
    return (
        <div>
            <select {...register("province")}>
                {provinces.map((value: any, index: number) => (
                    <option></option>
                ))}
            </select>
            <input />
        </div>
    );
};
export default InputAddress;
