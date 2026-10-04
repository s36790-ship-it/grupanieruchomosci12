import { redirect } from 'next/navigation'

// Wejście na adres główny CMS-a prowadzi prosto do panelu.
export default function Strona() {
  redirect('/panel')
}
