import { useEffect, useState } from 'react'

const HERO = "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400'%3E%3Crect width='800' height='400' fill='%231a5fa8'/%3E%3Ctext x='400' y='210' font-size='28' fill='white' text-anchor='middle'%3EVélo électrique pliable%3C/text%3E%3C/svg%3E"

// Mission : ouvre Lighthouse (DevTools → onglet Lighthouse → Performance) et
// corrige les 3 problèmes volontaires ci-dessous.

export default function App() {
  const [showBanner, setShowBanner] = useState(true) // <= problème 2 réglé ici 0 délai garanti
  const [points, setPoints] = useState<number | null>(null)


  function calculerPoints() {
    // Problème 3 (INP) : ce calcul bloque le thread principal plusieurs
    // centaines de ms : la page devient totalement figée pendant ce temps.
    let total = 0
    let i = 0
    const Tranche_Max = 400_000_000
    const Taille_Tranche = 20_000_000

    function step() {
      const end = Math.min(i + Taille_Tranche, Tranche_Max)
      
      for (; i < end; i++) {
        total += Math.sqrt(i) % 7
      }

      if (i < Tranche_Max) {
        setTimeout(step, 0)
      } else {
        setPoints(Math.round(total % 1000))
      }
    }

    step()
  }

  return (
    <div className="page">
      {showBanner && (
        <div className="banner">🎉 Livraison offerte ce week-end !</div>
      )}

      <h1>CycloShop</h1>

      {/* Problème 1 (LCP/CLS) : pas de width/height ni d'aspect-ratio => voir dans le css le ratio*/}
      <img className="hero" src={HERO} alt="Vélo électrique pliable" width={800} height={400} />

      <p>Le vélo électrique pliable le plus vendu de la boutique.</p>

      <button onClick={calculerPoints}>Calculer mes points fidélité</button>
      {points !== null && <p>Tu as {points} points fidélité.</p>}
    </div>
  )
}
