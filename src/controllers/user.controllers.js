import { asynchandler } from "../utils/asyncHandler.js"

const registerUser = asynchandler(async (req, res) => {
    res.status(200).send({
        message: "arya Pawar"
    });
});

export { registerUser };