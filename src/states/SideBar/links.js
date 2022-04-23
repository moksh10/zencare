import {
  mdiAccountBox,
  mdiAccountSupervisorOutline,
  mdiCalendar,
  mdiCalendarPlus,
  mdiDoctor,
  mdiFile,
  mdiFilePlus,
  mdiPlusBox,
  mdiTable,
} from "@mdi/js";
export const nav = {
  admin: [
    { value: "Profile", icon: mdiAccountBox, color: "#b6b6b6" },
    { value: "Doctor", icon: mdiDoctor, color: "#00d25b" },
    { value: "Patient", icon: mdiTable, color: "#ffab00" },
    { value: "Admins", icon: mdiAccountSupervisorOutline, color: "#fc424a" },
    { value: "Appointments", icon: mdiCalendar, color: "#ffab00" },
    { value: "Add New Doctor", icon: mdiPlusBox, color: "#00d25b" },
    { value: "Add New Admin", icon: mdiPlusBox, color: "#fc424a" },
  ],
  doctor: [
    { value: "Profile", icon: mdiAccountBox, color: "#b6b6b6" },
    { value: "Doctor", icon: mdiDoctor, color: "#00d25b" },
    { value: "Appointments", icon: mdiCalendar, color: "#ffab00" },
    { value: "Medical Record", icon: mdiFile, color: "#0090e7" },
    { value: "Add New Medical Record", icon: mdiFilePlus, color: "#0090e7" },
  ],
  patient: [
    { value: "Profile", icon: mdiAccountBox, color: "#b6b6b6" },
    { value: "Doctor", icon: mdiDoctor, color: "#00d25b" },
    { value: "Appointments", icon: mdiCalendar, color: "#ffab00" },
    { value: "Medical Record", icon: mdiFile, color: "#0090e7" },
    { value: "Add New Appointment", icon: mdiCalendarPlus, color: "#ffab00" },
  ],
};
