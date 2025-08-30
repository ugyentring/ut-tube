import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, re) => {
  res.status(200).json({
    message: "ok",
  });
});

export { registerUser };
