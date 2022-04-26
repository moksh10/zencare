import invalidateDoctor from "./../api/Doctor/invalidateDoctor";
export const invalidateMap = (entity) => {
  const entities = {
    doctor: invalidateDoctor,
  };
  return entities[entity];
};
