import FormSection from "../FormSection/FormSection.js";
import ButtonSection from "../ButtonSection/ButtonSection.js";
import Table from "../Table/Table.js";
import QuerySection from "../QuerySection/QuerySection.js";
import "./container.css";
function Container({ inputBoxes, buttons, textareas, formHeading, formTitle, select }) {
  // const container = (
  //   <>
  //     <FormSection inputBoxes={inputBoxes} textareas={textareas} />
  //     <ButtonSection buttons={buttons} />
  //   </>
  // );
  const data = {
    heading: [
      "Name",
      "Email",
      "Phone",
      "Address",
      "Specialist In",
      "Shift Start",
      "Shift End",
    ],
    content: [
      {
        name: "Dr. Johnny Sins",
        email: "johnny@gmail.com",
        phone: "9419120011",
        address:
          "Building 420, guidfkaehdieabyfibaeyivdyeshvfukejsfbukejfue uteav euavd7euavd euafvteuavfd eaufdvue fuefdvtue ufdxhhxiufbdbfdx fdxLane 7, Bagga Road, Delhi",
        specialistIn: "Pediatrician",
        shiftStart: "9:00 am",
        shiftEnd: "1:00 pm",
      },
      {
        name: "Dr. Johnny Sins",
        email: "johnny@gmail.com",
        phone: "9419120011",
        address: "Building 420, Lane 7, Bagga Road, Delhi",
        specialistIn: "Pediatrician",
        shiftStart: "9:00 am",
        shiftEnd: "1:00 pm",
      },
      {
        name: "Dr. Johnny Sins",
        email: "johnny@gmail.com",
        phone: "9419120011",
        address: "Building 420, Lane 7, Bagga Road, Delhi",
        specialistIn: "Pediatrician",
        shiftStart: "9:00 am",
        shiftEnd: "1:00 pm",
      },
      {
        name: "Dr. Johnny Sins",
        email: "johnny@gmail.com",
        phone: "9419120011",
        address: "Building 420, Lane 7, Bagga Road, Delhi",
        specialistIn: "Pediatrician",
        shiftStart: "9:00 am",
        shiftEnd: "1:00 pm",
      },
      {
        name: "Dr. Johnny Sins",
        email: "johnny@gmail.com",
        phone: "9419120011",
        address: "Building 420, Lane 7, Bagga Road, Delhi",
        specialistIn: "Pediatrician",
        shiftStart: "9:00 am",
        shiftEnd: "1:00 pm",
      },
      {
        name: "Dr. Johnny Sins",
        email: "johnny@gmail.com",
        phone: "9419120011",
        address: "Building 420, Lane 7, Bagga Road, Delhi",
        specialistIn: "Pediatrician",
        shiftStart: "9:00 am",
        shiftEnd: "1:00 pm",
      },
      {
        name: "Dr. Johnny Sins",
        email: "johnny@gmail.com",
        phone: "9419120011",
        address: "Building 420, Lane 7, Bagga Road, Delhi",
        specialistIn: "Pediatrician",
        shiftStart: "9:00 am",
        shiftEnd: "1:00 pm",
      },
      
      {
        name: "Dr. Johnny Sins",
        email: "johnny@gmail.com",
        phone: "9419120011",
        address: "Building 420, Lane 7, Bagga Road, Delhi",
        specialistIn: "Pediatrician",
        shiftStart: "9:00 am",
        shiftEnd: "1:00 pm",
      },
      {
        name: "Dr. Johnny Sins",
        email: "johnny@gmail.com",
        phone: "9419120011",
        address: "Building 420, Lane 7, Bagga Road, Delhi",
        specialistIn: "Pediatrician",
        shiftStart: "9:00 am",
        shiftEnd: "1:00 pm",
      },
      {
        name: "Dr. Johnny Sins",
        email: "johnny@gmail.com",
        phone: "9419120011",
        address: "Building 420, Lane 7, Bagga Road, Delhi",
        specialistIn: "Pediatrician",
        shiftStart: "9:00 am",
        shiftEnd: "1:00 pm",
      },
      {
        name: "Dr. Johnny Sins",
        email: "johnny@gmail.com",
        phone: "9419120011",
        address: "Building 420, Lane 7, Bagga Road, Delhi",
        specialistIn: "Pediatrician",
        shiftStart: "9:00 am",
        shiftEnd: "1:00 pm",
      },
    ],
  };
  const content = (
    <>
      <h1>{formHeading}</h1>
      <p>{formTitle}</p>
      <FormSection inputBoxes={inputBoxes}  textareas={textareas} select={select}/>
      <ButtonSection buttons={buttons} />
     
    </>
  );
  return <div className="container-main">{content}</div>;
}
export default Container;
// eslint-disable-next-line no-lone-blocks
{/* <QuerySection button={buttons[0]} inputBox={inputBoxes[0]} />
      <Table data={data} buttons={buttons} />
      <ButtonSection buttons={buttons}/> */}
      // <FormSection inputBoxes={inputBoxes}  textareas={textareas}/>
      // <ButtonSection buttons={buttons}/>
     