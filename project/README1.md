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
      2types -static and dynamic.


URL QUERY PARAMETERS (video-39 codevolution)
- to get the  require search from query provided we use "nextRequest" from "next/server".
http://localhost:3000/comments?id=2 to get a particular one in thunder client.
http://localhost:3000/comments?query=first similarly in browser we get only first comments that has first in it.



REDIRECTS IN ROUTE HANDLERS:
as in comments -> [id] when the condition provided is false it redirects into comments page as before /1,/2,/3 remains uneffected,unlike (http://localhost:3000/comments/4) which redirects into comments page.

added shadCN by below command
npm install @shadcn/ui


headers in route handlers:
can add html formating in route.ts too as in api->route.ts
added authorization header in get method in api and got output in console the header i gave.

TEMPLATES:
CONTENT like input column THAT DOESNOT REMAIN CONSTANT WHEN WE SHIFT TO OTHER LINKS.
we name as template.tsx
ex:in group we named template.tsx,name layout.tsx and see the difference.
we can declare both layout and template same time ,template act as child to layout.

SPECIAL FILES
page.tsx
layout.tsx
template.tsx
not-found.tsx
loading.tsx
error.tsx

error.tsx
reset function execution-recovery from error
handling errors in nested function
handling errors in layouts



PARALLEL ROUTES
Parallel routes are an advanced routing mechanism that allowsfor the simultaneous rendering of multiple pages within the same layout.
complex dashboard(write copy code)
parallel routes in Next.js are defined using a feature known as slot.
slots help structure out content in a modular fashion.
to define a slot,we use the '@folder' naming convention.
each slot is then passed as a prop to its corresponding 'layout.tsx' file.
advantage : can have seperate loading and error effects.


Unmatched routes
Navigation from ui:
in case of navigation within theUI,NExt.js retains the previously active state of slot regardless of changes in URL.
pAGE RELOAD: FINDS default.tsx, not found then shows error.or not found


CONDITIONAL ROUTES:
INTERCEPTING ROUTES:
intercepting routes allow you to intercept or stop the default route behaviour to present an alternate view or component when navigating through UI while still preserving the intended route for scenarios like page reloads.
login form (ex)
(.)to match segmengs on same level.
(..)to match segmengs one level above.
(..)(..)to match segmengs two levels above.
(...)to match from root file directory.


PARALLEL INTERCEPTING ROUTES:
ex: when we click image it highlights and background images also appears with opacity.




AUTH.JS
Installation -npm install next-auth@beta zod
            -pnpm add next-auth@beta zod

for shadcn installation -pnpm dlx shadcn-ui@latest init
for specifically install a component in shadcn -npx shadcn-ui@latest add Button

🌟🌟🌟🌟🌟🌟
To check all directives installed -"npm list -g --depth=0"
output:
C:\Users\DELL\AppData\Roaming\npm
├── create-next-app@15.1.0
├── expo@51.0.18
├── express-generator@4.16.1
├── npm@10.9.1
├── shadcn-ui@0.9.4
└── typescript@5.6.3
