export function HexNut({ className, ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} {...props} aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2.2 19.9 7v10L12 21.8 4.1 17V7l7.9-4.8Zm0 2.5L6 8.4v7.2l6 3.7 6-3.7V8.4l-6-3.7ZM12 7.6a4.4 4.4 0 1 0 0 8.8 4.4 4.4 0 0 0 0-8.8Z"
      />
    </svg>
  )
}