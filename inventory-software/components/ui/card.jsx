const Card = ({ className = '', ref, ...props }) => (
  <div
    ref={ref}
    className={`rounded-xl border bg-white shadow-sm ${className}`}
    {...props}
  />
);
Card.displayName = "Card";

const CardHeader = ({ className = '', ref, ...props }) => (
  <div
    ref={ref}
    className={`flex flex-col space-y-1.5 p-6 ${className}`}
    {...props}
  />
);
CardHeader.displayName = "CardHeader";

const CardTitle = ({ className = '', ref, ...props }) => (
  <h3
    ref={ref}
    className={`font-semibold leading-none tracking-tight ${className}`}
    {...props}
  />
);
CardTitle.displayName = "CardTitle";

const CardDescription = ({ className = '', ref, ...props }) => (
  <p
    ref={ref}
    className={`text-sm text-gray-500 ${className}`}
    {...props}
  />
);
CardDescription.displayName = "CardDescription";

const CardContent = ({ className = '', ref, ...props }) => (
  <div ref={ref} className={`p-6 pt-0 ${className}`} {...props} />
);
CardContent.displayName = "CardContent";

const CardFooter = ({ className = '', ref, ...props }) => (
  <div
    ref={ref}
    className={`flex items-center p-6 pt-0 ${className}`}
    {...props}
  />
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
