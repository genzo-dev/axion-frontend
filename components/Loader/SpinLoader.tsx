export default function SpinLoader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="border-t-transparent border-b-primary border-r-primary border-l-primary border-2 w-4 h-4 rounded-full animate-spin"></span>
    </div>
  );
}
