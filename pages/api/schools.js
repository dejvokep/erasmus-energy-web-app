import {getSchools} from "../../database/Connector";

export default async function Schools(req, res) {
    if (req.method !== "GET") {
        res.status(405).json({
            message: "This endpoint only responds to GET requests."
        });
        return;
    }

    res.status(200).json(await getSchools())
}