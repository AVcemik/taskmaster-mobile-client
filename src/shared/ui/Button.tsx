import { ReactNode } from "react";
import { Pressable, PressableProps, StyleProp, ViewStyle } from "react-native";
import { colors, radius, spacing } from "../theme";



interface ButtonProps extends PressableProps {
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
}

export default function Button({
    children,
    style,
    disabled,
    ...props
}: ButtonProps) {
    return (
        <Pressable
            disabled={disabled}
            style={({ pressed}) => [
                {
                    margin: spacing.md,
                    padding: spacing.xl,
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                    backgroundColor: colors.surface,
                    color: colors.text.primary,
                    borderRadius: radius.sm,
                    opacity: disabled ? 0.5 : pressed ? 0.8 : 1
                },
                style
            ]}
            {...props}
            >
            {children}
        </Pressable>
    )
}