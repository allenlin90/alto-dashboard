import Link from 'next/link';
import Image from 'next/image';
import { routes } from 'constants/routes';

export interface DashboardSideNavProps {
  imgSrc?: string;
}

export const DashboardSideNav: React.FC<DashboardSideNavProps> = ({
  imgSrc = '/assets/images/altotech_logo.png', // static placeholder
}) => {
  return (
    <>
      <div>
        <div style={{ position: 'relative' }}>
          {/* TODO: lazyload with minimized shimmer/skeleton animation */}
          <Image src={imgSrc} alt='plant_logo' priority />
        </div>
        {routes.map(({ id, title, href }) => {
          if (!href) return null;

          // next/link prefetches following js files for links to optimize page/component transition
          return (
            <Link key={id} href={href} passHref>
              <button type='button'>{title}</button>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default DashboardSideNav;
