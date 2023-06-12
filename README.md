## Server Components

**Server Components:**
React Server Components work by allowing developers to define server-side logic directly in their React components. This logic is then executed on the server-side during server-side rendering, reducing the amount of data that needs to be transferred to the client.

**We should use server components when:**
- Want to access BE resources directly
- Keep api Keys hidden
- Reduce client side JS if its a large set of data

**We should avoid using server components if (client side fetch)**
- We want to add event listeners or interactivity
- use Lifecyle methods such as useState / useEffect
- use customs hooks that depend on state or effects


## SSG vs. SSR vs. ISR

**SSG - Static Site Generation** 


If we know the params of a `fetch` that we are supposed to receive we can apply SSG to pre fetch them and apply them at build time. 

We can do so by implementing and async function that will get those params

```
export async function generateStaticParams() {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;
  return users.map((user) => ({
    userId: user.id.toString(),
  }));
}
```

This function can go under our fetch page and will run at build time

---

**SSR - Server Side Rendering** 


SSR generates the HTML on the server at the time of the request and is useful for content that needs to be personalized or frequently updated.

```
import React from 'react';

function Home({ serverRenderedData }) {
  return (
    <div>
      <h1>Server-Side Rendering Example</h1>
      <p>Data fetched on the server: {serverRenderedData}</p>
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch data from an API or perform any server-side operations
  const serverRenderedData = 'This data is fetched on the server';

  // Return the data as props
  return {
    props: {
      serverRenderedData,
    },
  };
}

export default Home;
```

---
**ISR - Incremental Static Regeneration**

ISR combines the benefits of both SSG and SSR. With ISR, pages are initially generated at build time like SSG, but they can also be re-generated periodically or upon user requests to keep the content up to date. This allows you to have both static content and dynamic data. ISR is ideal for content that updates occasionally or in response to user interactions.

To allow ISR in our fetch we can add `revalidate` plus the time we want

```
const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, {next: {revalidate:60}})
```
