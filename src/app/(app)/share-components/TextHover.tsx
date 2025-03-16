
type Props = {
  content: string
  className?:string
}

export default function TextHover({content, className = ''}: Props) {
  return (
<div className={`h-6 items-center text-black no-underline flex justify-center lg:justify-start group ${className}`}>
  <span className="relative h-4 overflow-hidden p-0">
    <div className="transition-transform duration-[0.4s] ease-[ease] group-hover:-translate-y-4">
      <span className="origin-[right_center] block text-[14px] lg:text-[16px] leading-4 transition-transform duration-[0.4s] ease-[ease] group-hover:rotate-[20deg]">{content}</span>
      <span className="origin-[left_center] rotate-[20deg] block text-[16px] leading-4 transition-transform duration-[0.4s] ease-[ease] group-hover:rotate-0">{content}</span>
    </div>
  </span>
</div>
  )
}