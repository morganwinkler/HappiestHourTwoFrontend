/* eslint-disable react/prop-types */
import { useState } from "react";

export function BarNew(props) {
  const [formData, setFormData] = useState({ name: "", specials: "", location: "", imageUrl: "" });

  // updates the formData state when the input value changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onCreate(formData);
    setFormData({ name: "", specials: "", location: "", imageUrl: "" });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
        <input type="text" name="specials" placeholder="Specials" value={formData.specials} onChange={handleChange} />
        <input type="text" name="location" placeholder="Location" value={formData.location} onChange={handleChange} />
        <input type="text" name="imageUrl" placeholder="Image URL" value={formData.imageUrl} onChange={handleChange} />
        <button type="submit">Add New Bar</button>
      </form>
    </div>
  );
}
