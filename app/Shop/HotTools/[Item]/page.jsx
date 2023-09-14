import React from 'react'

//import { useNavEvent } from "@/app/Componets/NavigationEvents"
export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }]
}

export default function LuxHotToolItemPage({ params }) {
  // const [path] = useNavEvent()
  const { id } = params
  console.log(id)

  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly">

      {/*   {path.includes('helloworld') ? 'yes' : 'no'} */}
    </main>
  )
}

