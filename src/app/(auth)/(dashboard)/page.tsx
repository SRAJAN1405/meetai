
import {headers} from "next/headers";
import {redirect } from "next/navigation";
import {auth} from "@/lib/auth"; 
import { HomeView } from "@/app/modules/home/ui/views/home-views";
const Page = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session){
    redirect("/sign-in");
  }
  return <HomeView />;
};
export default Page;
//localhost:3000/auth/sign-up
