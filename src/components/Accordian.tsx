import React, { useState } from "react";
import "../accordian.css";

const Accordian = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const data = [
    {
      question: "Question 1",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor sequi provident, error, vero hic ipsam reprehenderit doloremque, aliquam quis fugiat deleniti! Praesentium, rerum! Deleniti perspiciatis nihil voluptatibus pariatur quibusdam possimus nobis omnis earum qui aperiam? Voluptatibus nesciunt, ducimus maxime excepturi obcaecati iure porro suscipit, incidunt ipsam illum nulla deserunt voluptatum voluptatem asperiores adipisci. Vitae eos unde rerum, ullam quod quibusdam consequuntur nulla aspernatur sequi eum officia modi maiores quia iusto repudiandae distinctio! Dolorum minima quia esse ipsa. Consequuntur nihil qui nesciunt dolorem nemo suscipit nulla id asperiores voluptatum autem, quia eaque corrupti recusandae rerum quod aliquam vitae ullam facere.",
    },
    {
      question: "Question 2",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor sequi provident, error, vero hic ipsam reprehenderit doloremque, aliquam quis fugiat deleniti! Praesentium, rerum! Deleniti perspiciatis nihil voluptatibus pariatur quibusdam possimus nobis omnis earum qui aperiam? Voluptatibus nesciunt, ducimus maxime excepturi obcaecati iure porro suscipit, incidunt ipsam illum nulla deserunt voluptatum voluptatem asperiores adipisci. Vitae eos unde rerum, ullam quod quibusdam consequuntur nulla aspernatur sequi eum officia modi maiores quia iusto repudiandae distinctio! Dolorum minima quia esse ipsa. Consequuntur nihil qui nesciunt dolorem nemo suscipit nulla id asperiores voluptatum autem, quia eaque corrupti recusandae rerum quod aliquam vitae ullam facere.",
    },
    {
      question: "Question 3",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor sequi provident, error, vero hic ipsam reprehenderit doloremque, aliquam quis fugiat deleniti! Praesentium, rerum! Deleniti perspiciatis nihil voluptatibus pariatur quibusdam possimus nobis omnis earum qui aperiam? Voluptatibus nesciunt, ducimus maxime excepturi obcaecati iure porro suscipit, incidunt ipsam illum nulla deserunt voluptatum voluptatem asperiores adipisci. Vitae eos unde rerum, ullam quod quibusdam consequuntur nulla aspernatur sequi eum officia modi maiores quia iusto repudiandae distinctio! Dolorum minima quia esse ipsa. Consequuntur nihil qui nesciunt dolorem nemo suscipit nulla id asperiores voluptatum autem, quia eaque corrupti recusandae rerum quod aliquam vitae ullam facere.",
    },
    {
      question: "Question 4",
      answer:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolor sequi provident, error, vero hic ipsam reprehenderit doloremque, aliquam quis fugiat deleniti! Praesentium, rerum! Deleniti perspiciatis nihil voluptatibus pariatur quibusdam possimus nobis omnis earum qui aperiam? Voluptatibus nesciunt, ducimus maxime excepturi obcaecati iure porro suscipit, incidunt ipsam illum nulla deserunt voluptatum voluptatem asperiores adipisci. Vitae eos unde rerum, ullam quod quibusdam consequuntur nulla aspernatur sequi eum officia modi maiores quia iusto repudiandae distinctio! Dolorum minima quia esse ipsa. Consequuntur nihil qui nesciunt dolorem nemo suscipit nulla id asperiores voluptatum autem, quia eaque corrupti recusandae rerum quod aliquam vitae ullam facere.",
    },
  ];

  const toggle = (i: number) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <div className="wrapper">
      <div className="accordian">
        {data.map((t: any, i: number) => {
          return (
            <div className="item" key={i}>
              <div className="title" onClick={() => toggle(i)}>
                <h2>{t.question}</h2>
                <span>{selected === i ? '-' : '+'}</span>
              </div>
              <div className={`${selected === i ? "content show" : "content"} `}>
                {t.answer}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accordian;
