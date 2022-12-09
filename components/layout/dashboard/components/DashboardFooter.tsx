import Link from 'next/link';

export const DashboardFooter: React.FC = () => {
  // TODO: styling footer layout and buttons
  return (
    <div>
      <p>Copyright 2022, AltoTech Global</p>
      <Link href='/help' passHref>
        <button type='button'>Help</button>
      </Link>
      <Link href='/privacy' passHref>
        <button type='button'>Privacy</button>
      </Link>
      <Link href='/tos' passHref>
        <button type='button'>Terms of Service</button>
      </Link>
    </div>
  );
};

export default DashboardFooter;
