export function Card({ children, className }) {
  return <div className={`border rounded-xl shadow-md ${className}`}>{children}</div>;
}

export function CardContent({ children, className }) {
  return <div className={className}>{children}</div>;
}