import React, { useEffect, useState } from "react";

const Project = () => {
  const [projectData, setProjectData] = useState({});

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/project/")
      .then((response) => response.json())
      .then((data) => setProjectData(data));
  }, []);

  return (
    <div>
      <h2>{projectData.project}</h2>
      <p>{projectData.description}</p>
    </div>
  );
};

export default Project;
