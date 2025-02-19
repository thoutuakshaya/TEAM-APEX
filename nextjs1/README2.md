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
    √ Would you like to customize the import alias (@/* by default)? ... No / Yes -no
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

8:   "react server components" rendered from server so they can access serverside resources directly like databases,and  html o/p sent to client.

9:   "react client components" rendered on client side (browser). to use these in nextjs we need to add "use client " on top .
TO REFER ABOVE IN DETAIL -"https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#when-to-use-server-and-client-components"

10:  In Next.js, "render" refers to the process of converting your React components into actual HTML that can be displayed on a webpage.

11:  ROUTES-  INTUITIVE(supportive) route system : creating a file in our folder simply creates a new page to direct.
                                                   file name is route name which we direct into.

12:  Nested routes-if we want 2 pages with same name (like  dashboard ) we use nested routes with similar file but different  names under same folder.

13:  To direct into dashboard page(routes) we enter "http://localhost:3000/dashboard" in search tab.
     similarly for analytics tab "http://localhost:3000/dashboard/analytics".

14:  Dynamic Routing: this concept is used when we need details of blocks clicking it but not by separate page      creation (routes) but in same route .
    -to extract different info from different users we use -PARAMS _instance of MDX Components.

---rendering
Modern frameworks like Next.js and Nuxt.js support a hybrid approach:

Use SSR for initial rendering (faster load, SEO-friendly).
Use CSR for subsequent page interactions (better interactivity).
This combines the best of both worlds!

15: layout.tsx is the main page which effects all the pages(routes) across code.

NOTE: NAMES layout.tsx,page.tsx is only recognised by nextjs ,otherwise it shows error.

16: GROUPING ROUTES (route groups): 
    Problem : to get seperate layout.tsx to dashboard and user frontend,unlike we have same layout.tsx.
    Solution : we use seperate folders for dashboard and root and keep them in braces as in code.

    NOTE: "(dashboard)" is different from "dashboard".


17: ERROR HANDLING :A separate folder "error.tsx" is provided by nextjs ,such that end user doesnot see detailed version of error like developer do.
TO REFER MORE :https://nextjs.org/docs/app/building-your-application/routing/error-handling

18: Adding LOADER: simply add a folder "loading.tsx" to create a loader.

19: DataFetching : unlike previous version we dont need to write clumsy code ,better see the code ->trail.tsx. 
=>there json data is from websites like MOCKAPI, TYPICODE.

20:Server components HMR cache:store each load as a cache ,fast response.
->server side fetching -->benefits--> 1.developer experience(less code).
2.improved load time.
3.better SEO
4.SIMPLIFIED LOGIC
5.automatic request deduplication (reduce unnecessary api codes)
6.improved security.
7.reduced network waterfall.

21.Static site generation(SSG):A technique where HTML pages are generated at build time.

22.incremental static generation (ISG)-extension of SSG.
---disadvantage of SSG,to not reload the updated code is improved by ISG.
---1.TIME BASED REVALIDATION.(sets time)
---2.REVALIDATE REQUEST AGTER SOME TIME.
---3.ON DEMAND REVALIDATION.

23.SERVER SIDE RENDERING(SSR):generated HTML for a page on server in response to users.
-content is created dynamically for each user request.and not for each deployment.
--disadvantage-slower than SSG,puts more load on server.
--advantage-always have updated content.

24.PARTIAL PRERENDERING (PPR)--combines static rendering and dynamic rendering.
    -allows to render a static shell of page while seeing dynamic content
    -key difference WITH PPR: allows for a hybrid approach for single page.
    WORKING-during build,nextjs generates a static shell of pages,which has components that are dynamic.

25.BACKEND:
    SETTING UP ROUTES:
        no need for setup manage monitor on active etc as in previous version
        -JUST NAME A NEW FOLDER AS "ROUTE.TS".

26: EXPORT : to export to various platform -METADATA. (generateMetadata export it)