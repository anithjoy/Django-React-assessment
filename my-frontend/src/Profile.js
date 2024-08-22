import React, { useEffect, useState } from "react";

const Profile = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/user/")
      .then((response) => response.json())
      .then((data) => setUserData(data));
  }, []);

  return (
    <div>
      <h2>{userData.name}</h2>
      <p>{userData.bio}</p>
    </div>
  );
};

export default Profile;
