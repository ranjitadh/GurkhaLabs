
import Dashboard from "@/app/Home/page"
export default function Home(

) {
  return (
    <> 

   <div className="flex flex-col min-h-screen text-black font-sans p-8 pb-20 sm:p-20">
  <div className="h-[20px]"></div>
  <div className="flex-1">
    <Dashboard />
  </div>
  <div className="h-[20px]"></div>
</div>

    
    </>
  );
}
