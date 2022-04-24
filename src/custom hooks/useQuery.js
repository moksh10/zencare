import { useFormContext } from "./../states/Global State/Form State/FormState.js";
export const useQuery = (entity, role) => {
  const { formData, handleInput } = useFormContext();
  if (role === "patient" && entity === "medicalRecord") {
    return {};
  }
  const query = {
    appointment: {
      inputBoxes: [
        {
          type: "date",
          name: "date",
          placeholder: "date",
          value: formData.date,
          handleInput: handleInput,
          isDisabled: false,
        }
      ],
      buttons: [
        {
          type: "blue",
          value: "Search",
          isDisabled: false,
          handleClick: null,
        },
      ],
    },
    medicalRecord: {
      inputBoxes: [
        {
          label: "Patient ID",
          type: "text",
          name: "patientID",
          placeholder: "Patient ID",
          value: formData.patientID,
          handleInput: handleInput,
          isDisabled: false,
        },
      ],
      buttons: [
        {
          type: "blue",
          value: "Search",
          isDisabled: false,
          handleClick: null,
        },
      ],
    },
  };
  const data = query[entity];
  return data;
};
