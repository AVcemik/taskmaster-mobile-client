import { Redirect } from 'expo-router';

export default function Index() {
  const isAuthorized = false;

  return (
    <Redirect
      href={isAuthorized ? '/home' : '/login'}
    />
  );
}