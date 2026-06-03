import Screen from '@/shared/ui/Screen';
import { Link } from 'expo-router';
import {  Text } from 'react-native';

export default function RegisterScreen() {
  return (
    <Screen>
      <Text>Регистрация</Text>

      <Link href="/login">
        Войти
      </Link>
    </Screen>
  );
}