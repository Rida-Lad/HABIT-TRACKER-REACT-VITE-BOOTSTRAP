# 📊 HabitForge Analytics Dashboard

<div align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black&style=for-the-badge" alt="React">
  <img src="https://img.shields.io/badge/Chart.js-FF6384?logo=chart.js&logoColor=white&style=for-the-badge" alt="Chart.js">
  <img src="https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=white&style=for-the-badge" alt="Bootstrap">
</div>

## 🌟 Project Overview

HabitForge is a comprehensive habit tracking application designed to help users visualize, manage, and improve their daily routines through intuitive analytics and progress tracking.

## ✨ Key Features

### 📈 Multi-View Dashboard
- **Comprehensive Views**: Today, All Habits, Completed Habits
- **Real-time Progress Tracking**
- **Responsive Design**

### 🎯 Advanced Analytics
- Interactive Doughnut Charts
- Detailed Habit Completion Percentages
- Customizable Habit Management

## 🚀 Quick Start

1. Clone the repository
```bash
git clone <your-repo-url>
```

2. Install dependencies
```bash
npm install
npm install react-chartjs-2 chart.js bootstrap
```

3. Run the application
```bash
npm start
```

## 🛠️ Core Technologies

- **Frontend**: React
- **Charting**: Chart.js
- **Styling**: Bootstrap
- **State Management**: React Hooks

## 💡 Key Functionalities

| Feature | Description |
|---------|-------------|
| Real-time Tracking | Continuous habit progress updates |
| Local Storage | Automatic data persistence |
| Visual Analytics | Comprehensive progress charts |
| Responsive Design | Optimal experience across devices |

## 📊 Technical Highlights

- Dynamic Progress Calculation
- Browser Notification Integration
- Modular Component Architecture
- Intuitive User Interface

## 🔍 Implementation Details

### Progress Tracking
```javascript
const calculateCompletionPercentage = (habit) => {
  const totalDays = Math.ceil(
    (new Date(habit.endDate) - new Date(habit.startDate)) / 
    (1000 * 60 * 60 * 24) + 1
  );
  const completedDays = Object.keys(completionStatus[habit.habitName] || {}).length;
  return ((completedDays / totalDays) * 100).toFixed(2);
};
```


## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request


---

**Track Your Progress, Transform Your Life! 🚀**
