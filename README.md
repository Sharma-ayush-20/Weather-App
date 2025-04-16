
## 🌦️ Simple Weather Forecast App

A responsive and modern weather forecast web app built using **React** and **Context API**, with **WeatherAPI** integration. It also fetches weather data using the **user's current location**.

### 🚀 Features

- 🔍 Search weather by city name  
- 📍 Auto-detect current location weather  
- 🌡️ Shows temperature in Celsius  
- 🧭 Displays location name, region, and country  
- ⚡ Smooth UI with modern dark theme and animation  
- 🔁 Refresh button to reload the app

---

### 🛠️ Tech Stack

- **React.js**  
- **Context API**  
- **WeatherAPI**  
- **HTML5 + CSS3**  
- **Modern CSS Styling (dark theme)**  

---

### 📦 Installation

```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
npm install
npm run dev
```

### 📡 API Used

- [WeatherAPI.com](https://www.weatherapi.com/)  
> *You need to create a free account and replace your API key in `fetchapi.js`.*

```js
const baseUrl = 'https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY';
```

---

### 📁 Folder Structure 

```
/src
  ├── components
  │   ├── Button.js
  │   ├── Input.js
  │   └── WeatherCard.js
  ├── context
  │   └── Weather.js
  ├── api
  │   └── fetchapi.js
  ├── App.js
  └── App.css
```
