import { auth } from "@/auth";
import { Header } from "@/app/ui/Header";

export default async function Page() {
  // const session = await auth();

  return (
    <div>
      <Header user={undefined} />
      <h1>Main</h1>
    </div>
  );
}
