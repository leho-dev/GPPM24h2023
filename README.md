## GPPM24h Project Documentation

This project is a Unity-based application that brings chemistry to life through augmented reality. Users can interact with 3D models of chemical elements and explore their properties using image recognition. It features both a Unity game engine component and a React-based web interface.

### Unity Engine Component

**Purpose:** To handle AR functionality, element interactions, and scene management.

**Inputs:**
- **Object Library:** A list of Unity GameObjects representing 3D models of chemical elements.

**Outputs:**
- **AR Session Origin:** Manages the AR session and tracking.
- **AR Camera:** Responsible for rendering the AR scene.
- **Image Tracking:** Tracks images in the real world to trigger AR elements.
- **Object Rotator:** Controls the rotation of 3D models.
- **Element:**  Contains logic for element interaction and reactivity.
- **Trigger:**  Triggers element interaction when real-world images are recognized.
- **Object Library:** Stores and manages 3D models of elements.
- **Interface Manager:**  Handles web interface interactions through the Unity game engine.

**How it Works:**
1. The app uses ARFoundation to manage the AR session and track images.
2. When a target image (representing a chemical element) is recognized, the corresponding 3D model is activated and positioned in the real world.
3. The `Element` script handles reactivity and interaction logic. When certain elements are brought together (based on trigger and `molecules` properties), they react and form new molecules (e.g., H2O).
4. The web interface (React component) interacts with the Unity game engine via the `InterfaceManager` script, allowing users to control the AR experience remotely (e.g., triggering reactions, resetting elements).

### React Web Interface

**Purpose:** To provide a user interface for navigating the AR experience.

**Inputs:**
- **Firebase Authentication:** Used to authenticate users.

**Outputs:**
- **User Interface:** Displays content and controls for the AR experience.

**How it Works:**
1. Users log in using their Google accounts via Firebase authentication.
2. The web interface displays a list of available books/chapters containing AR content (e.g., chemical elements).
3. Users select books/chapters to view AR content related to the chosen topic.
4. The interface sends commands (e.g., 'react', 'reset') to the Unity game engine via Firebase Realtime Database, triggering the corresponding AR interactions. 

**Overall:** The combination of Unity and React provides a flexible and engaging platform for learning about chemistry in an interactive and immersive way.