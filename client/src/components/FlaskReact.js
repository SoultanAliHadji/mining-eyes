import React, { useState, useEffect } from "react";
import "../App.css"

const FlaskReact = () => {
  const [data, setData] = useState([{}]);

  useEffect(() => {
    fetch("/members")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);
  return <div>
    <div>
        {(typeof data.members === 'undefined') ? (
          <p>Loading...</p>
        ) : (
          data.members.map((member, i) => (
            <p key={i}>{member}</p>
          ))
        )
        }
      </div>
  </div>;
};

export default FlaskReact;