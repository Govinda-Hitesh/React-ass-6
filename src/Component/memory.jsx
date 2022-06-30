import React, { createContext, useState } from "react";

export const data = createContext();

const Memory = (props) => {
  const [students, setStudents] = useState([
    {
      Name: "Niraj",
      Age: "23",
      Course: "FullStack",
      Batch: "Febuary",
      id: "1",
    },

    {
      Name: "Shubham",
      Age: "27",
      Course: "Front End",
      Batch: "January",
      id: "2",
    },
    {
      Name: "Dhiraj",
      Age: "22",
      Course: "back End",
      Batch: "July",
      id: "3",
    },

    {
      Name: "Deepak",
      Age: "20",
      Course: "Cloud Computing",
      Batch: "June",
      id: "4",
    },
    {
      Name: "Tonso",
      Age: "28",
      Course: "data Analyst",
      Batch: "december",
      id: "5",
    },
  ]);
  return (
    <div>
      <data.Provider value={[students, setStudents]}>
        {props.children}
      </data.Provider>
    </div>
  );
};

export default Memory;