import ClickToCopy from '@components/ui/ClickToCopy';

interface IAddressWrap {
  hash: string;
  withoutCopy?: boolean;
}

const AddressWrap: React.FC<IAddressWrap> = ({ hash, withoutCopy }) => {
  return (
    <div className="flex gap-3">
      <p className="w-[200px] truncate">{hash}</p>
      {withoutCopy ? <ClickToCopy text={hash} /> : null}
    </div>
  );
};

export default AddressWrap;
