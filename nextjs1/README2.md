#STEPS:

1: CREATEd a folder on desktop
2: OPEN in VS code
3: OPEN terminal
4: TYPE -"npx create-next-app@latest" -command to create new app
5: Name your project
6:  √ Would you like to use TypeScript? ... No / Yes    
    √ Would you like to use ESLint? ... No / Yes        
    √ Would you like to use Tailwind CSS? ... No / Yes  
    √ Would you like your code inside a `src/` directory? ... No / Yes
    √ Would you like to use App Router? (recommended) ... No / Yes
    √ Would you like to use Turbopack for next dev? ... No / Yes
    √ Would you like to customize the import alias (@/* by default)? ... No / Yes
    SELECT as shown above,your new folder with nextjs tools will be installed
7: "npm run dev" to see our application run on default browser.





#Features of nextjs 15

1:   Hot Module Replacement   :   changes made in code directly effect browsing page.
2:   fonts        :  we see fonts folder that effects our fonts.
3:   favicon.ico  :  file that appears on browsers tab.
4:   globals.css  :  for fonts or directly to import tailwindcss.
5:   layout.tsx   :  anything done here effects all pages and routes. 
                    ex: added metadata title as hello 👋👋 ( we can add emojis - win+; ,also browsing window Arc like google chrome is used for better display.)
6:   page.tsx     :  for our code and changes.   
7:   we can see console output metioning server in console.
8:   "react server components" rendered from server so they can access serverside resources directly like databases,and html o/p sent to client.
9:   "react client components" rendered on client side (browser). to use these in nextjs we need to add "use client " on top .
TO REFER ABOVE IN DETAIL -"https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#when-to-use-server-and-client-components"
10:  In Next.js, "render" refers to the process of converting your React components into actual HTML that can be displayed on a webpage.
11:  ROUTES-  INTUITIVE(supportive) route system : creating a file in our folder simply creates a new page to direct.
                                                   file name is route name which we direct into.
12:  Nested routes-if we want 2 pages with same name (like  dashboard ) we use nested routes with similar file but different names under same folder.
13:  To direct into dashboard page(routes) we enter "http://localhost:3000/dashboard" in search tab.
     similarly for analytics tab "http://localhost:3000/dashboard/analytics".

