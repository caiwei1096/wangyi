import {get} from "./index.js";

export function getCategory() {
    return get("/getCategory")
}
export function getSlider() {
    return get("/getSliders")
}