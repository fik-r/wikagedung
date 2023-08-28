exports.ok = (message, payload, res) => {
  return res.status(200).json({
    status: "success",
    message: message,
    payload: payload,
  });
};

exports.badRequest = (message, res) => {
  return res.status(400).json({
    status: "bad request",
    message: message,
  });
};

exports.forbidden = (message, res) => {
  if (message === null) {
    message = "You have no permission to access";
  }
  return res.status(403).json({
    status: "forbidden",
    message: message,
  });
};

exports.notFound = (message, res) => {
  return res.status(404).json({
    status: "not found",
    message: message,
  });
};

exports.conflict = (message, res) => {
  return res.status(409).json({
    status: "conflict",
    message: message,
  });
};

exports.unauthorized = (message, res) => {
  return res.status(401).json({
    status: "unauthorized",
    message: message,
  });
};

exports.error = (code, message, res) => {
  return res.status(code || 400).json({
    status: "error",
    message: message,
  });
};
