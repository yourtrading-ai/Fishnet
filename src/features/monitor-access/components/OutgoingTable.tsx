import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { RiFilter2Line } from 'react-icons/ri';
import { TiArrowUnsorted } from 'react-icons/ti';
import Button from '@components/ui/Button';
import { BsDot } from 'react-icons/bs';
import { STATUS_COLOR } from '@shared/constant';
import { Starred } from '@components/form';
import ClickToCopy from '@components/ui/ClickToCopy';
import { Link } from 'react-router-dom';
import useModal from '@shared/hooks/useModal';
import { ExecutePrompt } from '@shared/components/Prompts';

const rows = [
  {
    name: 'Data <Name>',
    hash: '8743b52063cd8409g885774...',
    status: 'Allowed',
    starred: false,
    date: '2020-11-05 7:45:32',
  },
  {
    name: 'Data <Name>',
    hash: '8743b52063cd8409g885774...',
    status: 'Refused',
    starred: true,
    date: '2020-11-05 7:45:32',
  },
  {
    name: 'Data <Name>',
    hash: '8743b52063cd8409g885774...',
    status: 'Waiting',
    starred: true,
    date: '2020-11-05 7:45:32',
  },
  {
    name: 'Data <Name>',
    hash: '8743b52063cd8409g885774...',
    status: 'Waiting',
    starred: false,
    date: '2020-11-05 7:45:32',
  },
  {
    name: 'Data <Name>',
    hash: '8743b52063cd8409g885774...',
    status: 'Allowed',
    starred: false,
    date: '2020-11-05 7:45:32',
  },
  {
    name: 'Data <Name>',
    hash: '8743b52063cd8409g885774...',
    status: 'Allowed',
    starred: true,
    date: '2020-11-05 7:45:32',
  },
  {
    name: 'Data <Name>',
    hash: '8743b52063cd8409g885774...',
    status: 'Refused',
    starred: true,
    date: '2020-11-05 7:45:32',
  },
];

const OutgoingTable = () => {
  const { isOpen, handleOpen, handleClose } = useModal();

  return (
    <>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>
                <div className="flex gap-2 items-center">
                  Name <TiArrowUnsorted color="rgba(28, 28, 28, 0.6)" />
                </div>
              </TableCell>
              <TableCell>
                <div className="flex gap-2 items-center">
                  Hash <TiArrowUnsorted color="rgba(28, 28, 28, 0.6)" />
                </div>
              </TableCell>
              <TableCell>
                <div className="flex gap-2 items-center whitespace-nowrap">
                  Status <TiArrowUnsorted color="rgba(28, 28, 28, 0.6)" />
                </div>
              </TableCell>
              <TableCell>
                <div className="flex gap-2 items-center">
                  Description <TiArrowUnsorted color="rgba(28, 28, 28, 0.6)" />
                </div>
              </TableCell>
              <TableCell />
              <TableCell>
                <div className="flex gap-2 items-center justify-end">
                  <RiFilter2Line /> Filter
                </div>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, i) => (
              <TableRow
                key={i}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>
                  <Link
                    to={`/data/${'dataset-id'}/details`}
                    className="text-blue whitespace-nowrap"
                  >
                    {row.name}
                  </Link>
                  {i % 3 === 0 ? (
                    <p className="whitespace-nowrap">Usages left: 10</p>
                  ) : null}
                </TableCell>
                <TableCell>
                  <div className="flex gap-3">
                    {row.hash} <ClickToCopy text={row.hash} />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center whitespace-nowrap text-center">
                    <p>{row.status}</p>
                    <BsDot size={45} color={STATUS_COLOR?.[row.status]} />
                  </div>
                </TableCell>
                <TableCell>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore.
                  </p>
                </TableCell>
                <TableCell>
                  <Starred starred={row.starred} />
                </TableCell>
                <TableCell>
                  <Button
                    text="Use"
                    btnStyle="outline-blue"
                    disabled={i % 3 === 0}
                    onClick={handleOpen}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ExecutePrompt isOpen={isOpen} handleClose={handleClose} />
    </>
  );
};

export default OutgoingTable;