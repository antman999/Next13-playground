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
