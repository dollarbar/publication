type BackgroundProps = {
  image: string;
  children?: React.ReactNode;
};

export function Background({ image, children }: BackgroundProps) {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      {children}
    </div>
  );
}