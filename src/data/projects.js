// ============================================================
// PROJECTS DATA
// Add, remove, or edit projects here.
// ============================================================

const projects = [
  {
    id: "smart-accident-detection",
    featured: true,

    title: "Smart Accident Detection and Alert System",

    tagline:
      "IoT-based accident detection and emergency alert system using vibration sensing, GPS, and GSM.",

    problem:
    "Road accidents are often fatal not only because of the impact itself, but because emergency assistance may arrive too late. A person who is unconscious or unable to reach a phone may not be able to call for help.",

    overview:
      "An IoT-based accident detection and emergency alert system that detects sudden vibrations using the SW-420 sensor, activates an alert and provides a 10-second window to cancel a false alarm, and — if not cancelled — automatically sends an emergency SMS containing the detected GPS coordinates to a pre-set emergency contact.",

    howItWorks: [
      "The SW-420 vibration sensor continuously monitors for sudden shocks that may indicate an accident.",

      "When a possible accident is detected, the ESP32 activates the buzzer and starts a 10-second countdown, giving the rider an opportunity to cancel a false alarm.",

      "If the alert is not cancelled within the countdown period, the NEO-6M GPS module is used to obtain the current coordinates.",

      "The SIM800L GSM module sends an emergency SMS containing the location information to the configured emergency contact.",
    ],

    technologies: [
      "ESP32",
      "NEO-6M GPS",
      "SIM800L GSM",
      "SW-420 Vibration Sensor",
      "Buzzer",
      "Arduino IDE",
      "C/C++",
    ],

    features: [
      "Real-time vibration-based accident detection",
      "10-second false-alarm cancellation window",
      "Automatic GPS coordinate capture",
      "Emergency SMS alert through GSM",
      "Low-cost and portable IoT design",
    ],

    image: "public/projects/accident-detection.jpeg",

    github:
      "https://github.com/ipratyushkumar/smart-accident-detection",

    demo: "",
  },
];

export default projects;