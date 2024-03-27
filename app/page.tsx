
import {connectToDB} from '@/lib/utils'

export default function Home() {
  connectToDB()
  return (
   <main>
    <h1>Finance</h1>
   </main>
  );
}
