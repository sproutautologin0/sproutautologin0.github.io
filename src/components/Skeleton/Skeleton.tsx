import React from 'react';
import MuiSkeleton from '@mui/material/Skeleton';

export interface SkeletonProps {
  children: React.ReactElement;
  width: string;
  height: string;
  variant: 'text' | 'rectangular' | 'circular';
  isLoading: boolean;
}

export const Skeleton = (props: SkeletonProps) => {
  const {children, isLoading, ...skeletonProps} = props;
  if (!children) {
    return null;
  }

  if (isLoading) {
    return (<MuiSkeleton {...skeletonProps} />);
  }

  return children;
};
