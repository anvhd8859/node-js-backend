import ApiError from "../exception/ApiError.js";

export const ping = (_req, res) => res.status(200).send("ping pong");

export const pong = (req, _res, next) => {
  next(new ApiError(500, `Custom error ${req.query.format}`));
};

export default this;
