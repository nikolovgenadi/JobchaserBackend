import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store";
import { toggleLevel, toggleRole } from "./filterSlice";

const LEVELS = ["Junior", "Midweight", "Senior"];
const ROLES = ["Frontend", "Backend", "Fullstack"];

export default function FilterCheckboxes() {
  const dispatch = useDispatch();
  const { levels, roles } = useSelector((state: RootState) => state.filters);

  return (
    <div style={{ margin: "1rem 0" }}>
      <div>
        <strong>Level:</strong>
        {LEVELS.map((level) => (
          <label key={level} style={{ marginLeft: 8 }}>
            <input
              type="checkbox"
              checked={levels.includes(level)}
              onChange={() => dispatch(toggleLevel(level))}
            />
            {level}
          </label>
        ))}
      </div>
      <div>
        <strong>Role:</strong>
        {ROLES.map((role) => (
          <label key={role} style={{ marginLeft: 8 }}>
            <input
              type="checkbox"
              checked={roles.includes(role)}
              onChange={() => dispatch(toggleRole(role))}
            />
            {role}
          </label>
        ))}
      </div>
    </div>
  );
}