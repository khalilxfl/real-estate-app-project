### Real Estate App Description

This is a full-stack real estate web application built using React and Vite for the frontend and an Express.js server for the backend. The app utilizes a postman mock API to make calls for property listings. The Google Maps API is used to show locations of the properties on a map.

### Features
- **Form Verification**: Ensure data integrity with client-side form validation.
- **Filtering Options**: Easily refine property search results based on criteria such as bedrooms.
- **Property Listings**: View detailed information about available properties.
- **Interactive Map**: Utilize Google Maps API integration to visually locate properties.
- **Mock API Integration**: Utilize a Postman mock API for realistic property data.
- **Server-Side Communication**: Interact with the server via localhost to access additional information.
- **Details Page**: Access additional property information and location details by clicking on property images. The map shows up to provide a visual representation of the property's location.
- **Single-Page Application**: Seamlessly navigate between different views without page reloads.
- **Routing**: Implement client-side routing with React Router for a smooth user experience.
- **Component-Based Architecture**: Build a modular application using React components for efficient development and maintenance.
- **Props Passing**: Pass data and functionality between components using props for a cohesive user experience.

### Demo
![Demo2](https://github.com/khalilxfl/real-estate-app-project/assets/139386338/700cc4e5-4cee-4f85-8a07-315669c59c5a)

A smoother demo can be found at: https://imgur.com/5jyZzjM.gif

### How to Run

**To run the app, follow these steps:**

1. **Open Two Terminal Windows**.
2. **Install npm** if not already installed.
3. **Navigate to the Real Estate Directory**:
   - If necessary, navigate first to "web hw2" and then to the respective directories.
4. **Navigate to the Server Directory**.
5. **Install Dependencies**:
   - Run `npm install` in both terminal windows to install dependencies.
   - Dependencies include express, cors, react, react-router-dom, and jquery.
6. **Start the App**:
   - Run `npm run dev` in the Real Estate directory. This should start the app.
   - To display the app, hold `Ctrl` and click on the localhost link.
7. **Start the Server**:
   - Run `npm run dev` in the server terminal window. This should start the server on port 5000.
   - You can view the information in the server by typing `http://localhost:5000/api` in your browser.
### Note:
You will need a JavaScript Google API key to utilize the Google Maps feature. Place the API key in the map component's placeholder.

## License

    Copyright [2024] [Khalil McFarlane]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.

