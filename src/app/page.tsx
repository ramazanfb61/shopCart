import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const data = await getServerSession(authOptions);
  
  return (
    <main className="">
      <h1>{JSON.stringify(data)}</h1>
    </main>
  );
}
