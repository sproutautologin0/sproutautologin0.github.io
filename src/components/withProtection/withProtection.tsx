import {ProtectedRoute} from "../ProtectedRoute";

export const withProtection = <P extends object>(Component: React.ComponentType<P>) => (props: P) => {
  return (
    <ProtectedRoute>
      <Component {...props} />
    </ProtectedRoute>
  );
};
