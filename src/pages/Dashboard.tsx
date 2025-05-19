import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Modal,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  AppBar,
  Container,
  Toolbar,
  Tooltip,
  IconButton,
  ButtonGroup,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../Context/AppContext";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import { DarkModeOutlined, LightModeOutlined } from "@mui/icons-material";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LocalPostOfficeOutlinedIcon from "@mui/icons-material/LocalPostOfficeOutlined";
import LocationOnIcon from "@mui/icons-material/LocationOn";

import LogoutIcon from "@mui/icons-material/Logout";
import MonthlyTemperatureChart from "../components/MonthlyTemperatureChart";
import Weather from "../components/Weather";


const date = new Date();

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const dayName = days[date.getDay()];
const day = date.getDate();
const month = months[date.getMonth()];
const year = date.getFullYear();

let hours = date.getHours();
const minutes = date.getMinutes().toString().padStart(2, '0');
const ampm = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12;
hours = hours ? hours : 12; 
const formateDay = `${dayName}`
const formattedDate = ` ${day} ${month}, ${year} ${hours}:${minutes} ${ampm}`;



const Dashboard: React.FC = () => {
  const cities = [
    "Rasht",
    "Tehran",
    "Esfahan",
    "Shiraz",
    "Berlin",
    "London",
    "Liverpool",
    "Paris",
    "San Francisco",
    "New York",
    "Los Angeles",
  ];
  const {
    t,
    i18n: { dir },
  } = useTranslation();

  const {
    weatherData,
    setLightMode,
    setDarkMode,
    themeMode,
    language,
    changeLanguage,
    logout,
  } = useAppContext();
  const [openSettings, setOpenSettings] = React.useState(false);

  const handleOpenSettings = () => setOpenSettings(true);
  const handleCloseSettings = () => setOpenSettings(false);

  const [value, selectValue] = React.useState("");

  const handleChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    selectValue(event.target.value);
  };

  return (
    <div dir={dir()}>
      <AppBar sx={{ background: "#F3FAFE", padding: "5px 0" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <img src="./src/assets/images/weather-icon.png" />
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                color: "#3D4852",
                fontSize: "12px",
                textDecoration: "none",
              }}
            >
              {t("dashboard.title")}
            </Typography>

            <Typography
              variant="h5"
              noWrap
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                color: "#3D4852",
                fontSize: "12px",
                textDecoration: "none",
              }}
            >
              {t("dashboard.title")}
            </Typography>
            <Box
              sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            ></Box>
            <Box sx={{ display: "flex", gap: 2, width: "20vw" }}>
              <FormControl
                size="small"
                variant="outlined"
                fullWidth
                focused
                sx={{ outline: "#3D4852" }}
              >
                <InputLabel
                  sx={{
                    outline: "#3D4852",
                    color: "#3D4852",
                    background: "#FFF",
                    padding: " 0 5px",
                    left: "0",
                  }}
                  id="select-label"
                >
                  {t("dashboard.selectLabel")}
                </InputLabel>
                <Select
                  sx={{ color: "#3D4852" }}
                  labelId="select-label"
                  id="select-demo"
                  value={value}
                  label="Label"
                  onChange={handleChange}
                >
                  {
                    cities.map((city,index) => (
                      <MenuItem key={index} value={city}>{city}</MenuItem>
                    ))
                  }
                 
                </Select>

              </FormControl>

              <Tooltip title="Open settings">
                <IconButton
                  // onClick={}
                  sx={{
                    border: "1px solid #ccc",
                    borderRadius: "10px",
                    padding: 0,
                  }}
                >
                  <Button onClick={handleOpenSettings} sx={{ padding: 0 }}>
                    <SettingsOutlinedIcon sx={{ color: "#CCC" }} />
                  </Button>
                  <Modal open={openSettings} onClose={handleCloseSettings}>
                    <Dialog
                      open={openSettings}
                      onClose={handleCloseSettings}
                      maxWidth="xs"
                      sx={{
                        "& .MuiDialog-container": {
                          justifyContent: "flex-end",
                          alignItems: "flex-start",
                          marginTop: "50px",
                        },
                        "& .MuiPaper-root": {
                          margin: "16px",
                          borderRadius: "24px",
                          boxShadow: "-4px 1px 7px 3px gery",
                        },
                        "& .MuiBackdrop-root": {
                          backgroundColor: "transparent",
                        },
                      }}
                      // fullWidth
                    >
                      <DialogTitle sx={{ padding: "8px 24px" }}>
                        {t("settings.theme")}
                      </DialogTitle>
                      <DialogContent sx={{ paddingBottom: "0px" }}>
                        <ButtonGroup
                          sx={{
                            display: "flex",
                            mb: 2,
                            paddingY: "16px",
                            borderBottom: "1px solid #ccc",
                          }}
                        >
                          <Button
                            variant="outlined"
                            onClick={setLightMode}
                            sx={{
                              flex: 1,
                              gap: 1,
                              textTransform: "capitalize",
                            }}
                          >
                            <LightModeOutlined />
                            {t("settings.lightMode")}
                          </Button>
                          <Button
                            variant="outlined"
                            onClick={setDarkMode}
                            sx={{
                              flex: 1,
                              gap: 1,
                              textTransform: "capitalize",
                            }}
                          >
                            <DarkModeOutlined />
                            {t("settings.darkMode")}
                          </Button>
                        </ButtonGroup>
                        <Typography>{t("settings.language")}</Typography>
                        <ButtonGroup
                          sx={{
                            display: "flex",
                            mb: 2,
                            paddingY: "16px",
                            borderBottom: "1px solid #ccc",
                          }}
                        >
                          <Button
                            variant="outlined"
                            onClick={() => changeLanguage("en")}
                            sx={{
                              flex: 1,
                              gap: 1,
                              textTransform: "capitalize",
                            }}
                          >
                            {t("settings.en")}
                          </Button>
                          <Button
                            variant="outlined"
                            onClick={() => changeLanguage("fa")}
                            sx={{
                              flex: 1,
                              gap: 1,
                              textTransform: "capitalize",
                            }}
                          >
                            {t("settings.fa")}
                          </Button>
                        </ButtonGroup>
                      </DialogContent>
                      <DialogActions
                        sx={{
                          display: "flex",
                          justifyContent: "flex-start",
                          padding: "0  0 4px 16px",
                        }}
                      >
                        <Button onClick={logout} color="primary">
                          <LogoutIcon />
                          {t("dashboard.logout")}
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </Modal>
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Container sx={{ padding: "110px 0 40px 0", height: "450px" }}>
        {/* info data api */}
        {weatherData && (
          <Box
            sx={{ display: "flex", justifyContent: "space-between", gap: 3 }}
          >
            <Card
              sx={{
                maxWidth: 600,
                height: "100%",
                backgroundColor: "background.paper",
                borderRadius: 8,
                boxShadow: 1,
                padding: 2,
                width: "75%",
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    background: "#ccc",
                    borderRadius: 8,
                    padding: "5px",
                    width: "40%",
                  }}
                >
                  <LocationOnIcon sx={{ color: "#3D4852", mr: 1 }} />
                  <Typography variant="subtitle1" color="text.secondary">
                    {t("dashboard.weather")}
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <Typography variant="h6" color="text.primary">
                      {formateDay}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    {formattedDate}
                    </Typography>
                    <Typography variant="h4" color="#1976d2" sx={{ mt: 1 }}>
                      {weatherData.temperature}°C
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {t("dashboard.highLow", {
                        high: weatherData.high,
                        low: weatherData.low,
                      })}
                    </Typography>
                  </Box>
                  <Box textAlign="right">
                    <img
                      style={{ width: "100px" }}
                      src="./src/assets/images/cloudy.png"
                    />

                    <Typography
                      variant="h6"
                      color="text.primary"
                      sx={{ mt: 1 }}
                    >
                      Cloudy
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {t("dashboard.feelsLike")}: {weatherData.feelsLike}°C
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>

            <MonthlyTemperatureChart />
          </Box>
        )}

        {/* end info data api */}
      </Container>
      <Container
        sx={{
          background: "#E1E9EE",
          padding: 2,
          borderRadius: 6,
          boxShadow: "3px 5px 7px -3px #ccc",
        }}
      >
        <Typography
          sx={{
            color: "#003464",
            fontWeight: 600,
            padding: "10px 0 25px 25px",
          }}
        >
          {t("dashboard.weeks")}
        </Typography>
        <Container sx={{ display: "flex", gap: 2, overflowX: "clip" }}>
          <Weather
            day="Today"
            image="./src/assets/images/cloudy.png"
            temp={28}
          />
          <Weather day="Mon" image="./src/assets/images/cloudy.png" temp={31} />
          <Weather day="Tue" image="./src/assets/images/rainy.png" temp={12} />
          <Weather day="Wed" image="./src/assets/images/stormy.png" temp={18} />
          <Weather day="Thu" image="./src/assets/images/cloudy.png" temp={11} />
          <Weather day="Fri" image="./src/assets/images/sunny.png" temp={30} />
          <Weather day="Sat" image="./src/assets/images/rainy.png" temp={7} />
          <Weather day="Sun" image="./src/assets/images/sunny.png" temp={33} />
          <Weather day="Mon" image="./src/assets/images/stormy.png" temp={13} />
          <Weather day="Tue" image="./src/assets/images/sunny.png" temp={37} />
          <Weather day="Wen" image="./src/assets/images/sunny.png" temp={24} />
          <Weather day="Thu" image="./src/assets/images/rainy.png" temp={8} />
        </Container>
      </Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          // overflowX:"hidden",
          background:
            "linear-gradient(335deg,rgba(243, 250, 254, 1) 19%, rgba(204, 221, 221, 1) 50%, rgba(243, 250, 254, 1) 100%);",
          // width: "100%",
          marginTop: 3,
          padding: 3,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <img src="./src/assets/images/icon-nadinsoft.png" />
          <Typography color="#003464" sx={{ fontSize: "11px" }}>
            All rights of this site are reserved for Nadin Sadr Aria Engineering
            Company.
          </Typography>
        </Box>
        <Box sx={{ display: "flex", paddingRight: 6, gap: 8 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <LocalPostOfficeOutlinedIcon sx={{ color: "#003464" }} />
            <Typography color="#003464" sx={{ fontSize: "11px" }}>
              contact us : info@nadin.ir
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <CalendarMonthOutlinedIcon sx={{ color: "#003464" }} />
            <Typography color="#003464" sx={{ fontSize: "11px" }}>
              12:25 . Monday 23 December 2023
            </Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Dashboard;
