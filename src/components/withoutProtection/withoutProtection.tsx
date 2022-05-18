import {GuestRoute} from "../GuestRoute";

export const withoutProtection = <P extends object>(Component: React.ComponentType<P>) => (props: P) => {
  return (
    <GuestRoute>
      <Component {...props} />
    </GuestRoute>
  );
};
