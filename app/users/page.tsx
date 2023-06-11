import type { Metadata } from "next";
import getAllUsers from "@/lib/getUsers";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Users",
};

export default async function UsersPage() {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;

  console.log("hello");
  /**
   * You can see once you hover over users from the homepage next starts to pre fetch
   * this is what makes it a server component
   */

  const content = (
    <section>
      <h2>
        <Link href="/">Back To home</Link>
      </h2>
      <br />
      {users.map((user) => {
        return (
          <>
            <p key={user.id}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </p>
            <br />
          </>
        );
      })}
    </section>
  );
  return content;
}

/**
 * This is a server component:
 * meaning it will request at build time since the website is static we use it by
 * creating a lib library at root level -> doing our fetch logic there and importing it
 *
 *
 *
 * Full definition:
 * React Server Components work by allowing developers to define server-side logic directly in their React components.
 * This logic is then executed on the server-side during server-side rendering,
 * reducing the amount of data that needs to be transferred to the client.
 *
 * We should use server components when:
 *  - Want to access BE resources directly
 *  - Keep api Keys hidden
 *  - Reduce client side JS if its a large set of data
 *
 * We should avoid using server components if (client side fetch):
 *  - We want to add event listeners or interactivity
 *  - use Lifecyle methods such as useState / useEffect
 *  - use customs hooks that depend on state or effects
 */
