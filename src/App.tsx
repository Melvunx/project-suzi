import { Button } from '@/components/ui/button'

export default function App() {
  return (
    <main className="flex min-h-svh flex-col items-center justify-center gap-4">
      <h1 className="text-5xl font-semibold">
        La cuisine créole, <em className="text-primary">sublimée</em>
      </h1>
      <p className="text-muted-foreground">Trinité · Martinique</p>
      <Button>Réserver une table</Button>
    </main>
  )
}
