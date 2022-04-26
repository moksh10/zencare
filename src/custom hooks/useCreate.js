import { useFormContext } from "./../states/Global State/Form State/FormState.js";
export const useCreate = (entity, role) => {
  const { formData, handleInput } = useFormContext();
  const data = {
    appointment: {
      buttons: [
        {
          value:"Save",
          action:"post",
          handleClick: null,
          type: "purple",
          isDisabled: false,
          
        },
      ],
      inputBoxes: [
        {
          label: "Appointment Date",
          type: "date",
          name: "appointmentDate",
          placeholder: "Appointment Date",
          value: formData.appointmentDate,
          handleInput: handleInput,
          isDisabled: false,
        },
        {
          label: "Appointment Status",
          type: "text",
          name: "appointmentStatus",
          placeholder: "Appointment Status",
          value: formData.appointmentStatus,
          handleInput: handleInput,
          isDisabled: false,
        },
      ],
      selectboxes: [
        {
          label: "Choose Doctor",
          name: "doctorID",
          value: formData.doctorID,
          handleInput: handleInput,
          options: formData.doctorList,
        },
      ],
      textareas: [
        {
          label: "Health Problem",
          name: "healthProblem",
          placeholder: "Health Problem",
          value: formData.healthProblem,
          handleInput: handleInput,
          isDisabled: false,
        },
      ],
    },
    doctor: {
      buttons: [
        {
          value:"Save",
          action:"post",
          handleClick: null,
          type: "purple",
          isDisabled: false,
        },
      ],
      inputBoxes: [
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
          isDisabled: false,
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
    medicalRecord: {
      buttons: [
        {
          value:"Save",
          action:"post",
          handleClick: null,
          type: "purple",
          isDisabled: false,
        },
      ],
      inputBoxes: [
        {
          label: "Medical Record Date",
          type: "date",
          name: "medicalRecordDate",
          placeholder: "Medical Record Date",
          value: formData.medicalRecordDate,
          handleInput: handleInput,
          isDisabled: false,
        },
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
      textareas: [
        {
          label: "Medical Record Diagnosis",
          name: "medicalRecordDiagnosis",
          placeholder: "Medical Record Diagnosis",
          value: formData.medicalRecordDiagnosis,
          handleInput: handleInput,
          isDisabled: false,
        },
        {
          label: "Medical Record Drugs",
          name: "medicalRecordDrugs",
          placeholder: "Medical Record Drugs",
          value: formData.medicalRecordDrugs,
          handleInput: handleInput,
          isDisabled: false,
        },
      ],
    },
    admin: {
      buttons: [
        {
          value:"Save",
          action:"post",
          handleClick: null,
          type: "purple",
          isDisabled: false,
        },
      ],
      textareas: [],
      inputBoxes: [
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
          isDisabled: false,
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
  const result = data[entity];
  return result;
};
