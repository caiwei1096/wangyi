const HOST = "http://localhost:3001";
export function get(url) {
    return fetch(HOST+url).then(response=>response.json())
}
