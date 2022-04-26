import { mapValidator } from "./../validator/mapValidator.js";
export const validateFormData = async (data, entity) => {
  const schema = mapValidator(entity);
  const isValid = await schema.validate(data).catch(handleError);
  if (isValid.error) {
    return isValid;
  }
  return { error: false };
};
function handleError(err) {
  return { error: true, message: err.message };
}
