const Form = (props) => (
  <div>
    <label htmlFor="trololo">
      <input type="text" id="trololo" placeholder="Enter name"></input>
    </label>
    <button type="button" onClick={props.sayHello}>
      Push me
    </button>
  </div>
);

export default Form;
