import { redirect } from "next/navigation";
import { createClient } from "@/lib/server";
import { ProtectedContent } from "@/components/protected-content";

export default async function ProtectedPage() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/auth/login");
  }

  return <ProtectedContent />;
}
