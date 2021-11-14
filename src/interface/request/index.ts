import UserRepositoryInterface from "./UserRespository";
import LocationsRespository from "./LocationsRespository";
export default interface Repositories {
    user: UserRepositoryInterface;
    locations: LocationsRespository;
}
