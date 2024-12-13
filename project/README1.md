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
    <div>🍉🍅🍓BLOG-HELLO FOODIES🍇😋</div>
       -- <div>🍉🍅🍓11111🍇😋</div>
       -- <div>🍉🍅🍓22222🍇😋</div>

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


❔ROUTES:
we just create a seperat folder in src->app->new_folder->route.ts  for creating routes.

🔒🔐PRIVATE FOLDERS
-cant be viewed on browser
-used for
    -seperating ui logic from routing logic
    -consistently organizing internal files across a project
    -sorting and grouping files in code editors
    -avoiding potential naming conflicts with future Next.js file conventions.
    -%5F , _(name of private folder) 
        ex: _lib,%5Flib-its visible when %5Flib is kept.



🌟ROUTING GROUPS
for large applications folders become complex.
and to direct them the path also become longer.
solution-💡: for this routing groups are introduced ,where a folder is kept in braces that holds multiple sub folders but the path is not effected.


🌟LAYOUTS-layout.tsx
-A page is UI that is unique to a route.
-A layout is UI that is shared between multiple pages in app.
*header,*footer ...


🌟get request
🌟post request
🌟patch request
🌟delete request


💡METADATA API💡
Ensuring proper search engine optimization(SEO) is crucial for increasing visibility and attracting users.
we can define metadata for each page.tsx
why-❔❓
    💡accurate and relavant information is display when shared or indexed.(not layout of page but data in page).
    💡Both page.tsx and layout.tsx can export metadata.
     💡METADATA is read in order from root level to final page level.
      💡when thers metadata in multiple places for same route,they get combined,but page metadata will replace layout metadata if they have the same properties.   
      2types -static and dynamic.qq
