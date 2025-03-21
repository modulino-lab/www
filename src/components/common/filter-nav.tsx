interface FilterNavProps {
  pathname: string;
}

export function FilterNav({ pathname }: FilterNavProps) {
  return (
    <div className="mr-4 hidden md:flex">
      <h2>{pathname}</h2>
    </div>
  );
}
