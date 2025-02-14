import { useState } from "react";


interface DATA {
  id: number;
  value: number;
}

const data: DATA[] = [
  {
    id: 1,
    value: 2,
  },
  {
    id: 2,
    value: 5,
  },
  {
    id: 3,
    value: 7,
  },
  {
    id: 4,
    value: 8,
  },
  {
    id: 5,
    value: 9
  },
];

function Checkbox() {
  const [sum, setSum] = useState<number>(0);
  const handleCheckBox = (
   isChecked: boolean,
    value: number,
  ) => {
    if (isChecked) {
      setSum((prev) => prev + value);
    }else{
        setSum((prev) => prev - value);
    }
  };
  return (
    <div
    className="flex flex-col mx-5"
    >
      {data.map((e, i) => {
        return (
          <div style={{ display: "flex" }}>
            <input
              key={e.id}
              type={"checkbox"}
              onChange={(el) => handleCheckBox(el.target.checked, e.value)}
            />
            <p>{e.value}</p>
          </div>
        );
      })}
      <p>{`sum is ${sum}`}</p>
    </div>
  );
}

export default Checkbox;
