# WeatherApi

A Python-based Weather API project that fetches real-time weather information from external weather services and displays weather data in a structured and user-friendly format.

This project demonstrates API integration, HTTP request handling, JSON parsing, and backend application development using Python.

---

# Features

- Real-time weather information
- External Weather API integration
- Current temperature details
- City-based weather search
- JSON response handling
- HTTP request management
- Error handling workflows
- Lightweight project architecture
- Beginner-friendly API project
- Modular code structure

---

# Tech Stack

## Programming Language
- Python

## Libraries & Tools
- Requests
- JSON
- API Integration
- HTTP Requests

## Development Tools
- VS Code
- Git & GitHub
- Virtual Environments

---

# Project Structure

```bash
WeatherApi/
│
├── src/
│   ├── api/
│   ├── utils/
│   └── services/
│
├── main.py
├── requirements.txt
├── .env
└── README.md
```

---

# How It Works

The application:

1. Accepts a city/location input
2. Sends an API request to a weather service
3. Receives weather data in JSON format
4. Parses the response
5. Displays weather information to the user

---

# Weather Information Displayed

- Temperature
- Weather conditions
- Humidity
- Wind speed
- Feels-like temperature
- Atmospheric details
- Location details

---

# Installation

## 1. Clone Repository

```bash
git clone https://github.com/anil2502/WeatherApi.git
```

---

## 2. Navigate to Project

```bash
cd WeatherApi
```

---

## 3. Create Virtual Environment

### Windows

```bash
python -m venv weather-env
weather-env\Scripts\activate
```

### Linux / Mac

```bash
python3 -m venv weather-env
source weather-env/bin/activate
```

---

# Install Dependencies

```bash
pip install -r requirements.txt
```

---

# API Key Setup

Create a `.env` file:

```env
WEATHER_API_KEY=your_api_key
```

You can get a free API key from:

- OpenWeatherMap
- WeatherAPI
- RapidAPI Weather Services

---

# Running the Application

```bash
python main.py
```

---

# Example Workflow

## User Input

```bash
Enter city name: Hyderabad
```

## Example Output

```bash
Temperature: 32°C
Condition: Clear Sky
Humidity: 58%
Wind Speed: 12 km/h
```

---

# API Workflow

```text
User Input
    ↓
API Request
    ↓
JSON Response
    ↓
Data Parsing
    ↓
Weather Display
```

---

# Example Use Cases

- Weather dashboard projects
- API integration learning
- Backend development practice
- Real-time data applications
- Beginner Python projects
- CLI-based utility applications

---

# Future Improvements

- GUI integration
- Streamlit weather dashboard
- FastAPI backend version
- Multi-city weather tracking
- Weather forecasting
- Docker deployment
- Weather alerts system
- Geolocation support
- AI weather assistant integration

---

# Learning Outcomes

This project demonstrates:

- REST API integration
- JSON data parsing
- Python HTTP requests
- Environment variable handling
- API-based application development
- Backend programming fundamentals

---

# Contributing

Contributions are welcome.

## Steps

1. Fork the repository

2. Create a feature branch

```bash
git checkout -b feature-name
```

3. Commit changes

```bash
git commit -m "Added new feature"
```

4. Push branch

```bash
git push origin feature-name
```

5. Open a Pull Request

---

# License

This project is licensed under the MIT License.

---

# Author

## [Anil Kumar](https://github.com/anil2502)

AI/ML Engineer | Backend Developer | API Integration Enthusiast

---

# GitHub Repository

## [WeatherApi](https://github.com/anil2502/WeatherApi)

---

# Keywords

Weather API, Python, REST API, JSON Parsing, HTTP Requests, API Integration, Real-time Weather, Backend Development, Python Projects, Weather Dashboard, API Handling
