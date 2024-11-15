export const validateRequest = (schema) => (request, response, next) => {
    const { error } = schema.validate(request.body, { abortEarly: false });
    if (error) {
        const errors = error.details.map(detail => detail.message);
        return response.status(400).json({ error: errors });
    }
    next();
}