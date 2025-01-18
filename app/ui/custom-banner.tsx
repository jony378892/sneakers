export default function CustomBanner({
  children,
  primaryTitle,
  secondaryTitle,
}: {
  children: React.ReactNode;
  primaryTitle: string;
  secondaryTitle: string;
}) {
  return (
    <div className="flex items-center gap-2">
      {children}
      <div className="flex flex-col">
        <p className="text-lg text-gray-800 font-semibold"> {primaryTitle} </p>
        <p className="text-xs text-gray-600"> {secondaryTitle} </p>
      </div>
    </div>
  );
}
