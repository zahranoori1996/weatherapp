import React, { createContext, useContext, useState, useEffect } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider, type Direction } from '@mui/material/styles';
import i18n from "../i18n";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface AppContextType {
  language: string;
  changeLanguage: (lang: string) => void;
  themeMode: 'light' | 'dark';
  setLightMode: () => void;
  setDarkMode: () => void;
  weatherData: WeatherData | null;
  isLoggedIn: boolean;
  login: (name: string) => void;
  logout: () => void;
  
}

interface WeatherData {
  temperature: number;
  weather: string;
  feelsLike: number;
  high: number;
  low: number;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<string>(localStorage.getItem('language') || 'en');
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>(
    (localStorage.getItem('themeMode') as 'light' | 'dark') || 'light'
  );
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(localStorage.getItem('isLoggedIn') === 'true');
  const navigate = useNavigate();

  useEffect(() => {
    i18n.changeLanguage(language);
    localStorage.setItem('language', language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem('themeMode', themeMode);
    document.body.style.backgroundColor = themeMode === 'dark' ? '#121212' : '#ffffff';
  }, [themeMode]);

  useEffect(() => {
    localStorage.setItem('isLoggedIn', isLoggedIn.toString());
    if (!isLoggedIn) navigate('/login');
  }, [isLoggedIn, navigate]);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const apiKey = '2ced6e9b1ec8a8de55a34dabb65c4e89'; 
        const city = 'new York';
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        const data = response.data;
        console.log(data)
        setWeatherData({
          temperature: Math.round(data.main.temp),
          weather: data.name,
          feelsLike: Math.round(data.main.feels_like),
          high: Math.round(data.main.temp_max),
          low: Math.round(data.main.temp_min),
        });
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };
    if (isLoggedIn) fetchWeather();
  }, [isLoggedIn]);

  const changeLanguage = (lang: string) => {
    setLanguage(lang);
  };

  const setLightMode = () => {
    setThemeMode('light');
  };

  const setDarkMode = () => {
    setThemeMode('dark');
  };

  const login = (name: string) => {
    if (name) {
      setIsLoggedIn(true);
      navigate('/dashboard');
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    navigate('/login');
  };

  const toggleTheme = () => {
    setThemeMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const direction: Direction = language === 'fa' ? 'rtl' : 'ltr';

  const theme = createTheme({
    direction,
    palette: {
      mode: themeMode,
      ...(themeMode === 'light'
        ? { background: { default: '#e0f2ff' }, text: { primary: '#000000' } }
        : { background: { default: '#121212' }, text: { primary: '#ffffff' } }),
    },
    typography: {
      fontFamily: [
        'Vazir', 
        'Roboto', 
        'sans-serif',
      ].join(','),
      h4: {
        fontSize: '1.5rem',
        fontWeight: 500,
      },
      body1: {
        fontSize: '1rem',
      },
    },
  });
  return (
    <AppContext.Provider
      value={{ language, changeLanguage, themeMode, setLightMode, setDarkMode, weatherData, isLoggedIn, login, logout }}
    >
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within an AppProvider');
  return context;
};