Navbar
--


--------
1. create the "NavBar.js" in the "components" directiory and place the "component" dorectiory in the "src" folder.
2. import the "useState" and "UseEffect" and "React" from the react.
    - useState and useEffect: These are React hooks used to manage component state and perform side effects (like checking if the user is logged in).

3. import the "Link" and "useNavigate" from the "react-router-dom".

    - Link: This is a component from react-router-dom used for navigating between different pages in a React app without reloading the page.
    - useNavigate: This hook from react-router-dom is used to programmatically navigate to different routes.
4. write the CSS of navbar in CSS folder as "NavBar.css" and import the css in the "NavBar.js" 
5. create the NavBar arrow function and retur the NavBar structure.
6. create two  react hookes for hamburger option and for login and logout 

         const [isMenuOpen, setIsMenuOpen] = useState(false);
        const [isLoggedIn, setIsLoggedIn] = useState(false);

    - The code uses the useState hook, which is a part of React's Hook API
    - This hook is used to declare state variables in a functional component.
    -  In class components, you'd use this.state to hold state values, but with functional components, you use useState
    - Here's the syntax for using useState:

            const [stateVariable, setStateFunction] = useState(initialValue);

    - stateVariable: This is the variable that holds the current state value.
    - setStateFunction: This is the function you use to update the state value. You will call this function whenever you want to change the value of stateVariable.
    - initialValue: The initial value that the state variable should have when the component first renders.

7. initilize "useNavigate" function as the  const navigate