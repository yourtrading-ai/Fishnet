import { FolderIcon, LockIcon, LogoutIcon, ProfileIcon } from '@assets/icons';
import useWalletAuth from '@shared/hooks/useAuth';
import classNames from 'classnames';
import { Link, NavLink } from 'react-router-dom';

function NavList() {
  const links = [
    {
      to: '/data',
      icon: <FolderIcon />,
    },
    {
      to: '/monitor-access',
      icon: <LockIcon />,
    },
    {
      to: '/profile',
      icon: <ProfileIcon />,
    },
  ];

  return (
    <ul className="flex flex-col gap-[40px]">
      {links.map((item, i) => (
        <li key={i}>
          <NavLink to={item.to}>
            {({ isActive }) => (
              <div
                className={classNames(
                  'text-[#7B8290] text-[16px] hover:text-primary',
                  {
                    '!text-primary': isActive,
                  }
                )}
              >
                <div className="h-[24px]">{item.icon}</div>
              </div>
            )}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

function SideNavigation() {
  const { handleDisconnect } = useWalletAuth();

  return (
    <div
      id="side-navigation"
      className="flex flex-col justify-between pt-8 pb-14"
    >
      <div className="flex flex-col items-center">
        <Link to="/data">
          <img src="./fishnet.png" alt="Robotter PNG" width={36} />
        </Link>
        <nav className="mt-[56px]">
          <NavList />
        </nav>
      </div>
      <div className="pt-8 border-t border-solid border-t-[#C8CCCD]">
        <LogoutIcon
          color="#91999C"
          className="cursor-pointer"
          onClick={handleDisconnect}
        />
      </div>
    </div>
  );
}

export default SideNavigation;
