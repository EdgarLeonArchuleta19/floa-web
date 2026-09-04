import {
  HardHat,
  Truck,
  Trailer,
  Wrench,
  UserCheck,
  Building2,
  Loader,
  Tractor,
  Forklift,
  Hammer,
  Pickaxe,
  Cable,
  ScanLine,
  Container,
  ShieldCheck,
  Clock,
  Handshake,
} from 'lucide-react'

const iconMap = {
  'hard-hat': HardHat,
  truck: Truck,
  trailer: Trailer,
  wrench: Wrench,
  'user-check': UserCheck,
  building: Building2,
  excavator: Pickaxe,
  backhoe: Tractor,
  loader: Loader,
  bulldozer: Container,
  forklift: Forklift,
  compactor: Hammer,
  crane: Cable,
  roller: ScanLine,
  shield: ShieldCheck,
  clock: Clock,
  handshake: Handshake,
}

export function Icon({ name, className = '', ...props }) {
  const Component = iconMap[name] ?? HardHat
  return <Component className={className} aria-hidden="true" {...props} />
}