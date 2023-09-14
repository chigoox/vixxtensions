
import React from 'react'

import { useNavEvent } from "@/app/Componets/NavigationEvents"

export default function LuxHotToolItemPage() {
  // const [path] = useNavEvent()
  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly">

      {path.includes('helloworld') ? 'yes' : 'no'}
    </main>
  )
}

