import "./signup.css";
import Container from "./../../Generic/Container/Container.js"
function Signup() {
  const buttons = [
    { type: "blue", value: "View", isDisabled: false },
    {  type: "red", value: "Delete", isDisabled: false },
  ];
  const inputBoxes = [
    {
      label: "Email",
      isDisabled: false,
      name: "Email",
      placeholder: "Email",
      type: "date",
      value: "Something",
    },
    {
      label: "Password",
      isDisabled: false,
      name: "Password",
      placeholder: "Password",
      type: "password",
      value: "",
    },
    {
      label: "Password",
      isDisabled: false,
      name: "Password",
      placeholder: "Password",
      type: "password",
      value: "",
    },
    {
      label: "Phone",
      isDisabled: false,
      name: "Phone",
      placeholder: "Phone",
      type: "text",
      value: "Something",
    },
    {
      label: "Appointment Date",
      isDisabled: false,
      name: "Phone",
      placeholder: "Appointment Date",
      type: "date",
      value: "Something",
    },
    {
      label: "Medical Record Date",
      isDisabled: false,
      name: "Phone",
      placeholder: "Medical Record Date",
      type: "date",
      value: "Something",
    },
  ];
  const select = [
    {
      label: "Choose Doctor",

      options: [
        {
          label: "Apple",

          value: "apple",
        },

        {
          label: "Mango",

          value: "mango",
        },

        {
          label: "Banana",

          value: "banana",
        },

        {
          label: "Pineapple",

          value: "pineapple",
        },
      ],
    },
  ];
  const textareas = [
    {
      label: "Appointment Status",
      isDisabled: true,
      name: "Address",
      placeholder: "Address",
      type: "text",
      value:
        "Something is defuibj f duiaebk ffbiuaebkj fbfuik eaf ieaf iekafi eakf eyiafbieafbie fbeabfieaf aeifbiaebf ",
    },
    {
      label: "Medical Record Drugs",
      isDisabled: true,
      name: "Address",
      placeholder: "Address",
      type: "text",
      value:
        "Something is defuibj f duiaebk ffbiuaebkj fbfuik eaf ieaf iekafi eakf eyiafbieafbie fbeabfieaf aeifbiaebf ",
    },
  ];
  return (
    <div className="signup-body">
      <Container
        formHeading="Zencare"
        formTitle="Register Yourself!"
        inputBoxes={inputBoxes}
        buttons={buttons}
        textareas={textareas}
        select={select}
      />
    </div>
  );
}
export default Signup;
