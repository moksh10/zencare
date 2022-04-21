import FormSection from "../FormSection/FormSection.js";
import ButtonSection from "../ButtonSection/ButtonSection.js";
import Table from "../Table/Table.js";
import QuerySection from "../QuerySection/QuerySection.js";
import "./container.css";
function Container({
  heading = "",
  title = "",
  queryInputBoxes = [],
  queryButtons = [],
  inputBoxes = [],
  textareas = [],
  selectboxes = [],
  tableData = [],
  tableButtons = [],
  buttons = [],
}) {
  const content = (
    <>
      <h1>{heading}</h1>
      <p>{title}</p>
      <QuerySection
        queryButtons={queryButtons}
        queryInputBoxes={queryInputBoxes}
      />
      <FormSection
        inputBoxes={inputBoxes}
        selectboxes={selectboxes}
        textareas={textareas}
      />
      <Table tableData={tableData} tableButtons={tableButtons} />
      <ButtonSection buttons={buttons} />
    </>
  );
  return <div className="container-main">{content}</div>;
}
export default Container;
