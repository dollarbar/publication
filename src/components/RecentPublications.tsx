


export function RecentPublications() {
  return (
    <div className="border-l border-black/20 pl-6 rounded-sm">

      <h3 className="text-lg font-semibold mb-4 tracking-wide text-black/80">
        Recent Publications
      </h3>

      <ul className="space-y-4 text-sm text-black/75">
        <li className="hover:text-black transition cursor-pointer">
          The Chronicle of Eastern Trade
        </li>
        <li className="hover:text-black transition cursor-pointer">
          Ecclesiastical Printing Traditions
        </li>
        <li className="hover:text-black transition cursor-pointer">
          Venetian Scriptoria Revisited
        </li>
        <li className="hover:text-black transition cursor-pointer">
          Early Slavic Typography
        </li>
      </ul>
    </div>
  );
}
