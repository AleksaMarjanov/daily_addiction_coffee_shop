import React, {useState} from "react";
import AppWrap from "../src/wrapper/AppWrap";
import MotionWrap from "../src/wrapper/MotionWrap";

const Contact = () => {
  const [form, setForm] = useState({
    fullName,
    email,
    message
  })

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2 className="text-3xl font-semibold">Contact Us</h2>
      <div className="flex flex-col mt-5 justify-center items-center border border-b-2 border-gray-300">
        <form onSubmit={handleSubmit}>
          <input type="text" name="fullName" placeholder="Jane Doe" value={fullName} required />
          <input
            type="email"
            name="email"
            placeholder="janedoe@gmail.com"
            value={email}
            required
          />
          <button type="button" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppWrap(MotionWrap(Contact, "contact"));
