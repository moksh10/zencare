import { useFormContext } from "./../states/Global State/Form State/FormState.js";
export const useInfo = (entity, role) => {
  const { formData, handleInput } = useFormContext();
  const entities = {
    medicalRecord: {
      buttons:
        role === "doctor"
          ? [
              {
                value: "Delete",
                handleClick: null,
                type: "red",
                isDisabled: false,
                action: "delete",
              },
            ]
          : [],
      inputBoxes: [
        {
          label: "Medical Record ID",
          type: "text",
          name: "medicalRecordID",
          placeholder: "Medical Record ID",
          value: formData.medicalRecordID,
          handleInput: handleInput,
          isDisabled: true,
        },
        {
          label: "Medical Record Date",
          type: "date",
          name: "medicalRecordDate",
          placeholder: "Medical Record Date",
          value: formData.medicalRecordDate,
          handleInput: handleInput,
          isDisabled: true,
        },
        {
          label: "Patient Name",
          type: "text",
          name: "patientName",
          placeholder: "Patient Name",
          value: formData.patient
            ? formData.patient.patientName
            : formData.patient,
          handleInput: handleInput,
          isDisabled: true,
        },
        {
          label: "Doctor Name",
          type: "text",
          name: "doctorName",
          placeholder: "Doctor Name",
          value: formData.doctor ? formData.doctor.doctorName : formData.doctor,
          handleInput: handleInput,
          isDisabled: true,
        },
      ],
      textareas: [
        {
          label: "Medical Record Diagnosis",
          name: "medicalRecordDiagnosis",
          placeholder: "Medical Record Diagnosis",
          value: formData.medicalRecordDiagnosis,
          handleInput: handleInput,
          isDisabled: true,
        },
        {
          label: "Medical Record Drugs",
          name: "medicalRecordDrugs",
          placeholder: "Medical Record Drugs",
          value: formData.medicalRecordDrugs,
          handleInput: handleInput,
          isDisabled: true,
        },
      ],
    },
    appointment: {
      buttons:
        role === "patient"
          ? [
              {
                value: "Delete",
                handleClick: null,
                type: "red",
                isDisabled: false,
                action: "delete",
              },
            ]
          : [
              {
                value: "Accept",
                handleClick: null,
                type: "green",
                isDisabled: false,
                action: "appointment",
              },
              {
                value: "Reject",
                handleClick: null,
                type: "yellow",
                isDisabled: false,
                action: "appointment",
              },
              {
                value: "Completed",
                handleClick: null,
                type: "blue",
                isDisabled: false,
                action: "appointment",
              },

              {
                value: "Delete",
                handleClick: null,
                type: "red",
                isDisabled: false,
                action: "delete",
              },
            ],
      inputBoxes: [
        {
          label: "Appointment ID",
          type: "text",
          name: "appointmentID",
          placeholder: "Appointment ID",
          value: formData.appointmentID,
          handleInput: handleInput,
          isDisabled: true,
        },

        {
          label: "Appointment Date",
          type: "date",
          name: "appointmentDate",
          placeholder: "Appointment Date",
          value: formData.appointmentDate,
          handleInput: handleInput,
          isDisabled: true,
        },
        {
          label: "Appointment Status",
          type: "text",
          name: "appointmentStatus",
          placeholder: "Appointment Status",
          value: formData.appointmentStatus,
          handleInput: handleInput,
          isDisabled: true,
        },
        {
          label: "Patient Name",
          type: "text",
          name: "patientName",
          placeholder: "Patient Name",
          value: formData.patient
            ? formData.patient.patientName
            : formData.patient,
          handleInput: handleInput,
          isDisabled: true,
        },

        {
          label: "Patient Age",
          type: "number",
          name: "patientAge",
          placeholder: "Patient Age",
          value: formData.patient
            ? formData.patient.patientAge
            : formData.patient,
          handleInput: handleInput,
          isDisabled: true,
        },
        {
          label: "Doctor Name",
          type: "text",
          name: "doctorName",
          placeholder: "Doctor Name",
          value: formData.doctor ? formData.doctor.doctorName : formData.doctor,
          handleInput: handleInput,
          isDisabled: true,
        },
      ],
      textareas: [
        {
          label: "Health Problem",
          name: "healthProblem",
          placeholder: "Health Problem",
          value: formData.healthProblem,
          handleInput: handleInput,
          isDisabled: true,
        },
      ],
    },
    patient: {
      buttons:
        role === "admin"
          ? [
              {
                value: "Delete",
                handleClick: null,
                type: "red",
                isDisabled: false,
                action: "delete",
              },
            ]
          : [],
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
          isDisabled: true,
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
          isDisabled: true,
        },
        {
          label: "Patient Age",
          type: "number",
          name: "patientAge",
          placeholder: "Patient Age",
          value: formData.patientAge,
          handleInput: handleInput,
          isDisabled: true,
        },
        {
          label: "Patient Gender",
          type: "text",
          name: "patientGender",
          placeholder: "Patient Gender",
          value: formData.patientGender,
          handleInput: handleInput,
          isDisabled: true,
        },
      ],
      textareas: [
        {
          label: "Patient Address",
          name: "patientAddress",
          placeholder: "Patient Address",
          value: formData.patientAddress,
          handleInput: handleInput,
          isDisabled: true,
        },
      ],
    },
    doctor: {
      buttons:
        role === "admin"
          ? [
              {
                value: "Invalidate",
                handleClick: null,
                type: "yellow",
                isDisabled: false,
                action: "invalidate",
              },
              {
                value: "Delete",
                handleClick: null,
                type: "red",
                isDisabled: false,
                action: "delete",
              },
            ]
          : [],
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
          isDisabled: true,
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
          isDisabled: true,
        },
        {
          label: "Shift Start Time",
          type: "text",
          name: "shiftStartTime",
          placeholder: "Shift Start Time",
          value: formData.shiftStartTime,
          handleInput: handleInput,
          isDisabled: true,
        },
        {
          label: "Shift End Time",
          type: "text",
          name: "shiftEndTime",
          placeholder: "Shift End Time",
          value: formData.shiftEndTime,
          handleInput: handleInput,
          isDisabled: true,
        },
        {
          label: "Doctor Contact",
          type: "tel",
          name: "doctorContact",
          placeholder: "Doctor Contact",
          value: formData.doctorContact,
          handleInput: handleInput,
          isDisabled: true,
        },
      ],
      textareas: [
        {
          label: "Doctor Address",
          name: "doctorAddress",
          placeholder: "Doctor Address",
          value: formData.doctorAddress,
          handleInput: handleInput,
          isDisabled: true,
        },
      ],
    },
    admin: {
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
          isDisabled: true,
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
          isDisabled: true,
        },
      ],
    },
  };

  const data = entities[entity];
  return data;
};
