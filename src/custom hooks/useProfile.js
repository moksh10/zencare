import { useFormContext } from "./../states/Global State/Form State/FormState.js";
export const useProfile = (role) => {
  const { formData, handleInput } = useFormContext();

  const profile = {
    patient: {
      buttons: [
        {
          value: "Save",
          handleClick: null,
          type: "purple",
          isDisabled: false,
          action: "put",
        },
        {
          value:"Logout",
          handleClick: null,
          type:"yellow",
          isDisabled: false,
          action:"logout"
        }
      ],
      inputBoxes: [
        {
          label: "Patient ID",
          type: "text",
          name: "patientID",
          placeholder: "Patient ID",
          value: formData.patientID,
          handleInput: handleInput,
          isDisabled: true,
        },
        {
          label: "Patient Name",
          type: "text",
          name: "patientName",
          placeholder: "Patient Name",
          value: formData.patientName,
          handleInput: handleInput,
          isDisabled: false,
        },
        {
          label: "Patient Email",
          type: "text",
          name: "patientEmail",
          placeholder: "Patient Email",
          value: formData.patientEmail,
          handleInput: handleInput,
          isDisabled: true,
        },
        {
          label: "Patient Contact",
          type: "tel",
          name: "patientContact",
          placeholder: "Patient Contact",
          value: formData.patientContact,
          handleInput: handleInput,
          isDisabled: false,
        },
        {
          label: "Patient Age",
          type: "number",
          name: "patientAge",
          placeholder: "Patient Age",
          value: formData.patientAge,
          handleInput: handleInput,
          isDisabled: false,
        },
        {
          label: "Patient Gender",
          type: "text",
          name: "patientGender",
          placeholder: "Patient Gender",
          value: formData.patientGender,
          handleInput: handleInput,
          isDisabled: false,
        },
        {
          label: "New Password",
          type: "password",
          name: "password",
          placeholder: "New Password",
          value: formData.password,
          handleInput: handleInput,
          isDisabled: false,
        },
      ],
      textareas: [
        {
          label: "Patient Address",
          name: "patientAddress",
          placeholder: "Patient Address",
          value: formData.patientAddress,
          handleInput: handleInput,
          isDisabled: false,
        },
      ],
    },
    doctor: {
      buttons: [
        {
          value: "Save",
          handleClick: null,
          type: "purple",
          isDisabled: false,
          action: "put",
        },
        {
          value:"Logout",
          handleClick: null,
          type:"yellow",
          isDisabled: false,
          action:"logout"
        }
      ],
      inputBoxes: [
        {
          label: "Doctor ID",
          type: "text",
          name: "doctorID",
          placeholder: "Doctor ID",
          value: formData.doctorID,
          handleInput: handleInput,
          isDisabled: true,
        },
        {
          label: "Doctor Name",
          type: "text",
          name: "doctorName",
          placeholder: "Doctor Name",
          value: formData.doctorName,
          handleInput: handleInput,
          isDisabled: false,
        },
        {
          label: "Doctor Email",
          type: "text",
          name: "doctorEmail",
          placeholder: "doctorEmail",
          value: formData.doctorEmail,
          handleInput: handleInput,
          isDisabled: true,
        },
        {
          label: "Specialist In",
          type: "text",
          name: "specialistIn",
          placeholder: "Specialist In",
          value: formData.specialistIn,
          handleInput: handleInput,
          isDisabled: false,
        },
        {
          label: "Shift Start Time",
          type: "text",
          name: "shiftStartTime",
          placeholder: "Shift Start Time",
          value: formData.shiftStartTime,
          handleInput: handleInput,
          isDisabled: false,
        },
        {
          label: "Shift End Time",
          type: "text",
          name: "shiftEndTime",
          placeholder: "Shift End Time",
          value: formData.shiftEndTime,
          handleInput: handleInput,
          isDisabled: false,
        },
        {
          label: "Doctor Contact",
          type: "tel",
          name: "doctorContact",
          placeholder: "Doctor Contact",
          value: formData.doctorContact,
          handleInput: handleInput,
          isDisabled: false,
        },

        {
          label: "New Password",
          type: "password",
          name: "password",
          placeholder: "New Password",
          value: formData.password,
          handleInput: handleInput,
          isDisabled: false,
        },
      ],
      textareas: [
        {
          label: "Doctor Address",
          name: "doctorAddress",
          placeholder: "Doctor Address",
          value: formData.doctorAddress,
          handleInput: handleInput,
          isDisabled: false,
        },
      ],
    },
    admin: {
      buttons: [
        {
          value: "Save",
          handleClick: null,
          type: "purple",
          isDisabled: false,
          action: "put",
        },
        {
          value:"Logout",
          handleClick: null,
          type:"yellow",
          isDisabled: false,
          action:"logout"
        }
      ],
      textareas: [],
      inputBoxes: [
        {
          label: "Admin ID",
          type: "text",
          name: "adminID",
          placeholder: "Admin ID",
          value: formData.adminID,
          handleInput: handleInput,
          isDisabled: true,
        },
        {
          label: "Admin Name",
          type: "text",
          name: "adminName",
          placeholder: "Admin Name",
          value: formData.adminName,
          handleInput: handleInput,
          isDisabled: false,
        },
        {
          label: "Admin Email",
          type: "text",
          name: "adminEmail",
          placeholder: "Admin Email",
          value: formData.adminEmail,
          handleInput: handleInput,
          isDisabled: true,
        },
        {
          label: "Admin Contact",
          type: "tel",
          name: "adminContact",
          placeholder: "Admin Contact",
          value: formData.adminContact,
          handleInput: handleInput,
          isDisabled: false,
        },
        {
          label: "New Password",
          type: "password",
          name: "password",
          placeholder: "New Password",
          value: formData.password,
          handleInput: handleInput,
          isDisabled: false,
        },
      ],
    },
  };
  const data = profile[role];
  return data;
};
