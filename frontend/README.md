# Skilline Frontend 

An intuitive and feature-rich frontend for Skilline, a platform designed to revolutionize the educational experience. This project provides a user-friendly interface for accessing various educational tools, resources, and functionalities. It aims to bridge the gap between physical classrooms and virtual learning environments, offering a seamless and engaging experience for both teachers and students.

##  Live Demo

Check out the live project here: [Skilline-Clone](https://skill-line-clone.vercel.app/)

##  Key Features

- **Theme Support**: Offers both light and dark mode for comfortable viewing in any environment. ☀️🌙
- **Landing Page Sections**: Includes multiple sections showcasing the platform's features, integrations, and benefits. 🖼️
- **Trusted Companies Section**: Displays logos of trusted companies to build credibility. ✅
- **Integration Highlights**: Showcases integrations with other educational tools and platforms. 🔗
- **Virtual Classroom Comparison**: Compares the software to a physical classroom, highlighting its capabilities. 🏫
- **Mobile-Friendly Navigation**: Implements a responsive navigation menu for seamless access on any device. 📱
- **News and Resources**: Displays the latest news and resources related to Skilline. 📰
- **Teacher-Focused Design**: Emphasizes the teacher's experience and ease of use with a dedicated "Podium space." 🧑‍🏫
- **All-In-One Cloud Software**: Promotes the software as a comprehensive solution for schools and offices. ☁️

##  Tech Stack

- **Frontend**:
    - React
- **Styling**:
    - Tailwind CSS
- **Icons**:
    - lucide-react

##  Getting Started

Follow these steps to get the project up and running on your local machine.

### Prerequisites

- Node.js (version >= 16)
- npm or yarn

### Installation

1.  Clone the repository:

    ```bash
    git clone <repository_url>
    cd frontend
    ```

2.  Install dependencies:

    ```bash
    npm install # or yarn install
    ```

### Running Locally

1.  Start the development server:

    ```bash
    npm run dev # or yarn dev
    ```

    This will start the Vite development server, and you can access the application in your browser at the address provided (usually `http://localhost:5173`).

## 📂 Project Structure

```
frontend/
├── public/                      # Static assets (images, etc.)
├── src/                         # Source code
│   ├── App.jsx                  # Main application component
│   ├── main.jsx                 # Entry point of the React application
│   ├── context/                 # Contexts for managing application state
│   │   └── ThemeContext.jsx     # Theme context for light/dark mode
│   ├── pages/                   # Individual page components
│   │   ├── Footer.jsx           # Footer component
│   │   ├── Header.jsx           # Header component
│   │   ├── Page3.jsx            # Page 3 component
│   │   ├── Page4grid.jsx        # Page 4 component (grid layout)
|   |   ├── Header.css           # CSS file of header   
│   │   ├── Page5.jsx            # Page 5 component
│   │   ├── Page6.jsx            # Page 6 component
│   │   └── Pagetwo.jsx          # Page 2 component
│   ├── App.css                  # Styles for the App component
│   └── index.css                # Global styles
├── vite.config.js             # Vite configuration file
├── package.json               # Project metadata and dependencies
├── .eslintrc.cjs              # ESLint configuration
└── ...
```

##  Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Make your changes and commit them with descriptive messages.
4.  Push your changes to your fork.
5.  Submit a pull request.