import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import styles from './User.module.scss';
import { increment } from '../../store/slices/UserSlice';

interface UserProps { }

const User: FC<UserProps> = () => {
  const dispatch = useAppDispatch()
  const count = useAppSelector()

  return (
    <div className={styles.User} data-testid="User">
      User Component
      <div></div>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
}

export default User;
