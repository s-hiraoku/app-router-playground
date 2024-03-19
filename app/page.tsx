import { GuestLayout } from "@/app/ui/GuestLayout";
import { auth } from "@/auth";

export default async function Page() {
  // const session = await auth();

  return (
    <GuestLayout>
      <h1>Main</h1>
    </GuestLayout>
  );
}
