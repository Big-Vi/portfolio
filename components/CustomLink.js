import Link from "next/link";

export default function CustomLink({ as, href, ...otherProps }) {
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

  if (isInternalLink) {
    return (
      <>
        <Link as={as} href={href}>
          <a {...otherProps} />
        </Link>
      </>
    );
  }
  return (
    <a target="_blank" rel="noopener noreferrer" {...otherProps} href={href} />
  );
}
