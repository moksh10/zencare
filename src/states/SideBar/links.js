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
    { value: "Profile", icon: mdiAccountBox, color: "#b6b6b6", path:"profile" },
    { value: "Doctors", icon: mdiDoctor, color: "#00d25b",path:"doctor" },
    { value: "Patients", icon: mdiTable, color: "#ffab00",path:"patient" },
    { value: "Admins", icon: mdiAccountSupervisorOutline, color: "#fc424a",path:"admin" },
    { value: "Appointments", icon: mdiCalendar, color: "#0090e7",path:"appointment" },
    { value: "Add New Doctor", icon: mdiPlusBox, color: "#00d25b",path:"newdoctor" },
    { value: "Add New Admin", icon: mdiPlusBox, color: "#fc424a",path:"newadmin" },
  ],
  doctor: [
    { value: "Profile", icon: mdiAccountBox, color: "#b6b6b6", path:"profile" },
    { value: "Doctors", icon: mdiDoctor, color: "#00d25b",path:"doctor" },
    { value: "Appointments", icon: mdiCalendar, color: "#ffab00",path:"appointment" },
    { value: "Add New Medical Record", icon: mdiFilePlus, color: "#fc424a",path:"newmedicalRecord" },
    { value: "Medical Record", icon: mdiFile, color: "#0090e7",path:"medicalRecord" },
  ],
  patient: [
    { value: "Profile", icon: mdiAccountBox, color: "#b6b6b6", path:"profile" },
    { value: "Medical Records", icon: mdiFile, color: "#0090e7",path:"medicalRecord" },
    { value: "Add New Appointment", icon: mdiCalendarPlus, color: "#ffab00",path:"newappointment" },
    { value: "Appointments", icon: mdiCalendar, color: "#fc424a",path:"appointment" },
    { value: "Doctors", icon: mdiDoctor, color: "#00d25b",path:"doctor" },
    
  ],
};
