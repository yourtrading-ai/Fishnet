import { setPageDetails } from '@slices/appSlice';
import { useAppDispatch, useAppSelector } from './useStore';

export default () => {
  const dispatch = useAppDispatch();
  const { pageTitle } = useAppSelector((state) => state.app);

  const handleSetTitle = (title: string) =>
    dispatch(setPageDetails({ pageTitle: title }));

  const handleGetTitle = () => pageTitle;

  return {
    title: pageTitle,
    setTitle: handleSetTitle,
    getTitle: handleGetTitle,
  };
};
