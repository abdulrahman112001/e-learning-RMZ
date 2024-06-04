import { Button, FormControlLabel, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import { Link } from "react-router-dom";
import BaseInputField from "../../molecules/Form/BaseInputField";

function MainData() {
  const [rememberMe, setRememberMe] = useState<boolean>(true);
  return (
    <div>
      <div>
        <BaseInputField
          label="name"
          name="name"
          placeholder="name"
          type="text"
        />
      </div>
      <div>
        <BaseInputField
          label="email"
          name="email"
          placeholder="email"
          type="email"
        />
      </div>
      <div>
        <BaseInputField
          label="phone"
          name="phone"
          placeholder="phone"
          type="text"
        />
      </div>
      <div>
        <BaseInputField
          label="password"
          name="password"
          placeholder="password"
          type="password"
        />
      </div>
      <div>
        <BaseInputField
          label="password confirmation"
          name="password_confirmation"
          placeholder="password confirmation"
          type="password"
        />
      </div>
      <Button
        fullWidth
        size="large"
        type="submit"
        variant="contained"
        sx={{ mt: 7 }}
      >
        register
      </Button>
    </div>
  );
}

export default MainData;
