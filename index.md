🛠️ InfraReactive Homepage: Technical Content Specification
​This document outlines the UI components and functional logic for the InfraReactive Dashboard, designed for the GitHub Pages Skills exercise.
​1. Header (System Controls)
​The header serves as the persistent control center for the application.
​Theme Toggle Button: A dynamic button that switches between Standard Mode (White/Black) and Infrared Mode (Deep Black/Neon Red).
​System Counter Display: Shows the real-time tally of "Reactive Events" relative to the system target (e.g., 0 / 5).
​2. Main Interface (The Dashboard)
​The primary work area where user interaction occurs.
​Primary Heading: "InfraReactive Dashboard" – styled in monospace for a high-tech terminal feel.
​The "Reactive" Contact Button:
​Normal State: A standard bordered button labeled "Contact Me."
​Reactive State: Triggered upon click. The button pulses with a red glow (in Dark Mode), plays a synthetic beep, and changes text to STATUS: REACTIVE.
​3. The Input Portal (Hidden Layer)
​A secondary interface that only appears once the system enters a "Reactive" state.
​Security Email Input: A text field for user data entry.
​Submit Info Button: * Increments the global counter.
​Saves a timestamped log entry to localStorage.
​Triggers a high-frequency confirmation tone.
​Returns the system to a "Normal" (non-reactive) state.
​4. Admin Zone (Restricted Access)
​A conditional section that is hidden from the DOM until the Target Value (5) is reached.
​Overload Warning: A pulsing red dashed-border box appearing only when the threshold is met.
​Full System Reset Button: A "Danger" styled button that wipes all localStorage (logs and counter) after a user confirmation prompt.
​5. System Activity Logs (Data Table)
​A historical readout of all interactions saved during the session.
​Export to CSV Button: A utility that generates a spreadsheet file locally for offline data analysis.
​The Logs Table:
| Column | Description |
| :--- | :--- |
| Event ID | Sequential ID for each contact (e.g., #1, #2). |
| Timestamp | Local system time of the interaction. |
| Status | Hardcoded to REACTIVE_SUCCESS. |
