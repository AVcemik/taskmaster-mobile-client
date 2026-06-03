import Button from '@/shared/ui/Button';
import Screen from '@/shared/ui/Screen';
import { Link } from 'expo-router';
import { Text} from 'react-native';

export default function LoginScreen() {
    return (
        <Screen>
            <Button >
                <Text >Авторизация</Text>
            </Button>

            <Link  href="/register" asChild>
                <Button >
                    <Text>Регистрация</Text>
                </Button>
            </Link>

        </Screen>
    );
}