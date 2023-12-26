export const errorHandler = (err, req, res, _next) => {
  if (err.statusCode) {
    res.status(err.statusCode).send(err.message);
  } else {
    res.status(500).send({ msg: "Something went wrong" });
  }
};
