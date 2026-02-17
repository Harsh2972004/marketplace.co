export const validate = (schema) => (req, res, next) => {
  const result = schema.safeParse(req.body);

  if (!result.success) {
    const fieldErrors = {};

    for (const issue of result.error.issues) {
      const field = issue.path[0];

      // only take the FIRST error per field
      if (!fieldErrors[field]) {
        fieldErrors[field] = issue.message;
      }
    }

    return res.status(400).json({
      errors: fieldErrors,
    });
  }

  req.body = result.data;
  next();
};
