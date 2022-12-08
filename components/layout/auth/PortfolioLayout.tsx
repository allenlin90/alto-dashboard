export const PortfolioLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
  // ...props // server-side props
}) => {
  // a grid or flex-box layout having
  // left - image slider
  // right - login form
  return <>{children}</>;
};

export default PortfolioLayout;
