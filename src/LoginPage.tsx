import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
  Grid,
  styled,
  Paper,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useAppContext } from "./AppContext";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  boxShadow: "none",
  display: "flex",
  flexDirection: "column",
  ...theme.typography.body2,
  padding: theme.spacing(5),
  textAlign: "center",
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const LoginPage: React.FC = () => {
  const { t ,i18n :{dir}} = useTranslation();
  const { language, changeLanguage, login } = useAppContext();
  const [name, setName] = useState<string>("");

  return (
    <Box dir={dir()}
      sx={{
        
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "3%",
        width:"98vw",
        background: "transparent"
      }}
    >
      <Box
        sx={{
          boxShadow: "0 2px 7px 0px gray",
          borderRadius: "15px",
          width: "60%",
        }}
      >
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid size={6} sx={{background:"transparent", borderRadius:"15px 0 0 15px"}}>
            <Item  sx={{background:"transparent", borderRadius:"15px 0 0 15px"}}>
              <Typography sx={{ color: "#050F24",marginBottom:"10%" }} variant="h4" align="center">
                {t("login.title")}
              </Typography>
              <TextField
                fullWidth
                label={t("login.name")}
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
                margin="normal"
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => login(name)}
                sx={{ padding: "10px" ,marginTop:"50%"}}
              >
                {t("login.button")}
              </Button>
            </Item>
          </Grid>
          <Grid
            size={6}
            sx={{
              background: "#D3E1E7",
              height: "100%",
              position: "relative",
              borderRadius: "0 15px 15px 0",
              padding: ".4rem",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end",
              }}
            >
              <Box>
                <img
                  style={{ width: "250px" }}
                  src="./src/assets/images/Moon-cloud-mid-rain.png"
                />
              </Box>

              <Box>
                <img
                  style={{
                    width: "250px",
                    position: "absolute",
                    top: "25%",
                    left: "0%",
                  }}
                  src="./src/assets/images/Sun-cloud-angled-rain.png"
                />
              </Box>

              <Box>
                <img
                  style={{ width: "250px" }}
                  src="./src/assets/images/Moon-cloud-fast-wind.png"
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <FormControl 
        sx={{ marginTop: 4, marginBottom: 8, minWidth: 150 }}
        size="small"
        variant="standard"
      >
        <InputLabel>{t("login.language")}</InputLabel>
        <Select
          value={language}
          label={t("login.language")}
          onChange={(e) => changeLanguage(e.target.value as string)}
        >
          <MenuItem value="en">English</MenuItem>
          <MenuItem value="fa">فارسی</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default LoginPage;
