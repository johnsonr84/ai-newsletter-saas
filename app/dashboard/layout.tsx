import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";

async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { has } = await auth();
  const hasPaidPlan =
    (await has({ plan: "pro" })) || (await has({ plan: "starter" }));

  if (!hasPaidPlan) {
    redirect("/#pricing");
  }

  return (
    <div className="min-h-screen flex flex-col">
      <DashboardHeader />
      <main className="flex-1">{children}</main>
    </div>
  );
}

export default Layout;
