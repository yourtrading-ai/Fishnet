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
import { Starred } from '@components/form';
import ClickToCopy from '@components/ui/ClickToCopy';
import { BsDot } from 'react-icons/bs';
import { STATUS_COLOR } from '@shared/constant';
import { Link } from 'react-router-dom';
import { ExecutePrompt } from '@shared/components/Prompts';
import useModal from '@shared/hooks/useModal';

const rows = [
  {
    name: 'Data <Name>',
    starred: true,
    hash: '8743b52063cd8409g885774...',
    access: <p className="whitespace-nowrap text-blue">Access request</p>,
    date: '2020-11-05 7:45:32',
  },
  {
    name: 'Data <Name>',
    starred: true,
    hash: '8743b52063cd8409g885774...',
    access: <p className="whitespace-nowrap text-blue">Access request</p>,
    date: '2020-11-05 7:45:32',
  },
  {
    name: 'Data <Name>',
    starred: true,
    hash: '8743b52063cd8409g885774...',
    access: (
      <div className="flex items-center whitespace-nowrap text-center">
        <p>Allowed</p>
        <BsDot size={45} color={STATUS_COLOR.Allowed} />
      </div>
    ),
    date: '2020-11-05 7:45:32',
  },
  {
    name: 'Data <Name>',
    starred: false,
    hash: '8743b52063cd8409g885774...',
    access: <p className="whitespace-nowrap text-blue">Access request</p>,
    date: '2020-11-05 7:45:32',
  },
  {
    name: 'Data <Name>',
    starred: true,
    hash: '8743b52063cd8409g885774...',
    access: (
      <div className="flex items-center whitespace-nowrap text-center">
        <p>Refused</p>
        <BsDot size={45} color={STATUS_COLOR.Refused} />
      </div>
    ),
    date: '2020-11-05 7:45:32',
  },
  {
    name: 'Data <Name>',
    starred: false,
    hash: '8743b52063cd8409g885774...',
    access: <p className="whitespace-nowrap text-blue">Access request</p>,
    date: '2020-11-05 7:45:32',
  },
  {
    name: 'Data <Name>',
    starred: true,
    hash: '8743b52063cd8409g885774...',
    access: (
      <div className="flex items-center whitespace-nowrap text-center">
        <p>Waiting</p>
        <BsDot size={45} color={STATUS_COLOR.Waiting} />
      </div>
    ),
    date: '2020-11-05 7:45:32',
  },
];

const BrowseDataTable = () => {
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
                  Access <TiArrowUnsorted color="rgba(28, 28, 28, 0.6)" />
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
                </TableCell>
                <TableCell>
                  <div className="flex gap-3">
                    {row.hash} <ClickToCopy text={row.hash} />
                  </div>
                </TableCell>
                <TableCell>
                  <div className="text-center">{row.access}</div>
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
                    disabled={i !== 2}
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

export default BrowseDataTable;