import { Action } from "../appstate";
import {ADDITION_COUNR_ONE, SUBTRACTION_COUNR_ONE, RESET_COUNT} from "../const";

export const addCountOne = (): Action => {
    return {
        type: ADDITION_COUNR_ONE,
    };
};
export const subCountOne = (): Action => {
    return {
        type: SUBTRACTION_COUNR_ONE,
    };
};

export const resetCount = (): Action => {
    return {
        type: RESET_COUNT,
    };
};
