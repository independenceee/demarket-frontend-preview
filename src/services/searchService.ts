import * as httpRequest from "../utils/httpRequest";

const search = async function (q: string, type = "") {
    try {
        const response = await httpRequest.get("", {
            params: {
                q,
                type,
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
export { search };
