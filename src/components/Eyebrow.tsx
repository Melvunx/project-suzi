import { cn } from '@/lib/utils'

export function Eyebrow({ className, ...props }: React.ComponentProps<'span'>) {
  return (
    <span
      className={cn('text-xs font-semibold tracking-[3px] text-secondary-dark uppercase', className)}
      {...props}
    />
  )
}
