export default function Questions() {
  return (
    <div>
      <Question />
    </div>
  );
}

function Question() {
  return (
    <div>
      <div>
        <h1>Sarah Edo asks:</h1>
      </div>
      <div>
        <img src={"https://i.pravatar.cc/300"} alt={"Sarah"} />
        <div>
          <p>Would you rather</p>
          <p>find $50 yourself</p>
          <p>Or</p>
          <p>have your best friend find $500</p>
          <button>View Poll</button>
        </div>
      </div>
    </div>
  );
}
