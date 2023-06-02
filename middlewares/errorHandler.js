export function errorHandler(error, request, response, next) {
  console.error(error.message);
  if (error.name === "CastError") {
    return response.status(500).send({ error: "malformatted id" });
  }
  next(error);
}
