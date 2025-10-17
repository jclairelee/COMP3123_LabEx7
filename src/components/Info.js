import React from "react";

export default function Info({ studentId, name, college }) {
  return (
    <>
      <p className="line">{studentId}</p>
      <p className="line">{name}</p>
      <p className="college">{college}</p>
    </>
  );
}
