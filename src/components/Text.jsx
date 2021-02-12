// ---------- по новому стандарту импортировать Реакт в файлі кроме индекс не нужно
// import React from "react";

const NewComponent = (props) => (
  <div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione maxime
      totam adipisci tempore nam animi perferendis odio! Reiciendis,
      consequuntur accusantium.
    </p>
    {props.children};
  </div>
);

export default NewComponent;
