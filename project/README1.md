🌟⭐💮💫✨.In default (●'◡'●)👋 SERVER COMPONENTS
-all components are server components.
-😊have ability to run tasks like reading files or fetching files or fetching data from a database.
-😒dont have ability to use hooks or handle user interactions.

🌟⭐💮💫✨CLIENT COMPONENTS🤷‍♀️🤷‍♂️
-Its necessary to add "use client" at top of component file.😒
-😒client components cant perform tasks like reading files.
-😊but have ability to use hooks and manage interactions.

🌟⭐💮💫✨Routing👋 
-has file based routing.
-🖇️🖇️🔗URL paths that users can access in browser are defined by files and folders in code.
RULES
🫰all routes must be placed inside app folder.
🫰 every file that corresponds to route must be named page.js or page.tsx.
🫰every folder corresponds to path segment in browser URL.

🥇NESTED ROUTES example
    <div>🍉🍅🍓BLOG-HELLO FOODIES🍇😋🍒</div>
       -- <div>🍉🍅🍓11111🍇😋🍒</div>
       -- <div>🍉🍅🍓22222🍇😋🍒</div>

🥈 DYNAMIC ROUTES example
    see Products

🌟split():
    🫤Purpose: It splits a string into an array of substrings, using a specified delimiter.

🌟pop():
    🫤Purpose: It removes (and returns) the last element of an array.

🌟🌟🌟🌟
client side rendering                 ❌❌❌❌    server side rendering
-rendering happens on web browser     ❌❌❌❌      - rendering on server
javascript execution                  ❌❌❌❌       page loads with HTML
page generation                       ❌❌❌❌       RETURNS rendered page as response
DOM updation                          ❌❌❌❌ 


❓❓❓SEO-search engine optimization

➡️useROUTER is a hook so it is applied on client side only.
➡️useState: Manages component state.
➡️react hooks are not supported in server components. 


❔HOOKS❔
➡️useState: Manages component state.
➡️useEffect: Handles side effects (like API calls, subscriptions).
➡️useContext: Access context values.
➡️useReducer: More complex state management.
➡️useRef: Persist values across renders.
➡️Custom Hooks: Reusable logic.


❔login❔
➡️if the user is true login success else unsuccess.


❔React.FC❔
➡️It is a TypeScript type for a functional component.
➡️It ensures the component follows the correct function signature (like props and return type).


❔
