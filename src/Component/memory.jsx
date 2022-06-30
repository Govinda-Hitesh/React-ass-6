import React, { createContext, useState } from "react";

export const data = createContext();

const Memory = (props) => {
  const [students, setStudents] = useState([
    {
      Name: "Hitesh",
      Age: "23",
      Course: "DSA",
      Batch: "Feb",
      id: "1",
    },

    {
      Name: "Akash",
      Age: "24",
      Course: "Front End",
      Batch: "Jan",
      id: "2",
    },
    {
      Name: "Ishu",
      Age: "27",
      Course: "back End",
      Batch: "Jul",
      id: "3",
    },

    {
      Name: "Das",
      Age: "26",
      Course: "Cloud Computing",
      Batch: "Jun",
      id: "4",
    },
    {
      Name: "kartik",
      Age: "23",
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
