export const TableHead = ({ children }) => {
  return (
    <div className="relative overflow-x-auto shadow-md rounded-md md:rounded-lg">
      <table className="w-full text-sm text-gray-500 dark:text-gray-400 text-center">
        <thead className="text-md text-gray-700 uppercase dark:text-gray-400">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 bg-slate-300 dark:bg-slate-700"
            >
              Parameters
            </th>
            <th
              scope="col"
              className="px-6 py-3 bg-slate-200 dark:bg-slate-600 text-center"
            >
              Info
            </th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};
