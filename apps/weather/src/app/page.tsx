import { Button } from "@repo/ui/components/button"
import { Loader2Icon } from "lucide-react"


export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center ">
     <div className="text-center items-center">
       <h1 className="text-4xl font-bold text-blue-600">Ready for Doing</h1>
         <Button size="sm" disabled className="flex">
          <Loader2Icon className="animate-spin" />Please wait
          </Button>
      
     </div>
    </main>
  )
}
