import Image from "next/image"
import { cn } from "@/lib/utils"

interface FeaturedDishProps {
  className?: string
}

export function FeaturedDish({ className }: FeaturedDishProps) {
  return (
    <div className={cn("relative rounded-xl overflow-hidden", className)}>
      <Image
        src="/images/ox-signature-steak.png"
        alt="OX Signature Steak - Dry Aged Ribeye"
        width={800}
        height={600}
        className="w-full object-cover"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
        <h3 className="text-white text-xl font-bold">OX Signature Ribeye</h3>
        <p className="text-white/90 text-sm">Dry aged 45 dias, finalizado na brasa</p>
      </div>
    </div>
  )
}
