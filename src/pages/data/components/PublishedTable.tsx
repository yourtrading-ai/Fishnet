import { Starred } from '@components/form';
import ClickToCopy from '@shared/components/ClickToCopy';
import CustomTable, { ITableColumns } from '@components/ui/CustomTable';
import { Link } from 'react-router-dom';
import { DeletePrompt, ExecutePrompt } from '@shared/components/Prompts';
import ToggleAvailability from '@shared/components/ToggleAvailability';

const COLUMNS: ITableColumns[] = [
  {
    header: 'NAME',
    accessor: 'name',
    cell: (item) => (
      <Link
        to={`/data/${item.item_hash}/details`}
        className="text-blue whitespace-nowrap"
      >
        {item.name}
      </Link>
    ),
    sortWith: 'name',
  },
  {
    header: 'OWNER',
    cell: (item) => (
      <div className="flex gap-3">
        <p className="w-[200px] truncate">{item.owner}</p>
        <ClickToCopy text={item.owner} />
      </div>
    ),
    sortWith: 'owner',
  },
  {
    header: 'PUBLIC ACCESS',
    accessor: 'available',
    cell: (item) => (
      <ToggleAvailability
        available={item.available}
        datasetId={item.item_hash}
      />
    ),
    sortWith: 'available',
  },
  {
    header: 'DESCRIPTION',
    accessor: 'desc',
    cell: (item) => <p className="w-52 line-clamp-3">{item.desc}</p>,
    sortWith: 'desc',
  },
  {
    header: '',
    accessor: 'forgotten',
    cell: (item) => (
      <div className="flex justify-center items-center">
        <Starred starred={item.forgotten} />
        {/* <DeletePrompt /> */}
      </div>
    ),
  },
  {
    header: '',
    cell: (item) => (
      <ExecutePrompt against="algorithm" selectedHash={item.item_hash} />
    ),
  },
];

const PublishedTable = ({
  data,
  isLoading,
}: {
  data: Record<string, any>[];
  isLoading: boolean;
}) => {
  return <CustomTable data={data} columns={COLUMNS} isLoading={isLoading} />;
};

export default PublishedTable;
