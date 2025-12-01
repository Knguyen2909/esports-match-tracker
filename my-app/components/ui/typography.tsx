import { ReactNode } from "react";

interface TypographyProps{
    text: ReactNode;
}

export function TypographyH1({ text }: TypographyProps) {
  return (
    <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
      {text}
    </h1>
  )
}

export function TypographyH2({ text }: TypographyProps) {
  return (
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      {text}
    </h2>
  )
}

export function TypographyH3({ text }: TypographyProps) {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      {text}
    </h3>
  )
}

export function TypographyH4({ text }: TypographyProps) {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      {text}
    </h4>
  )
}

export function TypographyP({ text }: TypographyProps) {
  return (
    <p className="leading-7 [&:not(:first-child)]:mt-6">
      {text}
    </p>
  )
}

export function TypographyList({ text }: TypographyProps) {
  return (
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
      <li>1st level of puns: 5 gold coins</li>
      <li>2nd level of jokes: 10 gold coins</li>
      <li>3rd level of one-liners : 20 gold coins</li>
    </ul>
  )
}

export function TypographyLarge({ text }: TypographyProps) {
  return <div className="text-lg font-semibold">
    {text}
    </div>
}

export function TypographySmall({ text }: TypographyProps) {
  return (
    <small className="text-sm leading-none font-medium">
      {text}
    </small>
  )
}

