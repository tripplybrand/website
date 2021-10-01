type OutsideLinkProps = {
  href: string
  text: string
}
const OutsideLink = ({ href, text }: OutsideLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="underline text-black hover:text-matisse-red-200
    focus:outline-none focus-visible:ring-1 sm:focus-visible:ring-2 focus-visible:ring-matisse-red-200 focus-visible:ring-opacity-60"
    >
      {text}
    </a>
  )
}

export default OutsideLink
